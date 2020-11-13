import Motocicleta from "../models/Motocicleta.js";
import Turismo from "../models/Turismo.js";
import Caravana from "../models/Caravana.js";
import PlazaRepository from "../repository/PlazaRepository.js"

export default class PlazaService{

    constructor(parking, servicioTicket, servicioUsuario, servicioVehiculo){
        this.parking = parking;
        this.servicioTicket = servicioTicket;
        this.servicioUsuario = servicioUsuario;
        this.servicioVehiculo = servicioVehiculo;
    }

    agregarPlaza(v1){
        this.parking.agregarPlaza(v1);
    }

    eliminarPlaza(v1){
        this.parking.eliminarPlaza(v1);
    }

    editarPlaza(v1){
        this.parking.editarPlaza(v1);
    }

    encontrarPorNPlaza(nPlaza){
        return this.parking.encontrarPorNPlaza(nPlaza);
    }

    encontrarTodos(){
        return this.parking.encontrarTodos();
    }

    aparcarVehiculoCliente(matricula, dni){
        
        let cliente = this.servicioUsuario.encontrarPorDni(dni);

        if(matricula === cliente.getVehiculo.getMatricula){
            console.log(cliente.getVehiculo.getId);
            if(this.encontrarPorNPlaza(cliente.getNPlaza).getVehiculo === null){

                this.parking.encontrarPorNPlaza(cliente.getNPlaza).setVehiculo(cliente.getVehiculo);
                return true;
    
            }
        }

        return false;
    }

    aparcarVehiculo(v1, nPlaza){
        let comprobar = false;

        if(v1 instanceof Turismo){
            if(this.comprobarTurismos())
                comprobar = true;
        }

        if(v1 instanceof Caravana){
            if(this.comprobarCaravanas())
                comprobar = true;
        }

        if(v1 instanceof Motocicleta){
            if(this.comprobarMotocicletas())
                comprobar = true;
        }

        if(comprobar && this.encontrarPorNPlaza(nPlaza).getVehiculo.getId === 0){

            this.servicioVehiculo.agregarVehiculo(v1);
            this.parking.encontrarPorNPlaza(nPlaza).setVehiculo(v1);
            this.parking.encontrarPorNPlaza(nPlaza).setPin(Math.round(Math.random() * (999999 - 100000) + 100000), 0);
            return true;

        }

        return false;
    }

    comprobarRetiradaVehiculo(matricula, numeroPlaza, pinIntroducido){

        let plaza = this.encontrarPorNPlaza(numeroPlaza);

        if(plaza !== null){
            console.log(plaza.getVehiculo.getMatricula);
            if(plaza.getVehiculo.getMatricula === matricula){
                if(plaza.getPin === pinIntroducido){
                    return true;
                }
            }
        } else{
            return false;
        }
        
    }

    retirarVehiculoAbonado(matricula, numeroPlaza, pinIntroducido){

        let plaza = this.encontrarPorNPlaza(numeroPlaza);

        if(plaza !== null){
            console.log("a");
            if(plaza.getVehiculo.getMatricula === matricula){
                console.log("b");
                console.log(plaza.getPin);
                console.log(pinIntroducido);
                if(plaza.getPin === pinIntroducido){
                    console.log("A");
                    this.retirarVehiculo(numeroPlaza);
                    return true;
                }
            }
        }

        return false;
        
    }

    totalAPagar(nPlaza, matricula, fechaSalida){
        let plaza = this.encontrarPorNPlaza(nPlaza);
        let ticket = this.servicioTicket.encontrarTicketMasReciente(nPlaza, matricula);
        let minutoTurismo = 0.12, minutoMotocicletas = 0.08, minutoCaravana = 0.45;
        let miliSegundosDeposito = Date.parse(ticket.getFechaDeposito);
        let miliSegundosRetiro = Date.parse(fechaSalida);

        let resultado = Math.round((miliSegundosRetiro - miliSegundosDeposito)/60000, 0)+1;

        if(plaza.getVehiculo instanceof Turismo){
            resultado = resultado * minutoTurismo;
        }

        if(plaza.getVehiculo instanceof Caravana){
            resultado = resultado * minutoMotocicletas;
        }

        if(plaza.getVehiculo instanceof Motocicleta){
            resultado = resultado * minutoCaravana;
        }

        return resultado;


    }

    retirarVehiculo(numeroPlaza){
        this.encontrarPorNPlaza(numeroPlaza).setVehiculo(null);
    }

    comprobarMotocicletas(){
        let plazasTotal = 15;

        if(this.contarMotocicletas() >= plazasTotal)
            return false;

        return true;
    }

    comprobarTurismos(){
        let plazasTotal = 15;

        if(this.contarTurismos() >= plazasTotal)
            return false;

        return true;
    }

    comprobarCaravanas(){
        let plazasTotal = 15;

        if(this.contarCaravanas() >= plazasTotal)
            return false;

        return true;
    }

    contarTurismos(){
        let contador = 0;

        for (const plaza of this.encontrarTodos()) {
            if(plaza.getVehiculo instanceof Turismo)
                contador++;
        }

        return contador;

    }


    contarCaravanas(){
        let contador = 0;

        for (const plaza of this.encontrarTodos()) {
            if(plaza.getVehiculo instanceof Caravana)
                contador++;
        }

        return contador;

    }

    contarMotocicletas(){
        let contador = 0;

        for (const plaza of this.encontrarTodos()) {
            if(plaza.getVehiculo instanceof Motocicleta)
                contador++;
        }

        return contador;

    }

    mostrarPlazasLibres(){
        let plazasTotal = 15; 

        console.log("Plazas libres");
        console.log("Motocicletas: " +(plazasTotal - this.contarMotocicletas()));
        console.log("Turismos: " +(plazasTotal - this.contarTurismos()));
        console.log("Caravanas: " +(plazasTotal - this.contarCaravanas()));
    }

    imprimirTicketMasReciente(nPlaza, matricula){
        this.servicioTicket.imprimirTicket(this.servicioTicket.encontrarTicketMasReciente(nPlaza, matricula));
    }

    mostrarEstadoPlazas(){
        this.encontrarTodos().forEach(element => {
            console.log("Plaza Nº " +element.getNPlaza +" : " +element.getEstado);
        });
    }

}