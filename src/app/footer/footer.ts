import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Page {
  tooltip: string;
  route: string;
}

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer implements OnInit {
  @Input() previous!: string;

  pages: Page[] = [
    {
      tooltip: "¿Dónde he estado?",
      route: "1",
    },
    {
      tooltip: "¿Dónde estoy ahora?",
      route: "2",
    },
    {
      tooltip: "¿A dónde quiero llegar?",
      route: "3",
    },
    {
      tooltip: "¿Cómo llegaré ahí?",
      route: "4",
    },
    {
      tooltip: "¿Cómo sabré si he llegado?",
      route: "5",
    },
    {
      tooltip: "¿Qué me apasiona?",
      route: "6",
    },
    {
      tooltip: "¿En qué soy el mejor?",
      route: "7",
    },
    {
      tooltip: " ¿Cómo voy a cambiar el mundo?",
      route: "8",
    },
    {
      tooltip: "¿Cuál es mi filosofía o teoría para vivir?",
      route: "9",
    },
    {
      tooltip: " ¿A quién(es) quiero cambiarle(s) la vida?",
      route: "10",
    },
  ]

  private router = inject(Router)
  public current;

  ngOnInit() {
    this.current = this.router.url.substring(1);
  }

  constructor() {
    this.current = this.router.url.substring(1);
  }

  onClick(event: Event, page: string) {
    const target = event.currentTarget as HTMLElement;

    const text = document.getElementById("tooltiptext")
    if (text) {
      text.textContent = ""
    }

    const next = document.getElementById(String(Number(page)+1))
    const current = document.getElementById(page)
    const arrow = target.querySelector('.arrow') as HTMLElement | null;
    
    const nextCoordinates = this.getOffset(next)
    const currentCoordinates = this.getOffset(current)
    console.log(this.current)
    // target.classList.remove('clicked');
    // void target.offsetWidth;
    // target.classList.add('clicked');

    let offset = 0;
    if (nextCoordinates?.x && currentCoordinates?.x) {
      offset = - (currentCoordinates?.x - nextCoordinates?.x)
    }

    if (arrow) {
      arrow.style.left = `calc(50% + ${offset}px)`;
    }

    // target.addEventListener(
    //   'transitionend',
    //   () => this.router.navigate(['2']),
    //   { once: true }
    // );
  }

  getOffset(el: HTMLElement | null) {
    if (!el) return;

    const rect = el.getBoundingClientRect();
    return {
      x: rect.left + window.scrollX,
      y: rect.top + window.scrollY
    };
  }

  isCurrent(page: string) {
    if (page.localeCompare(this.current)) {
      return "current"
    } else {
      return ""
    }
  }
}
