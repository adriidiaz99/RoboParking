import Usuario from "./Usuario.js"

export default class Administrador extends Usuario{

    constructor(id, nombre, apellido1, apellido2, password){
        super(id, nombre, apellido1, apellido2, password);
    }

    get getId(){
        return super.id();
    }

    get getNombre(){
        return super.nombre();
    }

    get getApellido1(){
        return super.apellido1();
    }

    get getApellido2(){
        return super.apellido2();
    }

    get getPassword(){
        return super.password();
    }

    setId(newId){
        super.setId(newId);
    }

    setNombre(newNombre){
        super.setNombre(newNombre);
    }

    setApellido1(newApellido){
        super.setApellido1(newApellido);
    }

    setApellido2(newApellido){
        super.setApellido2(newApellido);
    }

    setPassword(newPassword){
        super.setPassword(newPassword);
    }

}