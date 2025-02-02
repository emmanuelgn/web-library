import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}`)
      .then(response => {
        setMessage(response.data);
      })
      .catch(error => {
        console.error('Error connecting to backend:', error);
      });
  }, []);

  return (
    <div>
      <h1>Library Front-End</h1>
      <p>Menssage from back-end: {message}</p>
    </div>
  );
}

export default App;
