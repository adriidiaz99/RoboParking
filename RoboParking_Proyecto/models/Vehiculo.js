class Vehiculo{

    constructor (id, nombre, matricula, combustible, duenyo) {
        this.id = id;
        this.nombre = nombre;
        this.matricula = matricula;
        this.combustible = combustible;
        this.duenyo = duenyo;
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