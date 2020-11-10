class VehiculoRepository{

    constructor(){
        this.listaVehiculos = [];
    }

    buscarUltimoId(){

        let ultimoId = 0;

        parking.forEach(element => {
            if(element.id() > ultimoId)
                ultimoId = element.id();
        });

        if(ultimoId = 0)
            return 1;

        return ultimoId;
    }

    agregarVehiculo(v1){
        v1.setId(this.buscarUltimoId());
        this.listaVehiculos.push(v1);
    }

    eliminarVehiculo(v1){
        this.listaVehiculos.splice(v1);
    }

    editarVehiculo(v1){
        this.listaVehiculos[this.listaVehiculos.indexOf(this.encontrarPorId(v1.id()))] = v1;
    }

    encontrarPorId(id){
        if(this.listaVehiculos.length > 0){
            for(let i = 0; i < this.listaVehiculos.length; i++){
                if(id === this.listaVehiculos[i].id()){
                    return this.listaVehiculos[i];
                }
            }
        }
        return 0;
    }

    encontrarTodos(){
        return this.listaVehiculos;
    }

}