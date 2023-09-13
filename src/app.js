import express from 'express';
import ProductRoutes from './libs/routes/product.route.js';

const app = express();
app.use(express.json());
app.use('/products', ProductRoutes);

export default app;
