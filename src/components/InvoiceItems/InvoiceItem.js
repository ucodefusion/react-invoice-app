import React from 'react';
import PropTypes from 'prop-types';

const InvoiceItem = ({
  description,
  quantity,
  rate,
  onDescriptionChange,
  onQuantityChange,
  onDelete
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          value={description}
          onChange={e => onDescriptionChange(e.target.value)}
          className="border p-2 w-full"
          aria-label="Item Description"
        />
      </td>
      <td>
        <input
          type="number"
          value={quantity}
          onChange={e => onQuantityChange(Number(e.target.value))}
          className="border p-2 w-full"
          aria-label="Quantity"
        />
      </td>
      <td>{rate.toFixed(2)}</td>
      <td>{(quantity * rate).toFixed(2)}</td>
      <td>
        <button onClick={onDelete} className="bg-red-500 text-white px-2 py-1 rounded" aria-label="Delete Item">Delete</button>
      </td>
    </tr>
  );
};

InvoiceItem.propTypes = {
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default InvoiceItem;
