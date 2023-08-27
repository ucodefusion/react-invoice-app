import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InvoiceHeader from './components/InvoiceHeader';
import CompanyDetails from './components/CompanyDetails';
import BillingDetails from './components/BillingDetails/BillingDetails';
import InvoiceFooter from './components/InvoiceFooter';
import initialInvoiceData from './invoiceData.json';
import { setData, updateData } from './redux/slices/invoiceSlice';

const Invoice = () => {
    const dispatch = useDispatch();
    const invoiceData = useSelector(state => state.invoiceData); 
 
    // Initialize the invoiceData if it's empty
    if (!invoiceData || Object.keys(invoiceData).length === 0)
    {
        dispatch(setData(initialInvoiceData));
    }

    const updateInvoiceData = (updatedData) => {
        dispatch(updateData(updatedData));
    };

    return (
        <main className="container mx-auto p-8">
            <div className="bg-gray-200 min-h-screen p-12">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
                    <InvoiceHeader invoiceData={invoiceData} />
                    <CompanyDetails
                        orgDetails={invoiceData.orgDetails}
                        clientDetails={invoiceData.clientDetails}
                        updateInvoiceData={updateInvoiceData}
                    />
                    <BillingDetails invoiceItems={invoiceData} />
                    <InvoiceFooter items={invoiceData.invoice.items} />
                </div>
            </div>
        </main>
    );
};

export default Invoice;
