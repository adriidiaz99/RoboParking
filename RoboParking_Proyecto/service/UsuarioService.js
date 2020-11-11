class UsuarioService{

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

    encontrarTodos(){
        return this.usuarioRepository.encontrarTodos();
    }

}