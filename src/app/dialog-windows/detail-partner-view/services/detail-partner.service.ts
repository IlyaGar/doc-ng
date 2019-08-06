import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetDetail } from '../models/get-detail';
import { PayDelQuery } from '../models/pay-delete-query';

@Injectable({
  providedIn: 'root'
})
export class DetailPartnerService {

  private urlget = environment.apiUrl + 'detail/';
  private urldelete = environment.apiUrl + 'paydel/';
  
  constructor(private http: HttpClient) { }

  postGetDatail(data: GetDetail): Observable<any> {
    return this.http.post<any>(this.urlget, data);
  }

  postDeleteRowOut(data: PayDelQuery): Observable<any> {
    return this.http.post<any>(this.urldelete, data);
  }
}
