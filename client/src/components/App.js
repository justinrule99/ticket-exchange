import React from 'react';
import '../styles/App.css';
import TicketSection from './TicketSection.js'


function App() {
    const tickets = [
        {
            "eventName": "Basketball Game",
            "price": 54,
            "uuid" : 'e1a905b6-a0fd-4d1b-b78c-8dc7b3e4c5a5'
        },
        {
            "eventName": "Basketball Game",
            "price": 532,
            "uuid" : 'c053407d-753f-410c-bec8-5b30f3f43a35'
        },
        {
            "eventName": "Football Game",
            "price": 8,
            "uuid" : '46358139-8f57-453e-bdb9-79d94eb29a4e'
        }
    ];

    return (
        <div className="App">
          <TicketSection tickets={tickets} />
        </div>
    );
}

export default App;
