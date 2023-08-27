import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InvoiceItem from '../InvoiceItems/InvoiceItem';
import { setItems, addItem, removeItem, setTotals } from '../../redux/slices/invoiceSlice';

const BillingDetails = () => {
  const dispatch = useDispatch();
  const invoiceItems = useSelector(state => state.invoiceData.invoice.items);
  console.log(">>>>>", invoiceItems);
  const handleDescriptionChange = (index, newDescription) => {
    const updatedItems = [...invoiceItems];
    updatedItems[index].description = newDescription;
    dispatch(setItems(updatedItems));
  };

  const handleQuantityChange = (index, newQuantity) => {
    const updatedItems = [...invoiceItems];
    updatedItems[index].quantity = newQuantity;
    updatedItems[index].amount = newQuantity * updatedItems[index].rate;
    dispatch(setItems(updatedItems));
  };

  const handleDelete = (index) => {
    dispatch(removeItem(index));
  };

  const addNewItem = () => {
    const newItem = {
      description: 'New Item',
      quantity: 1,
      rate: 10,
      amount: 10
    };
    dispatch(addItem(newItem));
  };

  const handleSave = () => {
    const subTotal = invoiceItems.reduce((sum, item) => sum + item.amount, 0);
    const tax = 0.10 * subTotal;
    const total = subTotal + tax;
    dispatch(setTotals({ subTotal, tax, total }));
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
          {invoiceItems.map((item, index) => (
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
