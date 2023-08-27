import { useDispatch } from 'react-redux';
import { updateInvoiceTotals } from '../redux/slices/invoiceSlice';

export const calculateInvoiceTotals = (data, allItems) => {
    const dispatch = useDispatch();
    
    const updatedInvoiceData = { ...data };
    updatedInvoiceData.invoice.items = allItems;

    const subTotal = allItems.reduce((sum, item) => sum + item.amount, 0);
    const tax = 0.10 * subTotal;
    const total = subTotal + tax;

    updatedInvoiceData.invoice.subTotal = subTotal;
    updatedInvoiceData.invoice.tax = tax;
    updatedInvoiceData.invoice.total = total;

    // Dispatch the action to update the Redux store
    dispatch(updateInvoiceTotals(updatedInvoiceData));
}
