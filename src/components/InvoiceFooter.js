import React from 'react';

const InvoiceFooter = ({ items }) => {
    
    // Calculate Subtotal
    
    const subTotal = items.reduce((sum, item) => sum + (item.quantity * item.rate), 0);

    // Assuming tax rate is 10%
    const tax = 0.10 * subTotal;

    // Calculate total
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
                        <p>Sale Tax (10%):</p>
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

export default InvoiceFooter;
