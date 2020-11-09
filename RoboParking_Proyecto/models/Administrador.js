class Administrador extends Usuario{

    constructor(id, nombre, apellido1, apellido2, password){
        super(id, nombre, apellido1, apellido2, password);
    }

    get id(){
        return this.id;
    }

    get nombre(){
        return this.nombre;
    }

    get apellido1(){
        return this.apellido1;
    }

    get apellido2(){
        return this.apellido2;
    }

    get password(){
        return this.password;
    }

}