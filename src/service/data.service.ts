import { Injectable  } from '@angular/core';

@Injectable()
export class DataService{
    salvos(){
        return [
            {
                nomeCidade: "Lago Norte",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-lago-norte.png"
            },
            {
                nomeCidade: "Lago Norte",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-lago-norte.png"
            },
            {
                nomeCidade: "Lago Norte",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-lago-norte.png"
            },
            {
                nomeCidade: "Lago Norte",
                outrasInfo: "Outras informações importantes.",
                img: "./../assets/img/mapa-pequeno-lago-norte.png"
            }
        ];
    }
}