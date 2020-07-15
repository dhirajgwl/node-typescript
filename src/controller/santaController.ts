import express from 'express';

const santaController = (request:express.Request, response:express.Response) => {
    response.sendFile(__dirname +'/views/index.html');
}

export default santaController;