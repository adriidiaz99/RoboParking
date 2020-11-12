class CobroRepository{

    constructor(){
        this.listaCobros = [];
    }

    buscarUltimoId(){

        let ultimoId = 0;

        this.parking.forEach(element => {
            if(element.id() > ultimoId)
                ultimoId = element.id();
        });

        if(ultimoId = 0)
            return 1;

        return ultimoId;
    }

    agregarCobro(v1){
        v1.setId(this.buscarUltimoId());
        this.parking.push(v1);
    }

    eliminarCobro(v1){
        this.parking.splice(v1);
    }

    editarCobro(v1){
        this.parking[this.parking.indexOf(this.encontrarPorId(v1.id()))] = v1;
    }

    encontrarPorId(newId){
        if(this.parking.length > 0){
            for(let i = 0; i < this.parking.length; i++){
                if(id === this.parking[i].id()){
                    return this.parking[i];
                }
            }
        }
        return 0;
    }

    encontrarTodos(){
        return this.parking;
    }


}