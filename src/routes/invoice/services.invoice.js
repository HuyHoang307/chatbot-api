import ClothesModels from "../clothes/models.clothes";
import moment from "moment"
import InvoicesModels from "./models.invoice";

const invoiceService = {
    orderProducts: async ({address, color, name, phone_number, product_name, product_size, quantity}) => {
        let product = await ClothesModels.searchOrder(product_name, product_size, color)
        if(!product || product.total < quantity) throw new Error("Không còn đủ số lượng")
        let invoiceRecord = await InvoicesModels.createInvoice({name: name, address: address, phone_number: phone_number, quantity: quantity, total_money: product.price * quantity, created_at: moment()})
        await ClothesModels.updateItem(product.id, {total: product.total-quantity});
        return invoiceRecord;
    }
}

export default invoiceService;