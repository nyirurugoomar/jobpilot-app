import connectDB from "@/libs/mongodb";
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server';
// import bcryptjs from 'bcryptjs'
import bcrypt from 'bcrypt'

connectDB()


export async function POST(req:NextRequest){
    try {
     const reqBody = await req.json()
     const {username , email, password} = reqBody
     console.log(reqBody)
     //check email
     const user = await User.findOne({email})
     if(user){
        return NextResponse.json({error:"User already exist"},{status:400})
     }
     //check password
     const salt = await bcrypt.genSalt(10)
     const hashedPassword = await bcrypt.hash(password,salt)
     

     //create user

     const newUser = new User({
        username,
        email,
        password:hashedPassword
     })

     const savedUser = await newUser.save()
     console.log(savedUser)

     return NextResponse.json({
        message:"User is Created Sucessfully",
        sucess:true,
        savedUser
     })

     
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
}