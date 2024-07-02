import { Component, OnInit } from '@angular/core';
import { DataService } from './dataService'; // Adjust the path as necessary

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  public fullName: string = "Roberts Junior";
  public isDisabled: boolean = false;
  public userName: any = '';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.changeFullName(this.fullName);
  }

  alertData() {
    alert('This is click event binding example.')
  }
}
