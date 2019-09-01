import React from 'react'
import Ticket from "./Ticket";
import '../styles/TicketSection.css';
import {getAllTickets, getTicket, createTicket, goToHref} from "../utils/ticket-util";



// store tickets in state? redux?
// might need node layer to make api calls properly
// how does this handle auth?

let apiTickets;

class TicketSection extends React.Component {

    async componentDidMount() {
        // fetch('http://localhost:5555/api/apiTickets')
        //     .then(res => res.json())
        //     .then((data) => {
        //         console.log(data)
        //     })
        //     .catch(console.log)
        //
        //
        apiTickets = await getAllTickets();
        this.setState({tickets: apiTickets});
        console.log(apiTickets);

    }

    render () {

        const {tickets} = this.props;
        console.log('apitckets in render'+ apiTickets);
        // apitickets is still undefined since async

        return (
            <div className="ticket-table">
                <button onClick={() => {
                    console.log(tickets);
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
                <button onClick={() => {console.log('ehre')}}>
                    {'Delete'}
                </button>
            </div>
        );
    }
}

export default TicketSection;