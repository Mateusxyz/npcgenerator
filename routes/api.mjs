import express from 'express';
import { createChar, delChar, editChar, generateChar, listChar } from '../controllers/api.mjs';
export const apiRouter = express.Router()

// use res.render to load up an ejs view file

//listar todos os chars
apiRouter.get('/', listChar);

// criar new char
apiRouter.post('/create-char', createChar);

// editar char
apiRouter.post('/create-char/:id', editChar);

//generate new char
apiRouter.post('/generate-char', generateChar);

//delete new char
apiRouter.delete('/create-char/:id', delChar);