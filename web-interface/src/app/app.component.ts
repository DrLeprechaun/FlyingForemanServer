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
    `<nav class="nav">
    <div>
    <a routerLink="/main-page" routerLinkActive="active" role="button">Главная</a>
    </div>
    <div class="dropdown">
     <a routerLink="/private-office" routerLinkActive="active" role="button">Личный кабинет</a>
     <div class="dropdown-content">
       <a class="sublink" routerLink="/private-office/drone-control" routerLinkActive="active">Управление</a>
       <a class="sublink" routerLink="/private-office/drone-route" routerLinkActive="active">Маршрут</a>
       <a class="sublink" routerLink="/private-office/measurements" routerLinkActive="active">Измерения</a>
     </div>
    </div>
    <a routerLink="/email-report" routerLinkActive="active" role="button">Отчёт</a>
      </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'АКВР';
}
