import { Request, Response } from "express";
import { PrismaClient } from "prisma/prisma-client";
import { User } from "../types/type-user";
const prisma = new PrismaClient();
export async function PostRegister(req: Request, res: Response) {
  try {
    const datos: User = req.body;
    const value = await prisma.user.create({
      data: {
        username: datos.username,
        password: datos.password,
        userimg: datos.userimg,
        numberpost: 0,
      },
    });
    res.json(value);
  } catch (error) {
    console.log(error);
  }
}

export async function GetAllUser(req: Request, res: Response) {
  try {
    const value = await prisma.user.findMany();
    res.send(value);
  } catch (error) {
    console.log(error);
  }
}
export async function UserLogin(req: Request, res: Response) {
  try {
    const data = req.body;
    const value = await prisma.user.findFirst({
      where: { username: data.username, password: parseInt(data.password) },
    });
    if (value) {
      res.json({ exist: true,id:value.id });
    } else {
      res.json({ exist: false });
    }
  } catch (error) {
    console.log(error);
  }
}
