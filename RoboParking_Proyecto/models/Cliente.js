import Usuario from "./Usuario.js"

export default class Cliente extends Usuario{

    constructor(id, nombre, apellido1, apellido2, password, vehiculo){
        super(id, nombre, apellido1, apellido2, password);
        this.vehiculo = vehiculo;
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

    get getVehiculo(){
        return this.vehiculo;
    }

    setId(newId){
        this.setId(newId);
    }

    setNombre(newNombre){
        this.setNombre(newNombre);
    }

    setApellido1(newApellido){
        this.setApellido1(newApellido);
    }

    setApellido2(newApellido){
        this.setApellido2(newApellido);
    }

    setPassword(newPassword){
        this.setPassword(newPassword);
    }

    setVehiculos(v1){
        this.vehiculos = v1;
    }

}