import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'sg-dicas',
    templateUrl: './dicas.component.html',
    styles: [] 
})
export class DicasComponent implements OnInit{
    @Input() dados: any;

    ngOnInit(): void {
    }
    
    constructor(){

    }



    
}