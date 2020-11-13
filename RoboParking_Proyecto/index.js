import * as readline from "readline-sync";
import Administrador from "./models/Administrador.js";
import Cobro from "./models/Cobro.js";
import Motocicleta from "./models/Motocicleta.js";
import Turismo from "./models/Turismo.js";
import Caravana from "./models/Caravana.js";
import Ticket from "./models/Ticket.js";
import Plaza from "./models/Plaza.js";
import Vehiculo from "./models/Vehiculo.js";
import Cliente from "./models/Cliente.js";
import Usuario from "./models/Usuario.js";

import UsuarioRepository from "./repository/UsuarioRepository.js";
import VehiculoRepository from "./repository/VehiculoRepository.js";
import TicketRepository from "./repository/TicketRepository.js";
import PlazaRepository from "./repository/PlazaRepository.js";
import CobroRepository from "./repository/CobroRepository.js";

import UsuarioService from "./service/UsuarioService.js";
import VehiculoService from "./service/VehiculoService.js";
import TicketService from "./service/TicketService.js";
import PlazaService from "./service/PlazaService.js";
import CobroService from "./service/CobroService.js";

let sVehiculo = new VehiculoService(new VehiculoRepository());
let sUsuario = new UsuarioService(new UsuarioRepository());
let sTicket = new TicketService(new TicketRepository());
let sPlaza = new PlazaService(new PlazaRepository(), sTicket, sUsuario);
let sCobro = new CobroService(new CobroRepository());
let nombre = "", matricula = "", combustible= 0, duenyo="", nPlaza = 0, nPuertas = 0, pin = 0;
let nombreUsuario = "", apellido1 = "", apellido2 = "", password="", dni="", nTarjetaCredito="", tipoAbono="", email = "";
let opt = 0, opt1 = 0;
let fechaSalida = new Date();

let vehiculo = new Vehiculo();

for (let i = 0; i < 45; i++){
    sPlaza.agregarPlaza(new Plaza(i, "", 0, "Libre"));
}

console.log(sPlaza.encontrarTodos().length);
console.log(sPlaza.parking.parking[2].getNPlaza);

do{
    console.log(" RoboParking ");
    console.log("-------------\n\n");
    console.log("Bienvenido al parking mejor posicionado en Sevilla\n\n"
    +"[1] Depositar vehiculo\n[2] Retirar vehiculo\n[3] Agregar abonado\n[4] Depositar vehiculo abonado\n[5] ");

    switch(opt = readline.questionInt()){
        case 1:
            sPlaza.mostrarPlazasLibres();
            console.log("\n\n[1] Motocicleta\n[2] Turismo\n[3] Caravana");
            switch(opt1 = readline.questionInt()){
                case 1:
                    nombre = readline.question("¿Qué motocicleta es?");
                    matricula = readline.question("Matricula:");
                    combustible= readline.questionInt("Cantidad de combustible?");
                    duenyo = readline.question("Nombre del dueño: ");
                    if(sPlaza.aparcarVehiculo(new Motocicleta(0, nombre, matricula, combustible, duenyo), nPlaza = readline.questionInt("En qué plaza desea aparcarlo?"))){
                        sTicket.agregarTicket(new Ticket(0, nPlaza, matricula, sPlaza.encontrarPorNPlaza(nPlaza).getPin, duenyo));
                        console.log("\nMoto aparcada!\n")
                        console.log("\nImprimiento ticket...\n\n");
                        sPlaza.servicioTicket.agregarTicket(new Ticket(0, nPlaza, matricula, sPlaza.encontrarPorNPlaza(nPlaza).getPin, duenyo));
                        sPlaza.imprimirTicketMasReciente(nPlaza, matricula);
                        console.log("\n\n");
                    }
                    else{
                        console.log("Plaza ocupada");
                    }

                    break;
                case 2:

                    nombre = readline.question("¿Qué coche es?");
                    matricula = readline.question("Matricula:");
                    combustible= readline.questionInt("Cantidad de combustible?");
                    duenyo = readline.question("Nombre del dueño: ");
                    nPuertas = readline.questionInt("Numero de puertas: ");
                    if(sPlaza.aparcarVehiculo(new Turismo(0, nombre, matricula, combustible, duenyo, nPuertas), nPlaza = readline.questionInt("En qué plaza desea aparcarlo?"))){
                        sTicket.agregarTicket(new Ticket(0, nPlaza, matricula, sPlaza.encontrarPorNPlaza(nPlaza).getPin, duenyo));
                        console.log("¡Coche aparcado!\n")
                        console.log("\nImprimiento ticket...\n\n");
                        sPlaza.imprimirTicketMasReciente(nPlaza, matricula);
                        console.log("\n\n");
                    }
                    else{
                        console.log("Plaza ocupada\n\n");
                    }

                    break;
                case 3:
                    nombre = readline.question("¿Qué caravana es?");
                    matricula = readline.question("Matricula:");
                    combustible= readline.questionInt("Cantidad de combustible?");
                    duenyo = readline.question("Nombre del dueño: ");
                    if(sPlaza.aparcarVehiculo(new Caravana(0, nombre, matricula, combustible, duenyo), nPlaza = readline.questionInt("En qué plaza desea aparcarlo?"))){
                        sTicket.agregarTicket(new Ticket(0, nPlaza, matricula, sPlaza.encontrarPorNPlaza(nPlaza).getPin, duenyo));
                        console.log("¡Caravana aparcada!\n")
                        console.log("\nImprimiento ticket...\n\n");
                        sPlaza.imprimirTicketMasReciente(nPlaza, matricula);
                        console.log("\n\n");
                    }
                    else{
                        console.log("Plaza ocupada");
                        console.log("\n\n");
                    }

                    break;
            }

            break;
        case 2:

            matricula = readline.question("Matricula:");
            nPlaza = readline.questionInt("En qué plaza desea aparcarlo?");
            pin = readline.questionInt("Pin: ");
            if(sPlaza.comprobarRetiradaVehiculo(matricula,nPlaza, pin)){
                fechaSalida = new Date(2028,11,17);
                console.log("Perfecto\n");
                console.log("La fecha de salida es: " +fechaSalida +"\n");
                console.log("El total del importe a pagar es " +sPlaza.totalAPagar(nPlaza, matricula, fechaSalida) +"\n");
                console.log("¡Muchas gracias!\n\n");
                sCobro.agregarCobro(new Cobro(0, nPlaza, matricula, +sPlaza.totalAPagar(nPlaza, matricula, fechaSalida)));
                sPlaza.retirarVehiculo(nPlaza);
            } else {
                console.log("Mal");
            }

            break;
        case 3:
            sPlaza.mostrarPlazasLibres();
            console.log("\n\nNuevo Abonado\n");
            nombreUsuario = readline.question("Introduzca su nombre");
            apellido1 = readline.question("Introduzca su primer apellido");
            apellido2 = readline.question("Introduzca su segundo apellido");
            dni = readline.question("Introduzca su segundo dni");
            nTarjetaCredito = readline.question("Introduzca su número de tarjeta de crédito");
            tipoAbono = readline.question("¿Qué tipo de abono desea?");
            email = readline.question("Introduzca su email");
            
            console.log("\n Ahora su vehiculo");
            console.log("\n\n[1] Motocicleta\n[2] Turismo\n[3] Caravana");

            switch(opt1 = readline.questionInt()){
                case 1:
                    nombre = readline.question("¿Qué motocicleta es?");
                    matricula = readline.question("Matricula:");
                    combustible= readline.questionInt("Cantidad de combustible?");
                    duenyo = nombreUsuario;
                    if(sPlaza.aparcarVehiculo(vehiculo = new Motocicleta(0, nombre, matricula, combustible, duenyo), nPlaza = readline.questionInt("En qué plaza desea aparcarlo?"))){
                        sUsuario.agregarUsuario(new Cliente(0, nombreUsuario, apellido1, apellido1, dni, nTarjetaCredito, tipoAbono, email, nPlaza, vehiculo));
                        sUsuario.imprimirAbono(sPlaza.encontrarPorNPlaza(nPlaza), sUsuario.encontrarPorDni(dni));
                        console.log("\n\n");
                    }
                    else{
                        console.log("Plaza ocupada");
                    }

                    break;
                case 2:

                    nombre = readline.question("¿Qué coche es?");
                    matricula = readline.question("Matricula:");
                    combustible= readline.questionInt("Cantidad de combustible?");
                    duenyo = nombreUsuario;
                    nPuertas = readline.questionInt("Numero de puertas: ");
                    if(sPlaza.aparcarVehiculo(vehiculo = new Turismo(0, nombre, matricula, combustible, duenyo, nPuertas), nPlaza = readline.questionInt("En qué plaza desea aparcarlo?"))){
                        sTicket.agregarTicket(new Ticket(0, nPlaza, matricula, sPlaza.encontrarPorNPlaza(nPlaza).getPin, duenyo));
                        console.log("¡Coche aparcado!\n")
                        console.log("\nImprimiendo abono...\n\n");
                        sUsuario.agregarUsuario(new Cliente(0, nombreUsuario, apellido1, apellido1, dni, nTarjetaCredito, tipoAbono, email, nPlaza, vehiculo));
                        sUsuario.imprimirAbono(sPlaza.encontrarPorNPlaza(nPlaza), sUsuario.encontrarPorDni(dni));
                    }
                    else{
                        console.log("Plaza ocupada\n\n");
                    }

                    break;
                case 3:
                    nombre = readline.question("¿Qué caravana es?");
                    matricula = readline.question("Matricula:");
                    combustible= readline.questionInt("Cantidad de combustible?");
                    duenyo = nombreUsuario;
                    if(sPlaza.aparcarVehiculo(vehiculo = new Caravana(0, nombre, matricula, combustible, duenyo), nPlaza = readline.questionInt("En qué plaza desea aparcarlo?"))){
                        sTicket.agregarTicket(new Ticket(0, nPlaza, matricula, sPlaza.encontrarPorNPlaza(nPlaza).getPin, duenyo));
                        console.log("¡Caravana aparcada!\n")
                        console.log("\nImprimiendo abono...\n\n");
                        sUsuario.agregarUsuario(new Cliente(0, nombreUsuario, apellido1, apellido1, dni, nTarjetaCredito, tipoAbono, email, nPlaza, vehiculo));
                        sUsuario.imprimirAbono(sPlaza.encontrarPorNPlaza(nPlaza), sUsuario.encontrarPorDni(dni));
                    }
                    else{
                        console.log("Plaza ocupada");
                        console.log("\n\n");
                    }

                    break;
            }


        break;

        case 4:
            console.log("Aparcar coche abonado");
            dni = readline.question("Introduzca su dni");
            matricula = readline.question("Introduzca su matricula");
            if(sPlaza.aparcarVehiculoCliente(matricula, dni)){
                console.log("Hasta luego, que disfrute del paseo");
            } else {
                console.log("No se ha podido retirar el coche");
            }
        break;

        case 5:
            console.log("Retirar coche abonado")
            pin= readline.questionInt("Introduzca su pin");
            nPlaza= readline.questionInt("Número de la plaza");
            matricula = readline.question("Introduzca su matricula");
            if(sPlaza.retirarVehiculoAbonado(matricula, nPlaza, pin)){
                console.log("Muy bien");
            } else{
                console.log("Mal");
            }

        break;
        
    }

}while(opt!= 0);