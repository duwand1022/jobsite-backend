import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Job } from "../entity/Job.entity";

export const getJobList = async (req: Request, res: Response) => {
    const jobRepository = AppDataSource.getRepository(Job);
    const jobs = await jobRepository.find();
    
    return res
      .status(200)
      .json({ data : jobs });
}

export const createJob = async (req: Request, res: Response) => {
    const jobRepository = AppDataSource.getRepository(Job);
    const job = new Job();
    job.title = "testing";
    job.description = "test description";
    job.director = "duwand";
    job.rating = 5;
    job.image = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80";
    jobRepository.save(job);
    return res
      .status(200)
      .json({ message: "Job created successfully", job });
}