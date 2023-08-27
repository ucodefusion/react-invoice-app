#!/bin/bash

# Create a new React App
npx create-react-app invoice-builder

# Navigate to the app directory
cd invoice-builder

# Create necessary directories
mkdir -p src/components/BillingDetails src/components/InvoiceItems

# Generate main App files and components
echo "import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      {/* Your App components will go here */}
    </div>
  );
}

export default App;" > src/App.js

# Generate BillingDetails component
echo "import React from 'react';

const BillingDetails = () => {
  return (
    <div>
      {/* Billing Details content will go here */}
    </div>
  );
};

export default BillingDetails;" > src/components/BillingDetails/BillingDetails.js

# Generate InvoiceItems component
echo "import React from 'react';

const InvoiceItems = () => {
  return (
    <div>
      {/* Invoice Items content will go here */}
    </div>
  );
};

export default InvoiceItems;" > src/components/InvoiceItems/InvoiceItems.js

# Add styles for the components (You can fill these later)
touch src/components/BillingDetails/BillingDetails.css
touch src/components/InvoiceItems/InvoiceItems.css

echo "Files and directories have been created!"
