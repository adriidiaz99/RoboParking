class Usuario{

    constructor(id, nombre, apellido1, apellido2, password) {
        if (this.constructor == Usuario) {
          throw new Error("Abstract classes can't be instantiated.");
        } else {
          this.id = id;
          this.nombre = nombre;
          this.apellido1 = apellido1;
          this.apellido2 = apellido2;
          this.password = password;
        }
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

    setPassword(newPassword){
        this.password = newPassword;
    }
}