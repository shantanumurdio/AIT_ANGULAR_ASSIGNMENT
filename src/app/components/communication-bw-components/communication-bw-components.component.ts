import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-communication-bw-components',
  templateUrl: './communication-bw-components.component.html',
  styleUrls: ['./communication-bw-components.component.scss']
})
export class CommunicationBwComponentsComponent implements OnInit {

  @Input() inputFromParent: any;

  constructor() { }

  ngOnInit(): void {
  }

}
