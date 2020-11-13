import Usuario from "./Usuario.js"

export default class Cliente extends Usuario{

    constructor(id, nombre, apellido1, apellido2, dni, nTarjetaCredito, tipoAbono, email, nPlaza, vehiculo){
        super(id, nombre, apellido1, apellido2);
        this.vehiculo = vehiculo;
        this.dni = dni;
        this.nTarjetaCredito = nTarjetaCredito;
        this.tipoAbono = tipoAbono;
        this.nPlaza = nPlaza;
        this.email = email;
        this.nCobros = 1;
        this.fUltimoCobro = new Date();
        this.activo = true;
    }

    get getId(){
        return this.id;
    }

    get getNombre(){
        return this.nombre;
    }

    get getApellido1(){
        return this.apellido1;
    }

    get getApellido2(){
        return this.apellido2;
    }

    get getDni(){
        return this.dni;
    }

    get getNTarjetaCredito(){
        return this.nTarjetaCredito;
    }

    get getTipoAbono(){
        return this.tipoAbono;
    }

    get getEmail(){
        return this.email;
    }

    get getNPlaza(){
        return this.nPlaza;
    }

    get getVehiculo(){
        return this.vehiculo;
    }

    get getNCobros(){
        return this.nCobros;
    }

    get getFUltimoCobro(){
        return this.fUltimoCobro;
    }

    get isActivo(){
        return this.isActivo;
    }

    setId(newId){
        this.id = newId;
    }

    setNPlaza(newNPlaza){
        this.nPlaza = newNPlaza;
    }

    setNombre(newNombre){
        this.nombre = newNombre;
    }

    setApellido1(newApellido){
        this.apellido1 = newApellido;
    }

    setApellido2(newApellido){
        this.apellido2 = newApellido;
    }

    setNTarjetaCredito(n){
        this.nTarjetaCredito = n;
    }

    setTipoAbono(n){
        this.tipoAbono = n;
    }

    setEmail(n){
        this.Email = n;
    }

    setVehiculo(v1){
        this.vehiculo = v1;
    }

    setNCobros(newNCobro){
        this.nCobros = newNCobro;
    }

    setFUltimoCobro(newFecha){
        this.fUltimoCobro = newFecha;
    }

    setActivo(estado){
        this.activo = estado;
    }

}