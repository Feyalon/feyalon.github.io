import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  sec1: boolean = false
  sec2: boolean = false
  sec3: boolean = false
  istrue1(){
    this.sec1 = true
    this.sec3 = false
    this.sec2 = false
  }
  istrue2(){
    this.sec1 = false
    this.sec3 = false
    this.sec2 = true

  }
  istrue3(){
    this.sec1 = false
    this.sec3 = true
    this.sec2 = false

  }
  ngOnInit(): void {
  }

}
