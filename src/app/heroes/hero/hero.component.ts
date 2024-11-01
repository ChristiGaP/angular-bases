import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public h1: string = 'Titulo';
  public name: string = 'christian';
  public age: number = 45;

  //Esto es una propiedad, para llamarla no hacen falta parentesis
  get capitalizedName():string{
    return this.name.toUpperCase()
  }

  //Esto es un metodo, para llamarla hacen falta parentesis
  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero(): string {
    return this.name = 'Pedro';
  }

  changeAge(): number {
    return this.age = 20;
  }


}
