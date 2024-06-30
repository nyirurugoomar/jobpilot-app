import express from 'express';
import dotenv from 'dotenv';
import connectDB from '@/libs/mongodb'; // Ensure the path is correct to your database file
import Job from '@/models/job';
import { NextResponse } from 'next/server';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

export async function POST(request: Request) {
  try {
    const { jobTitle, jobDescription, jobPeriod, jobSalary, companyLogo, nameCompany, companyLocation } = await request.json();
    
    await Job.create({ jobTitle, jobDescription, jobPeriod, jobSalary, companyLogo, nameCompany, companyLocation });
    return new NextResponse(JSON.stringify({ message: "Job created" }), { status: 201 });
  } catch (error) {
    console.error('Error creating job:', error);
    return new NextResponse(JSON.stringify({ message: "Error creating job" }), { status: 500 });
  }
}
