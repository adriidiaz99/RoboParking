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

}