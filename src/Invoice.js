import React, { useState } from 'react';
import InvoiceHeader from './components/InvoiceHeader';   
import CompanyDetails from './components/CompanyDetails';  
import BillingDetails from './components/BillingDetails/BillingDetails';
import InvoiceFooter from './components/InvoiceFooter';
import initialInvoiceData from './invoiceData.json';

const Invoice = () => {
    const [data, setData] = useState(initialInvoiceData); 

    const updateInvoiceData = (updatedData) => {
        setData(prevData => ({
            ...prevData,
            ...updatedData // Merging the updated orgDetails and clientDetails
        }));
    };

    return (
        <main className="container mx-auto p-8">
            <div className="bg-gray-200 min-h-screen p-12">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                    <InvoiceHeader invoiceData={data} />
                    <CompanyDetails 
                        orgDetails={data.orgDetails} 
                        clientDetails={data.clientDetails}
                        updateInvoiceData={updateInvoiceData}
                    />
                    <BillingDetails data={data} setData={setData} />
                    <InvoiceFooter items={data.invoice.items} />
                </div>
            </div>
        </main>
    );
};

export default Invoice;
