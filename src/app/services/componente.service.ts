import { Injectable } from '@angular/core';
import { ComponenteInterface } from '../types/componente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponenteService {
  url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<ComponenteInterface[]> {
    return this.httpClient.get<ComponenteInterface[]>(
      `${this.url}/componentes`
    );
  }
}
