class Motocicleta extends Vehiculo{

    constructor(id, nombre, matricula, combustible, duenyo){
        super(id, nombre, matricula, combustible, duenyo);
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
    
}