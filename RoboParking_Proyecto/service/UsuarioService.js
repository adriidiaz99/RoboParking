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

    encontrarTodosClientes(){
        return this.usuarioRepository.encontrarTodosCliente();
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

    imprimirTodosAbonos(){
        this.encontrarTodosClientes().forEach(element => {

            console.log("-------------------------------------")
            console.log("Tipo de abono: " +element.getTipoAbono);
            console.log("Dni: " +element.getDni);
            console.log("Numero tarjeta: " +element.getNTarjetaCredito);
            console.log("Número de cobros: " +element.getNCobros);

        });

        console.log("\n\n");
    }

    imprimirLista(lista){
        lista.forEach(element => {

            console.log("-------------------------------------")
            console.log("Tipo de abono: " +element.getTipoAbono);
            console.log("Dni: " +element.getDni);
            console.log("Numero tarjeta: " +element.getNTarjetaCredito);
            console.log("Número de cobros: " +element.getNCobros);

        });

        console.log("\n\n");
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

    actualizarCobros(){
        let fecha = new Date();

        let mesesBono;
        let mesesFecha;

        let anyosBono;
        let anyosFecha;

        this.encontrarTodosClientes().forEach(element => {
            mesesBono = Date.parse(element.getFUltimoCobro) * 3.8 * Math.pow(10,-10);
            mesesFecha = Date.parse(fecha) * 3.8 * Math.pow(10,-10);
            anyosBono = Date.parse(element.getFUltimoCobro) * 3.2 * Math.pow(10,-11);
            anyosFecha = Date.parse(element.getFUltimoCobro) * 3.2 * Math.pow(10,-11);


            if(element.getTipoAbono === "Semanal"){
                if(element.getFUltimoCobro.getDate() === (fecha.getDate() - 7)){
                    element.setNCobros(element.getNCobros + 1);
                    element.setFUltimoCobro(fecha);
                }
            }

            if(element.getTipoAbono === "Mensual"){
                if(mesFecha - mesBono >= 1){
                    element.setNCobros(element.getNCobros + 1);
                    element.setFUltimoCobro(fecha);
                }
            }

            if(element.getTipoAbono === "Mensual"){
                if(anyoFecha - anyoBono >= 1){
                    element.setNCobros(element.getNCobros + 1);
                    element.setFUltimoCobro(fecha);
                }
            }
        });
    }

    encontrarCaducanEseMEs(mes){
        let fecha = new Date();
        let lista = [];

        let mesesBono;
        let mesesFecha;

        let anyosBono;
        let anyosFecha;

        this.encontrarTodosClientes().forEach(element => {

            mesesBono = Date.parse(element.getFUltimoCobro) * 3.8 * Math.pow(10,-10);
            mesesFecha = Date.parse(fecha) * 3.8 * Math.pow(10,-10);
            anyosBono = Date.parse(element.getFUltimoCobro) * 3.2 * Math.pow(10,-11);
            anyosFecha = Date.parse(element.getFUltimoCobro) * 3.2 * Math.pow(10,-11);


            if(element.getTipoAbono === "Semanal"){
                fecha.setDate(element.getFUltimoCobro.getDate() + 7);
                if(fecha.getMonth() === mes){
                    lista.push(element);
                }
            }

            if(element.getTipoAbono === "Mensual"){
                if(element.getFUltimoCobro.getMonth() + 1 === mes){
                    lista.push(element);
                }
            }

            if(element.getTipoAbono === "Anual"){
                if(element.getFUltimoCobro.getMonth() === mes){
                    lista.push(element);
                }
            }
        });

        return lista;
    }

}