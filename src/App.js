import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';
import './App.css';

function App() {
  // Load customers from local storage or initialize an empty array
  const [customers, setCustomers] = useState(() => {
    const savedCustomers = localStorage.getItem('customers');
    return savedCustomers ? JSON.parse(savedCustomers) : [];
  });

  // Save customers to local storage whenever the `customers` state changes
  useEffect(() => {
    localStorage.setItem('customers', JSON.stringify(customers));
  }, [customers]);

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
