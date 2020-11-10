class Ticket{

    constructor(id, nPlaza, matricula, pin, duenyo){
        this.id = id;
        this.nPlaza = nPlaza;
        this.matricula = matricula;
        this.pin = pin;
        this.duenyo = duenyo;
        this.fechaDeposito = new Date();
    }

    get id(){
        return this.id;
    }

    get matricula(){
        return this.matricula;
    }

    get duenyo(){
        return this.duenyo;
    }

    get pin(){
        return this.pin;
    }

    get nPlaza(){
        return this.nPlaza;
    }

    get fechaDeposito(){
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