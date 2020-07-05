import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.less']
})
export class CardHeaderComponent implements OnInit {

  constructor() { }
  @Input() link:string;
  @Input() name:string;
  @Input() hrs:string;
  ngOnInit() {
  }

}
