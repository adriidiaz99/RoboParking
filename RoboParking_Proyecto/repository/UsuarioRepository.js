import Cliente from "../models/Cliente.js";

export default class UsuarioRepository{

    constructor(){
        this.listaUsuario = [];
    }

    buscarUltimoId(){

        let ultimoId = 0;

        this.listaUsuario.forEach(element => {
            if(element.getId > ultimoId)
                ultimoId = element.getId;
        });

        if(ultimoId == 0)
            return 1;

        return ultimoId++;
    }

    agregarUsuario(v1){
        v1.setId(this.buscarUltimoId());
        this.listaUsuario.push(v1);
    }

    eliminarUsuario(v1){
        this.listaUsuario.splice(v1);
    }

    editarUsuario(v1){
        this.listaUsuario[this.listaUsuario.indexOf(this.encontrarPorId(v1.getId))] = v1;
    }

    encontrarPorId(id){
        if(this.listaUsuario.length > 0){
            for(let i = 0; i < this.listaUsuario.length; i++){
                if(id === this.listaUsuario[i].getId){
                    return this.listaUsuario[i];
                }
            }
        }
        return 0;
    }

    encontrarPorDni(dni){
        let usuario = null;

        if(this.listaUsuario.length > 0){
            for(let i = 0; i < this.listaUsuario.length; i++){
                if(dni === this.listaUsuario[i].getDni){
                    usuario = this.listaUsuario[i];
                }
            }
        }

        if(usuario === null)
            return 0;
        else
            return usuario;
    }

    encontrarTodos(){
        return this.listaUsuario;
    }

    encontrarTodosCliente(){
    let lista = [];

        this.listaUsuario.forEach(element => {
            if(element instanceof Cliente){
                lista.push(element);
            }
        });

    return lista;
    }
}