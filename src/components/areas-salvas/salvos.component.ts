import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'sg-salvos',
    templateUrl: './salvos.component.html',
    styles: [] 
})
export class AreasSalvasComponent implements OnInit{
    @Input() dados: any;

    ngOnInit(): void {
    }
    
    constructor(){
    }



    
}