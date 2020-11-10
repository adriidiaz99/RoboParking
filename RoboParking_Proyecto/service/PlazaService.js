class ParkingService{

    constructor(parking){
        this.parking = parking;
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
            if(this.comprobarTrurismos())
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

        if(comprobar){

            this.parking.encontrarPorNPlaza(nPlaza).setVehiculo(v1);
            this.parking.encontrarPorNPlaza(nPlaza).setPin(Math.random() * (999999 - 100000) + 100000);

        }
    }

    comprobarMotocicletas(){
        let plazasTotal = 15;

        if(this.contarMotocicletas() <= plazasTotal)
            return false;

        return true;
    }

    comprobarTrurismos(){
        plazasTotal = 15;

        if(this.contarTurismos() <= plazasTotal)
            return false;

        return true;
    }

    comprobarCaravanas(){
        let plazasTotal = 15;

        if(this.contarCaravanas() <= plazasTotal)
            return false;

        return true;
    }

    contarTurismos(){
        let contador = 0;

        for (const plaza of this.encontrarTodos()) {
            if(plaza.vehiculo() instanceof Turismo)
                contador++;
        }

        return contador;

    }


    contarCaravanas(){
        let contador = 0;

        for (const plaza of this.encontrarTodos()) {
            if(plaza.vehiculo() instanceof Caravana)
                contador++;
        }

        return contador;

    }

    contarMotocicletas(){
        let contador = 0;

        for (const plaza of this.encontrarTodos()) {
            if(plaza.vehiculo() instanceof Motocicleta)
                contador++;
        }

        return contador;

    }

    mostrarPlazasLibres(){
        let plazasTotal = 15; 

        console.log("Plazas libres");
        console.log("Motocicletas: " +(plazasTotal - this.contarMotocicletas()));
        console.log("Turismos: " +(plazasTotal - this.contarTurismos()));
        console.log("Turismos: " +(plazasTotal - this.contarTurismos()));
    }

}