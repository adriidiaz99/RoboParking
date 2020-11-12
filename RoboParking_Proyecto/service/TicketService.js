import Ticket from "../models/Ticket.js";

export default class TicketRepository{
    constructor(ticketRepository){
        this.ticketRepository = ticketRepository;
    }

    agregarTicket(v1){
        this.ticketRepository.agregarTicket(v1);
    }

    eliminarTicket(v1){
        this.ticketRepository.eliminarTicket(v1);
    }

    editarTicket(v1){
        this.ticketRepository.editarTicket(v1);
    }

    encontrarPorId(id){
        return this.ticketRepository.encontrarPorId(id);
    }

    encontrarTodos(){
        return this.ticketRepository.encontrarTodos();
    }

    encontrarTicketMasReciente(nPlaza, matricula){
        let n = null;

        this.encontrarTodos().sort(function(a1, a2){
            if(a1.getId > a2.getId)
                return 1;

            if(a1.getId < a2.getId)
                return -1;

            return 0;
        });

        this.encontrarTodos().forEach(element => {
            if(element.getNPlaza === nPlaza && element.getMatricula === matricula)
                n = element;
        });

        if(n !== null)
            return n;
        else
            return new Ticket(0, 2, "", 2, "");
    }

    imprimirTicket(ticket){

        console.log("Ticket RoboParking\n- - - - - - - - -\n");
        console.log("- Fecha de deposito: " +ticket.getFechaDeposito);
        console.log("- Aparcado en la plaza nº " +ticket.getNPlaza);
        console.log("- Con matricula " +ticket.getMatricula);
        console.log("- Pin de retiro: " +ticket.getPin);
        console.log("- Nombre del dueño: " +ticket.getDuenyo);
    }
}