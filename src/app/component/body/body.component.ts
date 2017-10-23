import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }
  Employees: Employee[];
  ngOnInit() {
    this.Employees = [
      {Name: 'Jaggesher' , Age: 23 , About: 'Student'},
      {Name: 'Rakul Preet' , Age: 28 , About: 'Tamil Actress'},
      {Name: 'Kajal Agarwal', Age: 32, About: 'Tamil Actress'}
    ];
  }
}

class Employee {
  Name: string;
  Age: number;
  About: string;
}
