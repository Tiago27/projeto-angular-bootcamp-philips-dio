import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ambiente-angular';

  count = 0;

  pessoas = [
    {
      nome: "Tadeu",
      sobrenome: "Shimit"
    },
     {
      nome: "Mario",
      sobrenome: "Brothers"
    },
    {
      nome: "Sonic",
      sobrenome: "& Tales"
    }
  ]

  constructor() { }

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.count++;
      if (this.count === 10) {
        clearInterval(interval)
      }
    }, 1000)
  }
}
