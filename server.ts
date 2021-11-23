//package imports

import express, { Application, Request, Response } from "express";
import { connect } from "mongoose";

//user imports

import { ENV } from "./src/config";

//creating Application server with express

const app: Application = express();

// defining port e.g; 3001

const port = ENV.PORT;
const mongo_url: string = ENV.MONGO_DB_URL || "mongodb://localhost:27017/test";

// Body parsing Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes

app.get("/", async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({
    message: "Hello World!",
  });
});

//conecting mongo db

connect(mongo_url)
  .then(() => {
    console.log(`Your mongo database is connect on ${mongo_url}`);
    //listing a server on Port (3001)

    try {
      app.listen(port, (): void => {
        console.log(`Connected successfully on port ${port}`);
      });
    } catch (error: any) {
      console.error(`Error occured: ${error.message}`);
    }
  })
  .catch((err: any) => {
    console.log(`Database is not connected. Error found ${err.message}`);
  });
