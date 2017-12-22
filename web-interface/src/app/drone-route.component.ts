import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'drone-route',
  templateUrl: './drone-route.component.html',
  styleUrls: ['./drone-route.component.css']
})
export class DroneRouteComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void { }

}
