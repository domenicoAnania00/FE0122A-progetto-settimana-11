import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prodotti } from '../interface/prodotti';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  carrello: Prodotti[] = [];
  constructor(private http: HttpClient) {}

  recupera() {
    return this.http.get<Prodotti[]>('http://localhost:4201/products');
  }

  recuperoId(id: number) {
    return this.http.get<Prodotti>(`http://localhost:4201/products/${id}`);
  }
}
