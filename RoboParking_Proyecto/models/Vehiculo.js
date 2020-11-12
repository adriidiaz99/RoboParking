export default class Vehiculo{

    constructor (id, nombre, matricula, combustible, duenyo) {
        this.id = id;
        this.nombre = nombre;
        this.matricula = matricula;
        this.combustible = combustible;
        this.duenyo = duenyo;
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

}