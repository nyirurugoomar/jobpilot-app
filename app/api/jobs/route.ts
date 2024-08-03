import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/libs/mongodb';
import { getJobs, createJob } from '../../../controllers/jobController';
import { JobDocument } from '../../../models/jobModel';

function mapJsonToJobDocument(data: any): Partial<JobDocument> {
  return {
    jobTitle: data.jobTitle,
    jobDescription: data.jobDescription,
    jobPeriod: data.jobPeriod,
    jobSalary: data.jobSalary,
    companyLogo: data.companyLogo,
    nameCompany: data.nameCompany,
    companyLocation: data.companyLocation,
    jobExprience: data.jobExprience,
    jobEducation: data.jobEducation,
    jobLevel: data.jobLevel,
    jobExpire: new Date(data.jobExpire),
  };
}

export async function GET(req: NextRequest) {
  await connectDB();
  const jobs = await getJobs();
  return NextResponse.json(jobs, { status: 200 });
}

export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const data = await req.json(); // Parse JSON body
    const job = mapJsonToJobDocument(data); // Convert JSON to JobDocument type
    const result = await createJob(job);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error creating job:', error);
    return NextResponse.json({ message: 'Failed to create job' }, { status: 400 });
  }
}
