class TicketRepository{
    constructor(ticketRepository){
        this.ticketRepository = ticketRepository;
    }

    agregarVehiculo(v1){
        this.ticketRepository.agregarTicket(v1);
    }

    eliminarVehiculo(v1){
        this.ticketRepository.eliminarTicket(v1);
    }

    editarVehiculo(v1){
        this.ticketRepository.editarTicket(v1);
    }

    encontrarPorId(id){
        return this.ticketRepository.encontrarPorId(id);
    }

    encontrarTodos(){
        return this.ticketRepository.encontrarTodos();
    }
}