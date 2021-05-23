import { db } from "../../config/configDB"

const InvoicesModels = {
    createInvoice: async (invoice) => { 
        console.log(invoice);
        return await db('invoices').insert(invoice).returning(['*']).then(e => e[0]);
    }
}

export default InvoicesModels