import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KutyaService {

  private url='http://localhost:3000/kutyak';

  constructor(private http:HttpClient) { }


  get():Observable<any>{
    return this.http.get<any>(this.url);
  }
}
