class ParkingRepository{

    constructor(){
        this.listaParking = [];
    }

    agregarParking(v1){
        this.listaParking.push(v1);
    }

    eliminarParking(v1){
        this.listaParking.splice(v1);
    }

    editarParking(v1){
        this.listaParking[this.listaParking.indexOf(this.encontrarPorId(v1.id()))] = v1;
    }

    encontrarPorId(id){
        for(let i = 0; i < this.listaParking.length; i++){
            if(id === this.listaParking[i].id()){
                return this.listaParking[i];
            }
        }
    }

    encontrarTodos(){
        return this.listaParking;
    }

}