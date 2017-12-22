import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  myRouter: any = `
  <nav class="nav">
    <a routerLink="/main-page" routerLinkActive="active">Главная</a>
    <a routerLink="/private-office" routerLinkActive="active">Личный кабинет</a>
    <a routerLink="/private-office/drone-control" routerLinkActive="active">Управление</a>
    <a routerLink="/private-office/drone-route" routerLinkActive="active">Маршрут</a>
    <a routerLink="/private-office/measurements" routerLinkActive="active">Измерения</a>
    <a routerLink="/email-report" routerLinkActive="active">Отчёт</a>
  </nav>
  <router-outlet></router-outlet>
  `;

  constructor(
    private router: Router) {
  }

  ngOnInit(): void { }

}
