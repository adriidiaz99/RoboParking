export default class Ticket{

    constructor(id, nPlaza, matricula, pin, duenyo){
        this.id = id;
        this.nPlaza = nPlaza;
        this.matricula = matricula;
        this.pin = pin;
        this.duenyo = duenyo;
        this.fechaDeposito = new Date();
    }

    get getId(){
        return this.id;
    }

    get getMatricula(){
        return this.matricula;
    }

    get getDuenyo(){
        return this.duenyo;
    }

    get getPin(){
        return this.pin;
    }

    get getNPlaza(){
        return this.nPlaza;
    }

    get getFechaDeposito(){
        return this.fechaDeposito;
    }

    setId(newId){
        this.id = newId;
    }

    setmatricula(newMatricula){
        this.matricula = newMatricula;
    }

    setDuenyo(newDuenyo){
        this.duenyo = newDuenyo;
    }

    setPin(newPin){
        this.pin = newPin;
    }

    setFechaDeposito(d1){
        this.fechaDeposito = d1;
    }


}