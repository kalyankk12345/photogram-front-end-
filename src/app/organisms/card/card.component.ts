import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() propic:string;
  @Input() proname:string;
  @Input() link:string;
  @Input() time:string;
  @Input() like:string;
  @Input() video:string;
  ngOnInit() {
  }

}
