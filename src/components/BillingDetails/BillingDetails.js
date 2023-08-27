import React, { useEffect } from 'react';
import InvoiceItem from '../InvoiceItems/InvoiceItem';
import { calculateInvoiceTotals } from '../helpers';

const BillingDetails = ({ data, setData }) => {
  const [allItems, setAllItems] = React.useState(data.invoice.items);

  const handleDescriptionChange = (index, newDescription) => {
    const updatedItems = [...allItems];
    updatedItems[index].description = newDescription;
    setAllItems(updatedItems);
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...allItems];
    updatedItems[index].quantity = newQuantity;
    updatedItems[index].amount = newQuantity * updatedItems[index].rate;

 
    setAllItems(updatedItems); 
  };
  useEffect(() => {
    calculateInvoiceTotals(data, allItems, setData);
  }, [allItems]);

  const handleDelete = (index) => {
    const updatedItems = allItems.filter((_, idx) => idx !== index);
    setAllItems(updatedItems);
 
  };

  const addNewItem = () => {
    const newItem = {
      description: 'New Item',
      quantity: 1,
      rate: 10,
      amount: 10
    };
    setAllItems(prevItems => [...prevItems, newItem]);
 
  };

  const handleSave = () => {
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




    console.log(data);
  };

  return (
    <section className="mt-10">
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-gray-300">
            <th className="w-1/2 p-2">Item Description</th>
            <th className="w-1/8 p-2">Qty</th>
            <th className="w-1/8 p-2">Rate</th>
            <th className="w-1/8 p-2">Amount</th>
            <th className="w-1/8 p-2"></th>
          </tr>
        </thead>
        <tbody>
          {allItems.map((item, index) => (
            <InvoiceItem
              key={index}
              description={item.description}
              quantity={item.quantity}
              rate={item.rate}
              amount={item.amount}
              onDescriptionChange={(newDescription) => handleDescriptionChange(index, newDescription)}
              onQuantityChange={(newQuantity) => handleQuantityChange(index, newQuantity)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </tbody>
      </table>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={addNewItem}>+</button>
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded ml-4" onClick={handleSave}>Save Changes</button>
    </section>
  );
};

export default BillingDetails;
