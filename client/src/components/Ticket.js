import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/Ticket.css';



class Ticket extends React.Component {

    render () {
        const {ticket} = this.props;

        return (
            <tr className="ticket-item">
                <td>{ticket.eventName}</td>
                <td>{ticket.price}</td>
                <td>
                    <button>{'Buy Now'}</button>
                </td>
            </tr>
        );
    }
}

export default Ticket;