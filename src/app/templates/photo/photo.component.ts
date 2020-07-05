import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  posts=[
    {
     "Title": "Professor",
     "profUrl":"assets/images/logo1.jpg",
     "Time":"1hr",
     "description":"In this world,everything is governed by balance.There's what you stand to gain and what you stand to lose.And when you then u have nothing to lose,you become overconfident.",
     "ImageUrl":"assets/images/pro.jpg",
     "likedPeople":"5 people like this post ",
     "video":"false"
    },
    {
     "Title": "MARVEL",
     "profUrl":"assets/images/marvel.jpg",
     "Time":"5hrs",
     "description":"I LOVE YOU 3000",
     "ImageUrl":"assets/images/iron.jpg",
     "likedPeople":"8 people like this post ",
     "video":"false"
    },
    {
     "Title": "DC",
     "profUrl":"assets/images/dc.jpg",
     "Time":"1hr",
     "description":"",
     "ImageUrl":"assets/images/js.jpg",
     "likedPeople":"8 people like this post ",
     "video":"false"
    },
    {
     "Title": "Thalaiva",
     "profUrl":"assets/images/logo2.jpg",
     "Time":"3hrs",
     "description":"Here is Annathe Motion Poster",
     "ImageUrl":"assets/images/rajini.mp4",
     "likedPeople":"5 people like this post ",
     "video":"true"
    },
    {
     "Title": "Memer",
     "profUrl":"assets/images/meme.jpg",
     "Time":"12hrs",
     "description":"",
     "ImageUrl":"assets/images/memepic.jpg",
     "likedPeople":"200 people like this post ",
     "video":"false"
    },
    {
     "Title": "K News",
     "profUrl":"assets/images/news.jpg",
     "Time":"20mins",
     "description":"",
     "ImageUrl":"assets/images/newspic.jpg",
     "likedPeople":"20 people like this post ",
     "video":"false"
    },
    {
     "Title": "Pikachu",
     "profUrl":"assets/images/pikachu.jpg",
     "Time":"1day",
     "description":"",
     "ImageUrl":"assets/images/post.jpg",
     "likedPeople":"108 people like this post ",
     "video":"false"
    },
    {
     "Title": "IPL",
     "profUrl":"assets/images/ipl.jpg",
     "Time":"2days",
     "description":"See you soon guys.",
     "ImageUrl":"assets/images/ip.jpg",
     "likedPeople":"18 people like this post ",
     "video":"false"
    }

   ];

}
