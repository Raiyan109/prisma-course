import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  // Find all
  // const getAllPosts = await prisma.post.findMany()

  // const findFirst = await prisma.post.findFirst({
  //   where: {
  //     id: 1,
  //   },
  // });
  const findUniqueOrThrow = await prisma.post.findUniqueOrThrow({
    where:{
      id: 5
    },
    select:{
      authorName: true
    }
  })
  console.log({ findUniqueOrThrow });
};
main();
