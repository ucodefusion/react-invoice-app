
export const calculateInvoiceTotals = (data, allItems, setData) => {
    const updatedInvoiceData = { ...data };
    updatedInvoiceData.invoice.items = allItems;

    const subTotal = allItems.reduce((sum, item) => sum + item.amount, 0);
    const tax = 0.10 * subTotal;
    const total = subTotal + tax;

    updatedInvoiceData.invoice.subTotal = subTotal;
    updatedInvoiceData.invoice.tax = tax;
    updatedInvoiceData.invoice.total = total;

    // Update the main state (invoice data) in the parent component
    setData(updatedInvoiceData);

}
