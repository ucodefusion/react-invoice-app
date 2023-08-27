import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrgDetails, setClientDetails } from '../redux/slices/invoiceSlice'; // Adjust path accordingly

const CompanyDetails = () => {
    const dispatch = useDispatch();

    // Use the useSelector hook to get values from the Redux store
    const orgDetails = useSelector(state => state.invoiceData.orgDetails);
    const clientDetails = useSelector(state => state.invoiceData.clientDetails);

    const handleOrgChange = (e, key) => {
        dispatch(setOrgDetails({ ...orgDetails, [key]: e.target.value }));
    };

    const handleClientChange = (e, key) => {
        dispatch(setClientDetails({ ...clientDetails, [key]: e.target.value }));
    };

    return (
        <section className="mt-10">
            <div className="grid grid-cols-2 gap-4">
                <div className='flex flex-col'>
                    <h2 className="text-gray-600 font-semibold">Your Details:</h2>
                    <input value={orgDetails.company} onChange={e => handleOrgChange(e, 'company')} />
                    <input value={orgDetails.name} onChange={e => handleOrgChange(e, 'name')} />
                    <input value={orgDetails.address} onChange={e => handleOrgChange(e, 'address')} />
                    <input value={orgDetails.cityStateZip} onChange={e => handleOrgChange(e, 'cityStateZip')} />
                    <input value={orgDetails.country} onChange={e => handleOrgChange(e, 'country')} />
                </div>

                <div className='flex flex-col text-right'>
                    <h2 className="text-gray-600 font-semibold">Client Details:</h2>
                    <input className='text-right' value={clientDetails.name} onChange={e => handleClientChange(e, 'name')} />
                    <input className='text-right' value={clientDetails.address} onChange={e => handleClientChange(e, 'address')} />
                    <input className='text-right' value={clientDetails.cityStateZip} onChange={e => handleClientChange(e, 'cityStateZip')} />
                    <input className='text-right' value={clientDetails.country} onChange={e => handleClientChange(e, 'country')} />
                </div>
            </div>
        </section>
    );
};

export default CompanyDetails;
