import { Request, Response } from "express";
import { PrismaClient } from "prisma/prisma-client";
import { post } from "../types/type-post";
const prisma = new PrismaClient();

export async function NewPost(req: Request, res: Response) {
  try {
    const datos: post = req.body;

    await prisma.user.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        numberpost: { increment: 1 },
      },
    });

    const value = await prisma.post.create({
      data: {
        title: datos.title,
        description: datos.description,
        img: datos.img,
        authorid: parseInt(req.params.id),
      },
    });

    await prisma.likes.create({
      data: {
        count: 0,
        likeid: value.id,
      },
    });
    res.send(value);
  } catch (error) {
    console.log(error);
  }
}

export async function GetAll(req: Request, res: Response) {
  try {
    const datos = await prisma.post.findMany();
    res.json(datos);
  } catch (error) {
    console.log(error);
  }
}

async function FindId(idPost: number) {
  try {
    const datos = await prisma.likes.findMany({
      where: {
        likeid: idPost,
      },
    });
    return datos[0];
  } catch (error) {
    throw error;
  }
}

export async function PostLike(req: Request, res: Response) {
  try {
    const result = await FindId(parseInt(req.params.id));
    const { id } = result;
    await prisma.likes.update({
      where: {
        id: id,
      },
      data: {
        count: { increment: 1 },
      },
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
  }
}

export async function GetAllLike(req: Request, res: Response) {
  try {
    const datos = await prisma.likes.findMany();
    res.json(datos);
  } catch (error) {
    console.log(error);
  }
}

export async function GetPost(req: Request, res: Response) {
  try {
    const datos = await prisma.post.findUnique({
      where:{
        id:parseInt(req.params.id)
      },
      include:{
        like:true,
      }
    });
    res.json(datos);
  } catch (error) {
    console.log(error);
  }
}

