import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import { initMongoDb, storeConfig } from './db/conexion.js';
import config from './config.js';
import MainRouter from "./routes/index.js";
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
const mainRouter = new MainRouter();

// Inicializa MongoDB
initMongoDb();

// Middleware
app.use(cookieParser()); // Asegúrate de que cookie-parser está antes de cualquier otro middleware que lo necesite
app.use(session({
    ...storeConfig,
    secret: config.SECRET_KEY_JWT,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: config.NODE_ENV === 'production' }
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", mainRouter.getRouter());
app.use(errorHandler);

// Configurar el puerto y el modo
const PORT = config.PORT;
const MODE = config.NODE_ENV;

// Iniciar el servidor
const httpServer = app.listen(PORT, () => {
    console.log(`Escuchando puerto ${PORT}`);
    console.log(`mode: ${MODE}`);
});
