import mongoose, { Document, Schema } from 'mongoose';

interface IJob extends Document {
  jobTitle: string;
  jobDescription: string;
  jobPeriod: string;
  jobSalary: string;
  companyLogo: string;
  nameCompany: string;
  companyLocation: string;
  postedDate: Date;
}

const JobSchema: Schema = new Schema({
  jobTitle: { type: String, required: true },
  jobDescription: { type: String, required: true },
  jobPeriod: { type: String, required: true },
  jobSalary: { type: String, required: true },
  companyLogo: { type: String, required: true },
  nameCompany: { type: String, required: true },
  companyLocation: { type: String, required: true },
  postedDate: { type: Date, default: Date.now },
});

const Job = mongoose.model<IJob>('Job', JobSchema);
export default Job;
