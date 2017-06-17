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

    dadosPoliciais(){
        return [
            {
                icone: "car",
                descricao: "Acidentes Automotivos",
                porcentagem: 45
            },
             {
                icone: "car",
                descricao: "Acidentes Automotivos",
                porcentagem: 30
            },
             {
                icone: "car",
                descricao: "Acidentes Automotivos",
                porcentagem: 20
            },
             {
                icone: "car",
                descricao: "Acidentes Automotivos",
                porcentagem: 80
            }
        ];
    }
}