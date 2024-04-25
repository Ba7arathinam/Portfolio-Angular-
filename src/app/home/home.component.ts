

import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, query, stagger } from '@angular/animations';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-20px)' }),
          stagger('100ms', [
            animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  aboutMe: string = "Welcome to my portfolio! I am a passionate web developer with a focus on creating interactive and user-friendly websites.";

  skills: { name: string; logoUrl: string }[] = [];
  Tools: { name: string; logoUrl: string }[] = [];


  constructor(private title:Title){
    this.title.setTitle('Balarathinam T - Home')
  }

  ngOnInit(): void {
    this.skills = [    { name: 'HTML5', logoUrl: '../assets/html.svg' },
    { name: 'CSS3', logoUrl: '../assets/Css.svg' },
    { name: 'Bootstrap', logoUrl: '../assets/Bootstrap.svg' },
    { name: 'JavaScript', logoUrl: '../assets/Javascript.svg' }, // Adjust the count as needed
    { name: 'TypeScript', logoUrl: '../assets/typescript.svg' },
    { name: 'React.js', logoUrl: '../assets/react.svg' },
    { name: 'Angular', logoUrl: '../assets/Angular.svg' },
    { name: 'MYSQL', logoUrl: '../assets/MYSQL.svg' },
    { name: 'Node.js', logoUrl: '../assets/Node.svg' },
    { name: 'Express.js', logoUrl: '../assets/express.svg' },
    { name: 'NPM', logoUrl: '../assets/npm.svg' },
    { name: 'VScode', logoUrl: '../assets/vscode.svg' },
    { name: 'Postman', logoUrl: '../assets/postman.svg' },
    { name: 'GitHub', logoUrl: '../assets/github.svg' },


  ] // Adjust the count as needed
  }
}


