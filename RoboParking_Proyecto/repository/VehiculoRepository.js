class VehiculoRepository{

    constructor(){
        this.listaVehiculos = [];
    }

    agregarVehiculo(v1){
        this.listaVehiculos.push(v1);
    }

    eliminarVehiculo(v1){
        this.listaVehiculos.splice(v1);
    }

    editarVehiculo(v1){
        this.listaVehiculos[this.listaVehiculos.indexOf(this.encontrarPorId(v1.id()))] = v1;
    }

    encontrarPorId(id){
        for(let i = 0; i < this.listaVehiculos.length; i++){
            if(id === this.listaVehiculos[i].id()){
                return this.listaVehiculos[i];
            }
        }
    }

    encontrarTodos(){
        return this.listaVehiculos;
    }

}