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
let sPlaza = new PlazaService(new PlazaRepository(), sTicket);
let sCobro = new CobroService(new CobroRepository());
let nombre = "", matricula = "", combustible= 0, duenyo="", nPlaza = 0, nPuertas = 0, pin = 0;
let opt = 0, opt1 = 0;

let h1 = new Vehiculo(2, "Adri", "Diaz", "Diesel", "paco");

console.log(h1.getId);

for (let i = 0; i < 45; i++){
    sPlaza.agregarPlaza(new Plaza(i, "", 0, false));
}

console.log(sPlaza.encontrarTodos().length);
console.log(sPlaza.parking.parking[2].getNPlaza);

do{
    console.log(" RoboParking ");
    console.log("-------------\n\n");
    console.log("Bienvenido al parking mejor posicionado en Sevilla\n\n"
    +"[1] Depositar vehiculo\n[2] Retirar vehiculo\n");

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
            if(sPlaza.retirarVehiculo(matricula,nPlaza, pin)){
                console.log("Perfecto");
            } else {
                console.log("Mal");
            }

            break;
        case 3:
            break;
    }

}while(opt!= 0);