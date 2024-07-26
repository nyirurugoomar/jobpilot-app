import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/libs/mongodb';
import { getJobById, updateJob, deleteJob } from '../../../../controllers/jobController';

export async function GET(req: NextRequest) {
  await connectDB();
  const id = req.nextUrl.searchParams.get('id'); 

  if (!id) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const job = await getJobById(id);
  if (job) {
    return NextResponse.json(job, { status: 200 });
  } else {
    return NextResponse.json({ error: 'Job not found' }, { status: 404 });
  }
}

export async function PUT(req: NextRequest) {
  await connectDB();
  const id = req.nextUrl.searchParams.get('id'); 

  if (!id) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const job = await req.json(); 
  const result = await updateJob(id, job);
  return NextResponse.json(result, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  await connectDB();
  const id = req.nextUrl.searchParams.get('id'); 

  if (!id) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  await deleteJob(id);
  return NextResponse.json({ message: 'Job deleted successfully' }, { status: 200 });
}
