import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 2,
  //     },
  //     data: {
  //       title: "Eid ul adha 2",
  //     },
  //   });

  // const updateMany = await prisma.post.updateMany({
  //     where:{
  //         published: false
  //     },
  //     data: {
  //         published: true
  //     }
  // })
  //   console.log({ updateMany });

  const upsertData = await prisma.post.upsert({
    where: {
      id: 5,
    },
    update: {
      title: "updated title",
      authorName: 'Raian'
    },
    create: {
      id: 5,
      title: "created title 5",
    },
  });

  console.log({ upsertData });
};
updates();
