import prisma from "@/app/utils/prismaClient";
import { NextResponse } from "next/server";

export async function GET(request) {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}
