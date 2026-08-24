import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Routes {
  text: string;
  route: string;
}

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})

export class Home implements OnInit {

  private router = inject(Router)

  routes: Routes[] = [
    {
      text: "¿Dónde he estado?",
      route: "1"
    },
    {
      text: "¿Dónde estoy ahora?",
      route: "2"
    },
    {
      text: "¿A dónde quiero llegar?",
      route: "3"
    },
    {
      text: "¿Cómo llegaré ahí?",
      route: "4"
    },
    {
      text: "¿Cómo sabré si he llegado?",
      route: "5"
    },
    {
      text: "¿Qué me apasiona?",
      route: "6"
    },
    {
      text: "¿En qué soy el mejor?",
      route: "7"
    },
    {
      text: "¿Cómo voy a cambiar el mundo?",
      route: "8"
    },
    {
      text: "¿Cuál es mi filosofía o teoría para vivir?",
      route: "9"
    },
    {
      text: "¿A quién(es) quiero cambiarle(s) la vida?",
      route: "10"
    },
  ]

  ngOnInit() {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  redirect(route: string) {
    this.router.navigate([route])
  }

}
