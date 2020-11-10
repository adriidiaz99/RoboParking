class Plaza{

    constructor(nPlaza, vehiculo, cliente, pin, ocupado){
        this.nPlaza = nPlaza;
        this.vehiculo = vehiculo;
        this.cliente = cliente;
        this.pin = pin;
        this.ocupado = ocupado;
    }

    get nPlaza(){
        return this.nPlaza;
    }

    get vehiculo(){
        return this.vehiculo;
    }

    get cliente(){
        return this.cliente;
    }

    get pin(){
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