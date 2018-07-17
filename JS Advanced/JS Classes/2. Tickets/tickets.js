solve(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
);


function solve(tickets,sorting) {
    class Ticket{
        constructor(destination,price,status){
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let allTickets = [];

    for(let i=0;i<tickets.length;i++){
         let input = tickets[i].split("|");
         let newTicket = new Ticket(input[0],input[1],input[2]);
        allTickets.push(newTicket);
    }

    return allTickets.sort((a,b) => a[sorting] > b[sorting]);

}