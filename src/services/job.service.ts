import { NextFunction, Request, Response } from "express";
import { Job } from "../models";

export class JobService {
  public async create(req: Request): Promise<Job | null> {
    const { title, description, location, salary, job_type, company_name } =
      req.body;
    const user_id = (req as Record<string, any>).user.id;

    const jobEntity = Job.create({
      user_id,
      title,
      description,
      location,
      salary,
      job_type,
      company_name,
    });
    const job = await Job.save(jobEntity);
    return job;
  }
}
