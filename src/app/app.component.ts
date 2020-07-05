import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '';
  posts=[
    {
     "Title": "Professor",
     "profUrl":"assets/logo1.jpg",
     "Time":"1hr",
     "description":"In this world,everything is governed by balance.There's what you stand to gain and what you stand to lose.And when you then u have nothing to lose,you become overconfident.",
     "ImageUrl":"",
     "like":"false",
     "likedPeople":"5 people like this post ",
     "video":"false"
    },
    {
     "Title": "MARVEL",
     "profUrl":"assets/marvel.jpg",
     "Time":"5hrs",
     "description":"I LOVE YOU 3000",
     "ImageUrl":"assets/iron.jpg",
     "like":"true",
     "likedPeople":"8 people like this post ",
     "video":"false"
    },
    {
     "Title": "DC",
     "profUrl":"assets/dc.jpg",
     "Time":"1hr",
     "description":"",
     "ImageUrl":"assets/js.jpg",
     "like":"true",
     "likedPeople":"8 people like this post ",
     "video":"false"
    },
    {
     "Title": "Thalaiva",
     "profUrl":"assets/logo2.jpg",
     "Time":"3hrs",
     "description":"Here is Annathe Motion Poster",
     "ImageUrl":"assets/rajini.mp4",
     "like":"false",
     "likedPeople":"5 people like this post ",
     "video":"true"
    },
    {
     "Title": "Memer",
     "profUrl":"assets/meme.jpg",
     "Time":"12hrs",
     "description":"",
     "ImageUrl":"assets/memepic.jpg",
     "like":"true",
     "likedPeople":"200 people like this post ",
     "video":"false"
    },
    {
     "Title": "K News",
     "profUrl":"assets/news.jpg",
     "Time":"20mins",
     "description":"",
     "ImageUrl":"assets/newspic.jpg",
     "like":"true",
     "likedPeople":"20 people like this post ",
     "video":"false"
    },
    {
     "Title": "Pikachu",
     "profUrl":"assets/pikachu.jpg",
     "Time":"1day",
     "description":"",
     "ImageUrl":"assets/post.jpg",
     "like":"false",
     "likedPeople":"108 people like this post ",
     "video":"false"
    },
    {
     "Title": "IPL",
     "profUrl":"assets/ipl.jpg",
     "Time":"2days",
     "description":"See you soon guys.",
     "ImageUrl":"",
     "like":"false",
     "likedPeople":"18 people like this post ",
     "video":"false"
    }

   ];

}
