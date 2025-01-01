import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';
import './App.css';

function App() {
  const [customers, setCustomers] = useState([]);

  const addCustomer = (customer) => {
    setCustomers([...customers, { id: Date.now(), ...customer }]);
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <CustomerForm addCustomer={addCustomer} />
        <CustomerList customers={customers} deleteCustomer={deleteCustomer} />
      </div>
    </div>
  );
}

export default App;
