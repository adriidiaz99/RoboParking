import Administrador from "../models/Administrador.js";

export default class UsuarioService{

    constructor(usuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }

    agregarUsuario(v1){
        this.usuarioRepository.agregarUsuario(v1);
    }

    eliminarUsuario(v1){
        this.usuarioRepository.eliminarUsuario(v1);
    }

    editarUsuario(v1){
        this.usuarioRepository.editarUsuario(v1);
    }

    encontrarPorId(id){
        return this.usuarioRepository.encontrarPorId(id);
    }

    encontrarPorDni(dni){
        return this.usuarioRepository.encontrarPorDni(dni);
    }

    encontrarTodos(){
        return this.usuarioRepository.encontrarTodos();
    }

    imprimirAbono(plaza, cliente){

        console.log("Abono RoboParking\n- - - - - - - - -\n");
        console.log("- Aparcado en la plaza nº " +plaza.getNPlaza);
        console.log("- Con matricula " +cliente.getVehiculo.getMatricula);
        console.log("- Pin de retiro: " +plaza.getPin);
        console.log("- Nombre del dueño: " +cliente.getNombre);
        console.log("- Dni: " +cliente.getDni);
        console.log("- Abono: " +cliente.getTipoAbono);
    }

    logearAdministrador(nombre, password){
        let comprobar = false;

        this.encontrarTodos().forEach(element => {
            if(element instanceof Administrador){
                if(nombre === element.getNombre){
                    if(password === element.getPassword){
                        comprobar = true;
                    }
                }
            }
        });

        return comprobar;
    }

}