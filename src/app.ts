import { AppDataSource } from "./data-source";
import express from 'express';
import "reflect-metadata";
import { getJobList, createJob } from "./job";

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript Node Express!');
});

app.get('/jobs', (req, res) => {
  getJobList(req, res)
})

app.post('/jobs', (req, res) => {
  createJob(req, res)
})

AppDataSource.initialize().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})

