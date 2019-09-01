


// TICKET UTIL FILE

// need to create prod/dev/local env logic

export const goToHref = () => {
    // react-router ?

};

export const getTicket = async (ticketId) => {
    // gets one specific ticket based on uuid
    const url = `http://localhost:5555/api/tickets/:${ticketId}`;

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if(response.status !== 200){
        return 'Error retrieving data';
    }

    // handle error here

    return response.json();
};


export const getAllTickets = async () => {
    // get all tickets where active == true
    // will use fetch GET
    const url = 'http://localhost:5555/api/tickets';

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if(response.status !== 200){
        return 'Error retrieving data';
    }

    console.log('response: '+response);
    console.log('response: '+response.status);


    const data = await response.json();

    console.log(data);

    return data;

};

export const createTicket = async (ticket) => {
    const url = 'http://localhost:5555/api/tickets/create';

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

export const deleteTicket = async (ticketId) => {
    const url = `http://localhost:5555/api/tickets/:${ticketId}`;

    const response = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    console.log(response);
    if (response.status !== 200) {
        return 'Server Error';
    }

    return 'Deleted Successfully';
};