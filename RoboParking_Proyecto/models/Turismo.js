class Turismo extends Vehiculo{

    constructor(id, nombre, matricula, combustible, duenyo, nPuertas){
        super(id, nombre, matricula, combustible, duenyo);
        this.nPuertas = nPuertas;
    }

    get id(){
        return this.id;
    }

    get nombre(){
        return this.nombre;
    }

    get matricula(){
        return this.matricula;
    }

    get combustible(){
        return this.combustible;
    }

    get duenyo(){
        return this.duenyo;
    }

    get nPuertas(){
        return this.nPuertas;
    }
    
}