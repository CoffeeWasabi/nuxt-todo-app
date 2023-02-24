import { PrismaClient } from "@prisma/client"
import { userResponse } from "~/types"

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const prisma = new PrismaClient();

    const user = await prisma.user.findUnique({
        where: {
            accountId: body.accountId,
        },
    });

    if(!user){
        return <userResponse> {
            user: null,
            errorMessage:"No matching ID."
        }
    } else if(user?.password === body.password){
        return <userResponse> {
            user: user,
            errorMessage: null
        }
    } else {
        return <userResponse> {
            user: null,
            errorMessage: "No matching password."
        }
    }
});