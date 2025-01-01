import React, { useState } from 'react';

function CustomerForm({ addCustomer }) {
  const [customer, setCustomer] = useState({
    name: '',
    mobile: '',
    address: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (customer.name && customer.mobile && customer.address && customer.email) {
      addCustomer(customer);
      setCustomer({ name: '', mobile: '', address: '', email: '' });
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={customer.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="mobile"
        placeholder="Mobile"
        value={customer.mobile}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={customer.address}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={customer.email}
        onChange={handleChange}
      />
      <button type="submit">Add Customer</button>
    </form>
  );
}

export default CustomerForm;
