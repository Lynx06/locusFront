import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Curso } from './curso.model';
import { environment } from 'environments/environment';


@Injectable()
export class CursoService {

  selectedCurso: Curso;
  cursoList: Curso[];
  constructor(private http: Http) { }

  // POST do curso
  postCurso(cur: Curso) {
    var body = JSON.stringify(cur);
    var headerOptions = new Headers({'Content-Type': 'application/json'});
    var requestOptions = new RequestOptions({method: RequestMethod.Post, headers: headerOptions});
    return this.http.post(environment.apiPostCurso, body, requestOptions).map(x => x.json());
  }

  // PUT do Curso
  putCurso(idCurso, cur) {
    var body = JSON.stringify(cur);
    var headerOptions = new Headers({'Content-Type': 'application/json'});
    var requestOptions = new RequestOptions({method: RequestMethod.Put, headers: headerOptions});
    return this.http.put(environment.apiPutCurso + idCurso, body, requestOptions).map(res => res.json());
  }

  // GET do Curso
  getCursoList() {
    this.http.get(environment.apiGetCurso).map((data: Response) => {
      return data.json() as Curso[];
    }).toPromise().then(x => {
      this.cursoList = x;
    });
  }

  // DELETE do curso
  deleteCurso(idCurso: number) {
    return this.http.delete(environment.apiDeleteCurso + idCurso).map(res => res.json());
  }
}
