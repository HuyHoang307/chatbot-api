import express from 'express'
import { clothesService } from './services.clothes';

let route = express.Router();

export default app => {
    app.use('/', route);

    route.get('/search', async (req, res, next) => {
        try {
            const data = await clothesService.searchClothes(req.query);
            return res.json(data);
        } catch (error) {
            next(error)
        }
    })

    route.get('/getProductByPrice', async (req, res, next) => {
        try {
            const data = await clothesService.searchPriceRange(req.query);
            return res.json(data);
        } catch (error) {
            next(error)
        }
    })
}