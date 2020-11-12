import Vehiculo from "./Vehiculo.js"

export default class Caravana extends Vehiculo{

    constructor(id, nombre, matricula, combustible, duenyo){
        super(id, nombre, matricula, combustible, duenyo);
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