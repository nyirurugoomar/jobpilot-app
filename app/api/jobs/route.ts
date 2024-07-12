// app/api/jobs/route.ts
import { NextRequest, NextResponse } from 'next/server';
// import connectDB from '../../../utils/mongodb';
import connectDB from '@/libs/mongodb';
import { getJobs, createJob } from '../../../controllers/jobController';

export async function GET(req: NextRequest) {
  await connectDB();
  const jobs = await getJobs();
  return NextResponse.json(jobs, { status: 200 });
}

export async function POST(req: NextRequest) {
  await connectDB();
  const job = await req.json(); // Parse JSON body
  const result = await createJob(job);
  return NextResponse.json(result, { status: 201 });
}
