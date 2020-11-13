export default class Usuario{

    constructor(id, nombre, apellido1, apellido2) {
        if (this.constructor == Usuario) {
          throw new Error("Abstract export default classes can't be instantiated.");
        } else {
          this.id = id;
          this.nombre = nombre;
          this.apellido1 = apellido1;
          this.apellido2 = apellido2;
        }
    }

    get getId(){
        return this.id;
    }

    get getNombre(){
        return this.nombre;
    }

    get getApellido1(){
        return this.apellido1;
    }

    get getApellido2(){
        return this.apellido2;
    }

    setId(newId){
        this.id = newId;
    }

    setNombre(newNombre){
        this.nombre = newNombre;
    }

    setApellido1(newApellido){
        this.apellido1 = newApellido;
    }

    setApellido2(newApellido){
        this.apellido2 = newApellido;
    }
}