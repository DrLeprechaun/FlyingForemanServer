import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap';

@Component({
  selector: 'email-report',
  templateUrl: './email-report.component.html',
  styleUrls: ['./email-report.component.css']
})
export class EmailReportComponent implements OnInit {

  constructor(
    private router: Router) {
  }

  ngOnInit(): void { }

}
