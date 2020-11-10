class PlazaRepository{

    constructor(){
        this.parking = [];
    }

    buscarUltimoNPlaza(){

        let ultimoId = 0;

        this.parking.forEach(element => {
            if(element.nPlaza() > ultimoId)
                ultimoId = element.nPlaza();
        });

        if(ultimoId = 0)
            return 1;

        return ultimoId;
    }

    agregarPlaza(v1){
        v1.setNPlaza(this.buscarUltimoNPlaza());
        this.parking.push(v1);
    }

    eliminarPlaza(v1){
        this.parking.splice(v1);
    }

    editarPlaza(v1){
        this.parking[this.parking.indexOf(this.encontrarPorNPlaza(v1.nPlaza()))] = v1;
    }

    encontrarPorNPlaza(nPlaza){
        if(this.parking.length > 0){
            for(let i = 0; i < this.parking.length; i++){
                if(nPlaza === this.parking[i].nPlaza()){
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