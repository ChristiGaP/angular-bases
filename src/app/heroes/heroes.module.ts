import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";



@NgModule({

  exports: [
  //Estoy exportando estos componentes porque necesito que se vean fuera del modulo

    HeroComponent,
    ListComponent,
  ],


  declarations: [
    HeroComponent,
    ListComponent
  ],

  imports: [
    CommonModule
  ]


})



export class HeroesModule{
}
