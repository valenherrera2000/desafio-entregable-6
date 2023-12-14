import express from 'express';
import handlebars from 'express-handlebars';
import path from 'path';

import productApiRouter from './routers/api/product.router.js';
import cartApiRouter from './routers/api/cart.router.js';
import messageApiRouter from './routers/api/message.router.js';
import productViewRouter from './routers/views/product.router.js';
import cartViewRouter from './routers/views/cart.router.js'; 
import messageViewRouter from './routers/views/message.router.js'; 

import { __dirname } from './utils.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.engine('handlebars', handlebars.engine());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.send('Hello from backend 🖐️');
});


app.use('/', productViewRouter);
app.use('/cart', cartViewRouter);
app.use('/messages', messageViewRouter);
app.use('/api/products', productApiRouter);
app.use('/api/cart', cartApiRouter);
app.use('/api/message', messageApiRouter);


app.use((error, req, res, next) => {
  const message = `An error has occurred 😨: ${error.message}`;
  console.log(message);
  res.status(error.statusCode || 500).json({ status: 'error', message });
});


export default app;
