import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

    const user001 = await prisma.user.create({
        data: {
            accountId: "id001",
            password: "admin001",
            firstName: "Yamada",
            lastName: "One",
        }
    });

    const user002 = await prisma.user.create({
        data: {
            accountId: "id002",
            password: "admin002",
            firstName: "David",
            lastName: "Two",
        }
    });

    const user003 = await prisma.user.create({
        data: {
            accountId: "id003",
            password: "admin003",
            firstName: "Ko",
            lastName: "Three",
        }
    });

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect
        process.exit(1)
    })