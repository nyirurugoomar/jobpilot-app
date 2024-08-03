import Job from '../models/jobModel';
import { JobDocument } from '../models/jobModel';

export const getJobs = async () => {
  return await Job.find().exec();
};

export const getJobById = async (id: string) => {
  return await Job.findById(id).exec();
};

export const createJob = async (job: Partial<JobDocument>) => {
  const newJob = new Job(job);
  return await newJob.save();
};

export const updateJob = async (id: string, job: Partial<JobDocument>) => {
  return await Job.findByIdAndUpdate(id, job, { new: true }).exec();
};

export const deleteJob = async (id: string) => {
  return await Job.findByIdAndDelete(id).exec();
};
