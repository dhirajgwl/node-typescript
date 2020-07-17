import {Request,Response} from 'express';
import path from 'path';

const santaController = async (req:Request, res:Response) => {   
    res.sendFile(path.join(__dirname, '../../dist/index.html'));    
}

export default santaController;