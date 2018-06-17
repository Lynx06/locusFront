import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CursoService } from '../shared/curso.service';

@Component({
  selector: 'app-curso-create',
  templateUrl: './curso-create.component.html',
  styleUrls: ['./curso-create.component.scss'],
})
export class CursoCreateComponent implements OnInit {

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if (form != null){
      form.reset();
    }
    this.cursoService.selectedCurso = {
      idCurso: null,
      nome_curso: ''
    };
  }

  onSubmit(form: NgForm){
    this.cursoService.postCurso(form.value).subscribe(data =>{
      this.resetForm(form);
    });
  }
}
