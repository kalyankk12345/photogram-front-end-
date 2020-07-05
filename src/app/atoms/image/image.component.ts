import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() url:string;
  @Input() type:string;
  @Input() size:string = '100';
  @Input() vid:string;
  urlStyle:string;
  typeClassName:string;
  sizeClassName:string;


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.urlStyle= `url(${this.url})`;
    this.typeClassName = this.type ? 'type-' + this.type : 'type-square';
  }
  @ViewChild('myVideo') videoplayer: ElementRef;

  toggleVideo() {
    this.videoplayer.nativeElement.play();
  }
  toggleVideo1(){
    this.videoplayer.nativeElement.pause();
  }
}
