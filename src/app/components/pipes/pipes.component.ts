// src/app/pipes/pipes.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-binding/dataService'; // Adjust the path as necessary

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  date = new Date();
  price = 10000;
  title = 'abc def hij'; 
  lowercaseTitle = 'AIT GLOBAL INC.';
  number = 2.5464645545656;
  fullName: string = ''; 

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.currentFullName.subscribe(name => this.fullName = name);
    console.log(this.date);
  }
}
