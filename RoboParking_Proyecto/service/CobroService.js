class CobroService{

    constructor(cobroRepository){
        this.cobroRepository = cobroRepository;
    }

    agregarCobro(v1){
        this.cobroRepository.agregarTicket(v1);
    }

    eliminarCobro(v1){
        this.cobroRepository.eliminarTicket(v1);
    }

    editarCobro(v1){
        this.cobroRepository.editarTicket(v1);
    }

    encontrarPorId(id){
        return this.cobroRepository.encontrarPorId(id);
    }

    encontrarTodos(){
        return this.cobroRepository.encontrarTodos();
    }

}