import clothes from './clothes/routes.clothes';
import invoices from './invoice/routers.invoice';

export default app => {
    clothes(app)
    invoices(app)  
}