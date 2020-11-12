export default class CobroService{

    constructor(cobroRepository){
        this.cobroRepository = cobroRepository;
    }

    agregarCobro(v1){
        this.cobroRepository.agregarCobro(v1);
    }

    eliminarCobro(v1){
        this.cobroRepository.eliminarCobro(v1);
    }

    editarCobro(v1){
        this.cobroRepository.editarCobro(v1);
    }

    encontrarPorId(id){
        return this.cobroRepository.encontrarPorId(id);
    }

    encontrarTodos(){
        return this.cobroRepository.encontrarTodos();
    }

}