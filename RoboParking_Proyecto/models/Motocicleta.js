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
    
}