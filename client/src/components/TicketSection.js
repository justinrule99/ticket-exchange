import React from 'react'
import Ticket from "./Ticket";
import '../styles/TicketSection.css';
import {getAllTickets, getTicket, createTicket, goToHref} from "../utils/ticket-util";





class TicketSection extends React.Component {

    render () {

        const {tickets} = this.props;
        console.log(tickets);

        // const tickets = getAllTickets();

        return (
            <div className="ticket-table">
                <button onClick={() => {
                    console.log(ticket);
                }}
                >
                    {'Add'}
                </button>
                <table>
                    <thead>
                        <tr>
                            <th>{'Event'}</th>
                            <th>{'Price'}</th>
                            <th>{'Buy Now'}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map((ticket) =>
                            <Ticket ticket={ticket} key={ticket.price} />
                        )}
                    </tbody>

                </table>
            </div>
        );
    }
}

export default TicketSection;