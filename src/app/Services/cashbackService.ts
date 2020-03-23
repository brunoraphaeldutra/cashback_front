import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CashBackService {

  constructor(protected httpClient: HttpClient) { }

  public findPurchase(cpf): Observable<any> {
    return this.httpClient.get(`http://127.0.0.1:5000/api/purchase?cpf=${cpf}`);
  }

  public getCashBackAmount(cpf): Observable<any> {
    return this.httpClient.get(`http://127.0.0.1:5000/api/cashback?cpf=${cpf}`);
  }

  public addReseller(reseller): Observable<any> {
    console.log(JSON.stringify(reseller));
    return this.httpClient.post(`http://127.0.0.1:5000/api/reseller`, reseller);
  }

  public addPurchase(purchase): Observable<any> {
    return this.httpClient.post(`http://127.0.0.1:5000/api/purchase`, purchase, {});
  }

  public editPurchase(purchase): Observable<any> {
    return this.httpClient.put(`http://127.0.0.1:5000/api/purchase`, purchase).pipe(take(1));
  }

  public deletePurchase(id: number): Observable<any> {
    return this.httpClient.delete(`http://127.0.0.1:5000/api/purchase?id_purchase=${id}`).pipe(take(1));
  }

}
