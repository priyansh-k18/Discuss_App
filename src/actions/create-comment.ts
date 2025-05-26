'use server';

import { auth } from "@/auth";
import { prisma } from "@/lib";
import {z} from "zod"

const createCommentSchema = z.object({
    content:z.string().min(1)
})

type CreateCommentState = {
    errors:{
        content?:string[];
        formError?:string[];
    }
}

export const createComment = async (formData:FormData):Promise<CreateCommentState> => {
    const result = createCommentSchema.safeParse({
        content:formData.get('content'),
    })
    if(!result.success){
        return{
            errors:result.error.flatten().fieldErrors
        }
    }

    const session = await auth();
    if(!session || !session.user || !session.user.id){
         return {
            errors:{
               formError:["You have to login first to reply on comments"]
            }
         }
    }
    try{
        await prisma.comment.create({
            data:{
                content:result.data.content,
                postId:"1",
                userId:session.user.id,
                parentId:"2"
            }
        })

    }catch(error:unknown){
         if(error instanceof Error){
            return{
                errors:{
                    formError:[error.message]
                }
            }
         }else{
            return{
                errors:{
                    formError:['Failed to reply comment']
                }
            }
         }
    }
}