import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'sg-dados-policia',
    templateUrl: './dados-policia.component.html',
    styles: [] 
})
export class DadosPoliciaComponent implements OnInit{
    @Input() dados: any;

    ngOnInit(): void {
    }
    
    constructor(){

    }



    
}