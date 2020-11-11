class Cobro{

    constructor(id, nPlaza, matricula, cCobro){
        this.id = id;
        this.nPlaza = nPlaza;
        this.matricula = matricula;
        this.cCobro = cCobro;
        this.fechaCobro = new Date();
    }

    get id(){
        return this.id;
    }

    get matricula(){
        return this.matricula;
    }

    get cCobro(){
        return this.cCobro;
    }

    get nPlaza(){
        return this.nPlaza;
    }

    get fechaCobro(){
        return this.fechaCobro;
    }

    setId(newId){
        this.id = newId;
    }

    setMatricula(newMatricula){
        this.matricula = newMatricula;
    }

    setCCobro(newCCobro){
        this.cCobro = newCCobro;
    }

    setNPlaza(newNPlaza){
        this.nPlaza = newNPlaza;
    }

    setFechaCobro(d1){
        this.fechaCobro = d1;
    }

}