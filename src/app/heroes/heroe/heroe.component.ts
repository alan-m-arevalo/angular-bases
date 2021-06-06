import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
})
export class HeroeComponent
{
    name: string = 'Iron man';
    age: number = 45;

    getName(): string
    {
        return `${this.name} - ${this.age}`;
    }
    
    get nameUpper(): string
    {
        return this.name.toUpperCase();
    }

    changeHeroeName(): void
    {
        if(this.name === 'Iron man')
            this.name = "Spider-Man";
        else this.name = "Iron man";
    }

    changeAge(): void
    {
        if(this.name.includes('Iron man')) this.age = 45;
        else this.age = 20;
    }
}