import Usuario from "./Usuario.js"

export default class Administrador extends Usuario{

    constructor(id, nombre, apellido1, apellido2, password){
        super(id, nombre, apellido1, apellido2);
        this.password = password;
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

    get getPassword(){
        return this.password;
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

    setPassword(newPassword){
        this.password = newPassword;
    }

}