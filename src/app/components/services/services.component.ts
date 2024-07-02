import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public result: any = [];
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getData().subscribe((res:any) => {
     this.result[0] = res;
    })
  }

 

}
