import Motocicleta from "../models/Motocicleta.js";
import Turismo from "../models/Turismo.js";
import Caravana from "../models/Caravana.js";
import PlazaRepository from "../repository/PlazaRepository.js"

export default class PlazaService{

    constructor(parking, servicioTicket){
        this.parking = parking;
        this.servicioTicket = servicioTicket;
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

            this.parking.encontrarPorNPlaza(nPlaza).setVehiculo(v1);
            this.parking.encontrarPorNPlaza(nPlaza).setPin(Math.round(Math.random() * (999999 - 100000) + 100000), 0);
            return true;

        }

        return false;
    }

    retirarVehiculo(matricula, numeroPlaza, pinIntroducido){

        let plaza = this.encontrarPorNPlaza(numeroPlaza);

        if(plaza !== null){
            console.log(plaza.getVehiculo.getMatricula);
            if(plaza.getVehiculo.getMatricula === matricula){
                if(plaza.getPin === pinIntroducido){
                    this.encontrarPorNPlaza(numeroPlaza).setVehiculo(null);
                    return true;
                }
            }
        } else{
            return false;
        }
        
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

}