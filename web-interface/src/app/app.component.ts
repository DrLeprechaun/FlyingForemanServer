import { Component } from '@angular/core';

@Component({
  selector: 'my-root',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>`+
    /*<nav class="nav">
      <a routerLink="/main-page" routerLinkActive="active">Главная</a>
      <a routerLink="/private-office" routerLinkActive="active">Личный кабинет</a>
      <a routerLink="/private-office/drone-control" routerLinkActive="active">Управление</a>
      <a routerLink="/private-office/drone-route" routerLinkActive="active">Маршрут</a>
      <a routerLink="/private-office/measurements" routerLinkActive="active">Измерения</a>
      <a routerLink="/email-report" routerLinkActive="active">Отчёт</a>
    </nav>*/
    `<a class="btn btn-primary" routerLink="/main-page" routerLinkActive="active" role="button">Главная</a>
    <div class="dropdown">
     <a class="btn btn-primary" routerLink="/private-office" routerLinkActive="active" role="button">Личный кабинет</a>
     <div class="dropdown-content">
       <a routerLink="/private-office/drone-control" routerLinkActive="active">Управление</a>
       <a routerLink="/private-office/drone-route" routerLinkActive="active">Маршрут</a>
       <a routerLink="/private-office/measurements" routerLinkActive="active">Измерения</a>
     </div>
    </div>
    <a class="btn btn-primary" routerLink="/email-report" routerLinkActive="active" role="button">Отчёт</a>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'АКВР';
}
