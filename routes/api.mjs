import express from 'express';
import { createChar, delChar, editChar, generateChar, listChar } from '../controllers/api.mjs';
export const apiRouter = express.Router()

// use res.render to load up an ejs view file

//listar todos os chars
apiRouter.get('/', listChar);

// criar new char
apiRouter.post('/create-char', createChar);

// editar char
apiRouter.post('/edit-char/:id', editChar);

//generate new char
apiRouter.get('/generate-char', generateChar);

//delete new char
apiRouter.delete('/del-char/:id', delChar);