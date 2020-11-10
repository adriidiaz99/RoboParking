class Caravana extends Vehiculo{

    constructor(id, nombre, matricula, combustible, duenyo){
        super(id, nombre, matricula, combustible, duenyo);
    }

    get id(){
        return super.id();
    }

    get nombre(){
        return super.nombre();
    }

    get matricula(){
        return super.matricula();
    }

    get combustible(){
        return super.combustible();
    }

    get duenyo(){
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