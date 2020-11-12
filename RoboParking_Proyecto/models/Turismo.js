import Vehiculo from "./Vehiculo.js"

export default class Turismo extends Vehiculo{

    constructor(id, nombre, matricula, combustible, duenyo, nPuertas){
        super(id, nombre, matricula, combustible, duenyo);
        this.nPuertas = nPuertas;
    }

    get getId(){
        return super.id();
    }

    get getNombre(){
        return super.nombre();
    }

    get getMatricula(){
        return super.matricula();
    }

    get getCombustible(){
        return super.combustible();
    }

    get getDuenyo(){
        return super.duenyo();
    }

    get getNPuertas(){
        return this.nPuertas;
    }

    setId(newId){
        super.setId(newId);
    }

    setNombre(newNombre){
        super.setNombre(newNombre);
    }

    setmatricula(newMatricula){
        super.setMatricula(newMatricula);
    }

    setCombustible(newCombustible){
        super.setCombustible(newCombustible);
    }

    setDuenyo(newDuenyo){
        this.setDuenyo(newDuenyo);
    }

    setnPuertas(newNPuertas){
        this.nPuertas = newNPuertas;
    }
    
}