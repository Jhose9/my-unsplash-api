import { Request, Response } from "express";
import { PrismaClient } from "prisma/prisma-client";
const prisma = new PrismaClient();

const base: any = [];
export async function GetRank(req: Request, res: Response) {
  try {
    const cantidad = await prisma.user.count();
    if (cantidad !== 0) {
      for (let i = 1; i <= cantidad; i++) {
        const userData = await findUser(i);
        const postData = await FindPostLast(i);
        const likeData = await FindLikes(i);
        const likecount = await FindLikesAll(i);

        base[i-1] = {
          userData,
          postData,
          likeData,
          likecount,
        };
      }
    }
    res.json(base);
  } catch (error) {
    console.log(error);
  }
}

async function findUser(idUser: number) {
  try {
    const data = await prisma.user.findUnique({
      where: {
        id: idUser,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function FindPostLast(idUser: number) {
  try {
    const data = await prisma.post.findFirst({
      where: {
        authorid: idUser,
      },
      orderBy: {
        fecha: "desc",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function FindLikes(idUser: number) {
  try {
    const value = await FindPostLast(idUser);

    const data = await prisma.likes.findMany({
      where: {
        likeid: value?.id,
      },
    });
    return data[0];
  } catch (error) {
    console.log(error);
  }
}

async function FindLikesAll(idUser: number) {
  try {
    let totallikes = 0;
    const data = await prisma.post.findMany({
      where: {
        authorid: idUser,
      },
      include: {
        like: true,
      },
    });

    for (const post of data) {
      totallikes += post.like.length;
    }
    return totallikes;
  } catch (error) {
    console.log(error);
  }
}
