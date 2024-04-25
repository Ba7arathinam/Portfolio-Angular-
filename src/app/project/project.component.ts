import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Projrct } from '../_model/Project';
import { Tags } from '../_model/tags';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

  project:Projrct={
    id:0,
    name:'Mobie Rating App',
    summary:'Mobie Rating App',
    description:'',
    projectLink:'',
    tags:[Tags.Angular, Tags.TypeScript],
    pictures:[]
  }
  constructor(private title:Title){
    this.title.setTitle('Balarathinam T - Project')
  }

}
