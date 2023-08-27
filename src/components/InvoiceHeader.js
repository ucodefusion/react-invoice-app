import React from 'react'; 
const InvoiceHeader = (props) => {
    const { invoiceData } = props;

    return (   <header className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold">Free Invoice Builder - From Billable</h1>
                            <p className="text-gray-600">Generate your invoice online for free and download PDF!</p>
                        </div>
                        <div className="text-right">
            <p><strong>Invoice Number:</strong> #{invoiceData.invoice.number}</p>
            <p><strong>Date:</strong> {invoiceData.invoice.date}</p>
            <p><strong>Due Date:</strong> {invoiceData.invoice.dueDate}</p>
                        </div>
                    </header>
      
    );
};

export default InvoiceHeader;