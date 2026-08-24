import { Component, inject, OnInit } from '@angular/core';
import { Footer } from "../footer/footer";
import { Router } from '@angular/router';

@Component({
  imports: [Footer],
  selector: 'app-family',
  styleUrl: './past.scss',
  templateUrl: './past.html',
})
export class Past implements OnInit{

  private router = inject(Router)

  ngOnInit() {
    document.documentElement.setAttribute('data-theme', 'dark');
  }   
}
