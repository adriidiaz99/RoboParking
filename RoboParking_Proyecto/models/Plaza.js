import Vehiculo from "./Vehiculo.js";

export default class Plaza{

    constructor(nPlaza, cliente, pin, estado){
        this.nPlaza = nPlaza;
        this.vehiculo = new Vehiculo(0, "", "", 0, "");
        this.cliente = cliente;
        this.pin = pin;
        this.estado = estado;
    }

    get getNPlaza(){
        return this.nPlaza;
    }

    get getVehiculo(){
        return this.vehiculo;
    }

    get getCliente(){
        return this.cliente;
    }

    get getPin(){
        return this.pin;
    }

    get getEstado(){
        return this.estado;
    }

    setNPlaza(newNPlaza){
        this.nPlaza = newNPlaza;
    }

    setVehiculo(newVehiculo){
        this.vehiculo = newVehiculo;
    }

    setCliente(newCliente){
        this.cliente = newCliente;
    }

    setPin(newPin){
        this.pin = newPin;
    }

    setEstado(newEstado){
        this.estado = newEstado;
    }



}