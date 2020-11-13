import Vehiculo from "./Vehiculo.js"

export default class Motocicleta extends Vehiculo{

    constructor(id, nombre, matricula, combustible, duenyo){
        super(id, nombre, matricula, combustible, duenyo);
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

    setDuenyo(newDuenyo){
        this.duenyo = newDuenyo;
    }
    
}