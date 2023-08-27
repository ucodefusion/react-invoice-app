import React from 'react';
import PropTypes from 'prop-types';

const InvoiceHeader = ({ invoiceData }) => {
    const { number, date, dueDate } = invoiceData;
    console.log(":::-->", invoiceData ); 
    return (
        <header className="flex justify-between items-center">
            <div>
                <h1 className="text-2xl font-bold">Free Invoice Builder - From Billable</h1>
                <p className="text-gray-600">Generate your invoice online for free and download PDF!</p>
            </div>
            <div className="text-right">
                <p><strong>Invoice Number:</strong> #{number}</p>
                <p><strong>Date:</strong> {date}</p>
                <p><strong>Due Date:</strong> {dueDate}</p>
            </div>
        </header>
    );
};

InvoiceHeader.propTypes = {
    invoiceData: PropTypes.shape({ 
    }).isRequired,
};

export default InvoiceHeader;
