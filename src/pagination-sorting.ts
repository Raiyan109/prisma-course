import { PrismaClient } from "../generated/prisma";

const prisma =new PrismaClient()

const paginationSorting = async () => {
    // const offsetData = await prisma.post.findMany({
    //     skip: 5,
    //     take: 2
    // })

    // cursor based
    const cursorbasedPagination = await prisma.post.findMany({
        skip: 5,
        take: 2,
        cursor: {
            id: 5
        }
    })

    // Sorting
    const sortedData = await prisma.post.findMany({
        orderBy:{
            title: 'asc'
        }
    })
    console.log('cursor pagination data', sortedData);
    
}

paginationSorting()