export default class VehiculoRepository{

    constructor(){
        this.listaVehiculos = [];
    }

    buscarUltimoId(){

        let ultimoId = 0;

        this.listaVehiculos.forEach(element => {
            if(element.getId > ultimoId)
                ultimoId = element.getId;
        });

        if(ultimoId == 0)
            return 1;

        return ultimoId+1;
    }

    agregarVehiculo(v1){
        v1.setId(this.buscarUltimoId());
        this.listaVehiculos.push(v1);
    }

    eliminarVehiculo(v1){
        this.listaVehiculos.splice(v1);
    }

    editarVehiculo(v1){
        this.listaVehiculos[this.listaVehiculos.indexOf(this.encontrarPorId(v1.getId))] = v1;
    }

    encontrarPorId(id){
        if(this.listaVehiculos.length > 0){
            for(let i = 0; i < this.listaVehiculos.length; i++){
                if(id === this.listaVehiculos[i].getId){
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