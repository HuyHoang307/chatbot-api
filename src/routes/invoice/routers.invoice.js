import express from 'express';
import invoiceService from './services.invoice';

let route = express.Router();

export default app => {
    app.use('/order', route);
    route.post('/', async (req, res, next) => {
        try {
            const data = await invoiceService.orderProducts(req.body);
            console.log(req.body);
            return res.json({products: data});
        } catch (error) {
            return res.status(400).send(error.message);
        }
    })
}