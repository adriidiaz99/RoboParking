export default class PlazaRepository{

    constructor(){
        this.parking = [];
    }

    buscarUltimoNPlaza(){

        let ultimoId = 0;

        this.parking.forEach(element => {
            if(element.getNPlaza > ultimoId)
                ultimoId = element.getNPlaza;
        });

        if(ultimoId === 0)
            return 1;

        return ultimoId+1;
    }

    agregarPlaza(v1){
        v1.setNPlaza(this.buscarUltimoNPlaza());
        this.parking.push(v1);
    }

    eliminarPlaza(v1){
        this.parking.splice(v1);
    }

    editarPlaza(v1){
        this.parking[this.parking.indexOf(this.encontrarPorNPlaza(v1.getNPlaza))] = v1;
    }

    encontrarPorNPlaza(nPlaza){
    let plaza = null; 

        if(this.parking.length > 0){
            for(let i = 0; i < this.parking.length; i++){
                if(nPlaza === this.parking[i].getNPlaza){
                    plaza = this.parking[i];
                }
            }
        }
        return plaza;
    }

    encontrarTodos(){
        return this.parking;
    }

}