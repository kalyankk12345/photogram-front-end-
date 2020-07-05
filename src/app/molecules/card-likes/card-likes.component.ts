import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-likes',
  templateUrl: './card-likes.component.html',
  styleUrls: ['./card-likes.component.css']
})
export class CardLikesComponent implements OnInit {

  constructor() { }
  @Input() likes:string;
  ngOnInit() {
  }

}
