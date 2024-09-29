import React, { useState, useEffect } from 'react';
import './enum.css';
import axios from 'axios';

function UpdateEnumForm() {
  const [callbacks, setCallbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const pageSize = 10; 

  useEffect(() => {
    fetchCallbacks();
  }, [pageNumber]); // Fetch callbacks whenever pageNumber changes

  const fetchCallbacks = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/calling?page=${pageNumber}&pageSize=${pageSize}`);
      setCallbacks(response.data); // Assuming the response contains an array of callback objects
      setLoading(false);
      setError('');
    } catch (error) {
      console.error('Error fetching callbacks:', error);
      setError('Error fetching callbacks. Please try again.');
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };
  const handleUpdateEnum = async (index) => {
    try {
      const currentCallback = callbacks[index];
      // Check if the current status is not 'cleared'
      if (currentCallback.status !== 'cleared') {
        const updatedCallback = { ...currentCallback, status: 'cleared' };
        console.log('Updated Callback:', updatedCallback); 
        alert('Status Updated Succesfully')
        window.location.reload()
        const response = await axios.put('http://localhost:5000/id', updatedCallback);
        console.log('Response:', response.data);
        console.log("update call back is---->",updatedCallback) 
        const updatedCallbacks = [...callbacks];
        updatedCallbacks[index] = response.data;
        setCallbacks(updatedCallbacks);
      } else {
        console.log('Status already cleared, skipping update');
          alert('You have already cleared the Status against the Id!')
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };
  
  

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <h2>Callback Data:</h2>
          <table className="callbacks-table">
            <thead>
              <tr>
                <th>User Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Message</th>
                <th>Created At</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {callbacks.map((callback, index) => (
                <tr key={index}>
                 <td>{callback._id}</td>
                  <td>{callback.fname}</td>
                  <td>{callback.lname}</td>
                  <td>{callback.pnumber}</td>
                  <td>{callback.email}</td>
                  <td>{callback.message}</td>
                  <td>{callback.createdAt}</td>
                  <td>{callback.status}</td>
                  <td>
                    <button onClick={() => handleUpdateEnum(index)}>Update Status</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleNextPage}>Next</button>
          <button onClick={handlePrint}>Print</button>
        </div>
      )}
    </div>
  );
}

export default UpdateEnumForm;
