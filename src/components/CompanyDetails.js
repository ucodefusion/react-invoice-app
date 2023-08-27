import React, { useState } from 'react';

const CompanyDetails = ({ orgDetails, clientDetails, updateInvoiceData }) => {
    const [editedOrg, setEditedOrg] = useState(orgDetails);
    const [editedClient, setEditedClient] = useState(clientDetails);

    const handleOrgChange = (e, key) => {
        setEditedOrg({ ...editedOrg, [key]: e.target.value });
    };

    const handleClientChange = (e, key) => {
        setEditedClient({ ...editedClient, [key]: e.target.value });
    };

    const saveChanges = () => {
        updateInvoiceData({ orgDetails: editedOrg, clientDetails: editedClient });
    };

    return (
        <section className="mt-10">
            <div className="grid grid-cols-2 gap-4">
                <div className='flex flex-col'>
                    <h2 className="text-gray-600 font-semibold">Your Details:</h2>
                    <input value={editedOrg.company} onChange={e => handleOrgChange(e, 'company')} />
                    <input value={editedOrg.name} onChange={e => handleOrgChange(e, 'name')} />
                    <input value={editedOrg.address} onChange={e => handleOrgChange(e, 'address')} />
                    <input value={editedOrg.cityStateZip} onChange={e => handleOrgChange(e, 'cityStateZip')} />
                    <input value={editedOrg.country} onChange={e => handleOrgChange(e, 'country')} />
                </div>
              
                <div className='flex flex-col   text-right'>
                        <h2 className="text-gray-600 font-semibold">Client Details:</h2>
                    <input className='  text-right' value={editedClient.name} onChange={e => handleClientChange(e, 'name')} />
                    <input className='  text-right' value={editedClient.address} onChange={e => handleClientChange(e, 'address')} />
                    <input className='  text-right' value={editedClient.cityStateZip} onChange={e => handleClientChange(e, 'cityStateZip')} />
                    <input className='  text-right' value={editedClient.country} onChange={e => handleClientChange(e, 'country')} />
                    </div>
                 
            </div>
            <button onClick={saveChanges}>Save Changes</button>
        </section>
    );
};

export default CompanyDetails;
