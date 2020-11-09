class VehiculoService{

    constructor(){
        this.vehiculoRepository = new VehiculoRepository;
    }

    agregarVehiculo(v1){

        let comprobar = false;

        this.vehiculoRepository.agregarVehiculo(v1);
    }

    eliminarVehiculo(v1){
        this.vehiculoRepository.eliminarVehiculo(v1);
    }

    editarVehiculo(v1){
        this.vehiculoRepository.editarVehiculo(v1);
    }

    encontrarPorId(id){
        return this.vehiculoRepository.encontrarPorId(id);
    }

    encontrarTodos(){
        return this.vehiculoRepository.encontrarTodos();
    }

    comprobarMotocicletas(){

        let contador = 0;

        for (const vehiculo of this.encontrarTodos) {
            if(vehiculo instanceof Motocicleta)
                contador++;
        }

        if(contador <= 15)
            return false;

        return true;
    }

    comprobarTrurismos(){

        let contador = 0;

        for (const vehiculo of this.encontrarTodos) {
            if(vehiculo instanceof Turismo)
                contador++;
        }

        if(contador <= 15)
            return false;

        return true;
    }

    comprobarCaravanas(){

        let contador = 0;

        for (const vehiculo of this.encontrarTodos) {
            if(vehiculo instanceof Caravana)
                contador++;
        }

        if(contador <= 15)
            return false;

        return true;
    }

}