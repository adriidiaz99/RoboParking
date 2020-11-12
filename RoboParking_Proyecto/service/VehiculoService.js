export default class VehiculoService{

    constructor(vehiculoRepository){
        this.vehiculoRepository = vehiculoRepository;
    }

    agregarVehiculo(v1){
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

}