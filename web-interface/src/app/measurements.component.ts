import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.css']
})
export class MeasurementsComponent implements OnInit {

  private  lineLength: number;

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
    this.lineLength = 0;
  }

}
