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

    encontrarEntreTramoFecha(fechaReciente, fechaAntigua){
        let lista = [];

        this.encontrarTodos().forEach(element => {
            if(element.getFechaCobro > fechaAntigua && element.getFechaCobro < fechaReciente)
                lista.push(element);
        });

        return lista;
    }

    imprimirListaCobros(lista){
        console.log("\n\n");
        lista.forEach(element => {
            console.log("-----------------------------");
            console.log(" -Fecha de cobro: " +element.getFechaCobro);
            console.log(" -Número de plaza: " +element.getNPlaza);
            console.log(" -Matrícula: " +element.getMatricula);
            console.log(" -Precio de cobro: " +element.getCCobro +"\n\n");
        });
        console.log("\n\n");
    }

}