import { Component, Input } from '@angular/core';
import { Projrct } from '../_model/Project';
import { Tags } from '../_model/tags';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal'; // Import ModalOptions
import { ProjectModelComponent } from '../project-model/project-model.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() project={} as Projrct;
  bsModalRef?:BsModalRef;
  constructor(private modelServies:BsModalService){}
  OpenProjectModel(){
    const modalOption:ModalOptions={
      class:"modal-lg"
    }
    this.bsModalRef=this.modelServies.show(ProjectModelComponent)
  }
 
}
