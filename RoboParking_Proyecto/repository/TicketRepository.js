class TicketRepository{
    constructor(){
        this.listaTicket = [];
    }

    buscarUltimoId(){

        let ultimoId = 0;

        this.listaTicket.forEach(element => {
            if(element.id() > ultimoId)
                ultimoId = element.id();
        });

        if(ultimoId = 0)
            return 1;

        return ultimoId;
    }

    agregarTicket(v1){
        v1.setId(this.buscarUltimoId());
        this.listaTicket.push(v1);
    }

    eliminarTicket(v1){
        this.listaTicket.splice(v1);
    }

    editarTicket(v1){
        this.listaTicket[this.listaTicket.indexOf(this.encontrarPorId(v1.id()))] = v1;
    }

    encontrarPorId(id){
        if(this.listaTicket.length > 0){
            for(let i = 0; i < this.listaTicket.length; i++){
                if(id === this.listaTicket[i].id()){
                    return this.listaTicket[i];
                }
            }
        }
        return 0;
    }

    encontrarTodos(){
        return this.listaTicket;
    }
}