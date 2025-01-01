import React from 'react';

function CustomerList({ customers, deleteCustomer }) {
  return (
    <div className="customer-list">
      <h2>Customer List</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <p>
              <strong>Name:</strong> {customer.name} | <strong>Mobile:</strong> {customer.mobile} |{' '}
              <strong>Address:</strong> {customer.address} | <strong>Email:</strong> {customer.email}
            </p>
            <button onClick={() => deleteCustomer(customer.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerList;
