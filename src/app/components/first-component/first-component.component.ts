import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  name: string = "Alan"
  age: number = 22
  job = "Dev"
  hobbies = ["Correr", "Jogar", "Estudar"]
  car = {
    name: "Polo",
    year: 2019,
  }

}
