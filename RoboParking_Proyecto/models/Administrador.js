class Administrador extends Usuario{

    constructor(id, nombre, apellido1, apellido2, password){
        super(id, nombre, apellido1, apellido2, password);
    }

    get id(){
        return super.id();
    }

    get nombre(){
        return super.nombre();
    }

    get apellido1(){
        return super.apellido1();
    }

    get apellido2(){
        return super.apellido2();
    }

    get password(){
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