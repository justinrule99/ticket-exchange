


// TICKET UTIL FILE


export const goToHref = () => {
    // react-router ?

};

export const getTicket = async (ticketUuid) => {
    // gets one specific ticket based on uuid
    const url = `localhost:5555/tickets?ticketUuid=${ticketUuid}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if(response.status !== 200){
        return 'Error retrieving data';
    }

    return response.json();
};


export const getAllTickets = async () => {
    // get all tickets where active == true
    // will use fetch GET
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if(response.status !== 200){
        return 'Error retrieving data';
    }

    const data = await response.json();

    console.log(data);

    // will return array of tickets
    return data;

};

export const createTicket = async (ticket) => {
    // will use fetch POST

    const url = 'https://jsonplaceholder.typicode.com/todos/1';

    const response = await fetch(url, {
       method: 'POST',
       body: JSON.stringify(ticket),
       headers: {
           'Content-Type': 'application/json',
       }
    });

    if(response.status === 500){
        return 'Server Error';
    }

    return response.json();
};