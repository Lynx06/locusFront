import { Component, OnInit } from '@angular/core';

import { CursoService } from '../shared/curso.service';
import { Curso } from '../shared/curso.model';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
})
export class CursoListComponent implements OnInit {

  constructor(private cursoService: CursoService) { }

  ngOnInit() {
    this.cursoService.getCursoList();
  }

  showForEdit(cur: Curso){
    this.cursoService.selectedCurso = Object.assign({}, cur);
  }

  onDelete(idCurso: number){
    if (confirm('Voce realmente deseja excluir esse Curso?') == true){
      this.cursoService.deleteCurso(idCurso).subscribe(x => {
        this.cursoService.getCursoList();
        // this.toastr.warning('Excluido com Sucesso!', 'Curso Registrado' );
      });
    }
  }
}
