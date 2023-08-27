import { createSlice } from '@reduxjs/toolkit';
import initialInvoiceData from '../../invoiceData.json';
/* Initial state for the invoice
const initialState = { 
    orgDetails: {
        company: '***',
        name: '',
        address: '',
        cityStateZip: '',
        country: ''
    },
    clientDetails: {
        name: '##',
        address: '',
        cityStateZip: '',
        country: ''
    },
    invoice: {
        items: [],
        subTotal: 0,
        tax: 0,
        total: 0,
    }
};*/
const initialState = initialInvoiceData;
const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        // ... other reducers,
        setOrgDetails: (state, action) => {
            state.orgDetails = action.payload;
        },
        setClientDetails: (state, action) => {
            state.clientDetails = action.payload;
        },
        setData: (state, action) => {
            state.invoice.items = action.payload;
        },
        setItems: (state, action) => {
            state.invoice.items = action.payload;
        },
        addItem: (state, action) => {
            state.invoice.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.invoice.items.splice(action.payload, 1);
        },
        setTotals: (state, action) => {
            state.invoice.subTotal = action.payload.subTotal;
            state.invoice.tax = action.payload.tax;
            state.invoice.total = action.payload.total;
        },
        updateInvoiceTotals: (state, action) => {
            state.invoice = action.payload.invoice;
        },
        updateData: (state, action) => {
            // Sample logic to update some data in the state
            // Modify this reducer according to your needs
            state.someData = action.payload;
        }
    },
});

// Exporting actions and the reducer
export const {
    setItems,
    addItem,
    removeItem,
    setTotals,
    updateInvoiceTotals,
    updateData, setData, setOrgDetails, setClientDetails
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
