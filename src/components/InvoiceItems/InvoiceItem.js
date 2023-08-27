import React from 'react';

const InvoiceItem = ({ description, quantity, rate, onDescriptionChange, onQuantityChange, onDelete }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          value={description}
          onChange={e => onDescriptionChange(e.target.value)}
          className="border p-2 w-full"
        />
      </td>
      <td>
        <input
          type="number"
          value={quantity}
          onChange={e => onQuantityChange(e.target.value)}
          className="border p-2 w-full"
        />
      </td>
      <td>{rate}</td>
      <td>{quantity * rate}</td>
      <td>
        <button onClick={onDelete} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
      </td>
    </tr>
  );
};

export default InvoiceItem;
