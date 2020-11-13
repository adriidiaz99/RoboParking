export default class CobroRepository{
    
    constructor(){
        this.listaCobro = [];
    }

    buscarUltimoId(){

        let ultimoId = 0;

        this.listaCobro.forEach(element => {
            if(element.getId > ultimoId)
                ultimoId = element.id();
        });

        if(ultimoId == 0)
            return 1;

        return ultimoId++;
    }

    agregarCobro(v1){
        v1.setId(this.buscarUltimoId());
        this.listaCobro.push(v1);
    }

    eliminarCobro(v1){
        this.listaCobro.splice(v1);
    }

    editarCobro(v1){
        this.listaCobro[this.listaCobro.indexOf(this.encontrarPorId(v1.getId))] = v1;
    }

    encontrarPorId(id){
        if(this.listaCobro.length > 0){
            for(let i = 0; i < this.listaCobro.length; i++){
                if(id === this.listaCobro[i].getId){
                    return this.listaCobro[i];
                }
            }
        }
        return 0;
    }

    encontrarTodos(){
        return this.listaCobro;
    }
}