import { PrismaClient } from "@prisma/client"
import { RequestTaskData, TodoData } from "~~/../types";

/**
 * DB操作
 * 
 */
export default defineEventHandler(async (event) => {
    const body:RequestTaskData = await readBody(event);
    const prisma = new PrismaClient();

    const actionType = body.actionType;
    if(actionType === "select"){
        const taskList = await prisma.task.findMany({
            where: {
                insUser: body.accountId,
            },
        }); 
        return taskList;
    } else if(actionType === "insert") {
        const newTask = await prisma.task.create({
            data: {
                taskName: body.taskName!,
                checked: false,
                insUser: body.accountId,
                insDate: new Date(),
                updDate: new Date(),
                deleteFlg: false,
            },
        });
        return newTask;
    } else if(actionType === "update") {
        const updateTask = await prisma.task.update({
            where: {
                id:body.id
            },
            data: {
                taskName: body.taskName!,
                checked: body.checked,
                updDate: new Date(),
            },
        });
        return updateTask;
    } else if(actionType === "delete") {
        const deleteTask = await prisma.task.delete({
            where: {
                id: body.id
            },
        });
        return deleteTask;
    }
});