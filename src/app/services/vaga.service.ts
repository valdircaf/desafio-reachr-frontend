import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vaga } from '../interfaces/vaga';

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  
  url: string = "http://localhost:5229/api/Vaga";

  constructor(private http: HttpClient) { }

  getVagas(): Observable<Vaga[]>{
    return this.http.get<Vaga[]>(this.url);
  }

  updateVaga(newVaga: Vaga, id: any): Observable<any> {
    // console.log("Fui chamado")
    return this.http.put(`${this.url}/${id}`, newVaga)
  }

  deleteVaga(id: number): Observable<any>{
    return this.http.delete(`${this.url}?id=${id}`);
  }

  adicionarVaga(newVaga: Vaga): Observable<any>{
    return this.http.post<any>(this.url, newVaga);
  }
}
