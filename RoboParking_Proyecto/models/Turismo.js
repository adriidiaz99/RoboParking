import Vehiculo from "./Vehiculo.js"

export default class Turismo extends Vehiculo{

    constructor(id, nombre, matricula, combustible, duenyo, nPuertas){
        super(id, nombre, matricula, combustible, duenyo);
        this.nPuertas = nPuertas;
    }

    get getId(){
        return this.id;
    }

    get getNombre(){
        return this.nombre;
    }

    get getMatricula(){
        return this.matricula;
    }

    get getCombustible(){
        return this.combustible;
    }

    get getDuenyo(){
        return this.duenyo;
    }

    get getNPuertas(){
        return this.nPuertas;
    }

    setId(newId){
        this.id = newId;
    }

    setNombre(newNombre){
        this.nombre = newNombre;
    }

    setmatricula(newMatricula){
        this.matricula = newMatricula;
    }

    setCombustible(newCombustible){
        this.combustible = newCombustible;
    }

    setDuenyo(newDuenyo){
        this.duenyo = newDuenyo;
    }

    setnPuertas(newNPuertas){
        this.nPuertas = newNPuertas;
    }
    
}