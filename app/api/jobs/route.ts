import express from 'express';
import dotenv from 'dotenv';
import connectDB from '@/libs/mongodb'; 
import Job from '@/models/job';
import { NextResponse } from 'next/server';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express(); 

// Middleware to parse JSON bodies
app.use(express.json());
 
// POST method to create a job
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

// GET method to fetch jobs
export async function GET() {
  try {
    const jobs = await Job.find({});
    return new NextResponse(JSON.stringify(jobs), { status: 200 });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    return new NextResponse(JSON.stringify({ message: "Error fetching jobs" }), { status: 500 });
  }
}

// DELETE method to delete a job by ID
export async function DELETE(request: Request) {
  try {
    console.log('DELETE request received:', request.url);
    
    const _id = new URL(request.url).searchParams.get('id');
    console.log('Job ID to delete:', _id);

    if (!_id) {
      return new NextResponse(JSON.stringify({ message: "Job ID is required" }), { status: 400 });
    }

    const job = await Job.findByIdAndDelete(_id);

    if (!job) {
      return new NextResponse(JSON.stringify({ message: "Job not found" }), { status: 404 });
    }

    return new NextResponse(JSON.stringify({ message: "Job deleted" }), { status: 200 });
  } catch (error) {
    console.error('Error deleting job:', error);
    return new NextResponse(JSON.stringify({ message: "Error deleting job" }), { status: 500 });
  }
}
