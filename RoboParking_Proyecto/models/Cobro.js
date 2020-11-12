class Cobro{

    constructor(id, nPlaza, precioPagar){
        this.id = id;
        this.nPlaza = nPlaza;
        this.fechaCobro = new Date();
        this.precioPagar = precioPagar;
    }

    get id(){
        return this.id;
    }

    get nPlaza(){
        return this.nPlaza;
    }

    get fechaCobro(){
        return this.fechaCobro;
    }

    get precioPagar(){
        return this.precioPagar;
    }

    setId(newId){
        this.id = newId;
    }

    setNPlaza(newNPlaza){
        this.nPlaza = newNPlaza;
    }

    setFechaCobro(d1){
        this.fechaCobro = d1;
    }

    setPrecioPagar(pg){
        this.precioPagar = pg;
    }


}