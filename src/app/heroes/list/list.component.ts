import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  constructor() { }

  heroes: string[] = ['Spider-Man','Hulk', 'Thor','Cap']
  deletedHeroes: string[] = [];

  deleteHeroe(): void
  {
    const deletedHeroe = this.heroes.shift();
    if(deletedHeroe)
    {
      console.log('Deleting heroe');
      this.deletedHeroes.push(deletedHeroe);
    }
    else console.log('Nothing to delete');
    
  }

  restoreHeroes(): void 
  {
    this.heroes = this.deletedHeroes;
    this.deletedHeroes = [];
  }

  get hasHeroes(): boolean
  {
    return this.heroes.length > 0;
  }

  get hasDeletedHeroes(): boolean
  {
    return this.deletedHeroes.length > 0;
  }

}
