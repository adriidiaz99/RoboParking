class ParkingService{

    constructor(){
        this.parkingRepository = new ParkingRepository;
    }

    agregarParking(v1){
        this.parkingRepository.agregarParking(v1);
    }

    eliminarParking(v1){
        this.parkingRepository.eliminarParking(v1);
    }

    editarParking(v1){
        this.parkingRepository.editarParking(v1);
    }

    encontrarPorId(id){
        return this.parkingRepository.encontrarPorId(id);
    }

    encontrarTodos(){
        return this.parkingRepository.encontrarTodos();
    }
}