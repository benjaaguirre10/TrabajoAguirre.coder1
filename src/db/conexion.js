import mongoose from "mongoose";
import config from "../config.js";
import MongoStore from "connect-mongo";

const DB = config.MONGO_URL
export const initMongoDb = async () => {
    try {
        await mongoose.connect(DB);
        console.log("Conexion establecida");
    } catch (error) {
        console.log(error);
    }
};

export const storeConfig = {
    store: MongoStore.create({
      mongoUrl: DB,
      crypto: { secret: process.env.SECRET_KEY || "" },
      ttl: 180,
    }),
    secret: process.env.SECRET_KEY || "",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 180000 },
  };
