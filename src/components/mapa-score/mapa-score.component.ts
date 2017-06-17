import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'sg-mapa-score',
    templateUrl: './mapa-score.component.html',
    styles: [] 
})
export class MapaScoreComponent implements OnInit{
    @Input() dados: any;

    ngOnInit(): void {
    }
    
    constructor(){

    }



    
}