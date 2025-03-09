import express from 'express';
import router from './routers/exampleRoute.js';

const app = express();

//parse JSON payloads
app.use(express.json());

app.use("/api/v1/example", router);

app.listen(8001, () => console.log('Server started on 8001'));