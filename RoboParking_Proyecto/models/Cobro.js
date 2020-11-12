export default class Cobro{

    constructor(id, nPlaza, matricula, cCobro){
        this.id = id;
        this.nPlaza = nPlaza;
        this.matricula = matricula;
        this.cCobro = cCobro;
        this.fechaCobro = new Date();
    }

    get getId(){
        return this.id;
    }

    get getMatricula(){
        return this.matricula;
    }

    get getCCobro(){
        return this.cCobro;
    }

    get getNPlaza(){
        return this.nPlaza;
    }

    get getFechaCobro(){
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