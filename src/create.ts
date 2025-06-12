import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const main = async () => {
  const createMany = await prisma.post.createMany({
    data: [
      {
        title: "Title 1",
        authorName: "Author 1",
      },
      {
        title: "Title 2",
        authorName: "Author 2",
      },
    ],
  });

  console.log(createMany);
};
main();
