// import { NextResponse } from "next/server";
// import {connectDB} from "./app/database/mongodb";

// export async function POST(req){
//     const {fullname ,email,message} = await req.json();
//     try{
//         await connectDB();
//         await Contact.create({fullname,email,message})
//         return NextResponse.json({
//             msg:["Message send Successfully"] , success : true 
//         })
//     }catch(error){
//         if(error instanceof mongoose.)
//     }

//     return NextResponse.json({msg:["hello mogngo"]})

// }
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// async function push(){
//     const contact = await prisma.post.create({
//         data : {
//             first
//         }
//     })

// }