class UsuarioRepository{

    constructor(){
        this.listaUsuario = [];
    }

    agregarUsuario(v1){
        this.listaUsuario.push(v1);
    }

    eliminarUsuario(v1){
        this.listaUsuario.splice(v1);
    }

    editarUsuario(v1){
        this.listaUsuario[this.listaUsuario.indexOf(this.encontrarPorId(v1.id()))] = v1;
    }

    encontrarPorId(id){
        for(let i = 0; i < this.listaUsuario.length; i++){
            if(id === this.listaUsuario[i].id()){
                return this.listaUsuario[i];
            }
        }
    }

    encontrarTodos(){
        return this.listaUsuario;
    }
}