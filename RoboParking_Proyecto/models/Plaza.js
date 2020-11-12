import Vehiculo from "./Vehiculo.js";

export default class Plaza{

    constructor(nPlaza, cliente, pin, ocupado){
        this.nPlaza = nPlaza;
        this.vehiculo = new Vehiculo(0, "", "", 0, "");
        this.cliente = cliente;
        this.pin = pin;
        this.ocupado = ocupado;
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

    get isOcupado(){
        return this.ocupado;
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

    setIsOcupado(estado){
        this.ocupado = estado;
    }



}