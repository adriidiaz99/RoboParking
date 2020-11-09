class UsuarioService{

    constructor(){
        this.usuarioRepository = new UsuarioRepository;
    }

    agregarVehiculo(v1){
        this.usuarioRepository.agregarUsuario(v1);
    }

    eliminarVehiculo(v1){
        this.usuarioRepository.eliminarUsuario(v1);
    }

    editarVehiculo(v1){
        this.usuarioRepository.editarUsuario(v1);
    }

    encontrarPorId(id){
        return this.usuarioRepository.encontrarPorId(id);
    }

    encontrarTodos(){
        return this.usuarioRepository.encontrarTodos();
    }

}