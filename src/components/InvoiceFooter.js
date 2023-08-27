import React from 'react';
import PropTypes from 'prop-types';

const TAX_RATE = 0.10;  // Consider moving this to a constants/config file if used in other places.

const InvoiceFooter = ({ items }) => {

    const subTotal = items.reduce((sum, item) => sum + (item.quantity * item.rate), 0);
    const tax = TAX_RATE * subTotal;
    const total = subTotal + tax;

    return (
        <footer className="mt-10">
            <div className="flex justify-end">
                <div className="w-1/3">
                    <div className="flex justify-between">
                        <p>Sub Total:</p>
                        <p>${subTotal.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Sale Tax ({(TAX_RATE * 100).toFixed(0)}%):</p>
                        <p>${tax.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between font-bold">
                        <p>TOTAL:</p>
                        <p>${total.toFixed(2)}</p>
                    </div>
                </div>
            </div>
            <div className="mt-6">
                <h2 className="text-gray-600 font-semibold">Notes:</h2>
                <p>It was great doing business with you.</p>
            </div>
            <div className="mt-6">
                <h2 className="text-gray-600 font-semibold">Terms & Conditions:</h2>
                <p>Please make the payment by the due date.</p>
            </div>
        </footer>
    );
};

InvoiceFooter.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            quantity: PropTypes.number.isRequired,
            rate: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default InvoiceFooter;
