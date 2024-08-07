import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getHeaders(): HttpHeaders {
    return new HttpHeaders({ "Content-Type": "application/json", Accept: "application/json", "Access-Control-Allow-Headers": "Content-Type" });
  }

  public get(url, param = {}): Observable<any> {
    let httpParam = new HttpParams();
    for (const x in param) {
      httpParam = httpParam.append(x, param[x]);
    }
    return this.http.get(url, {headers: this.getHeaders()});
  }

  public post(url: string, param: {}, responseType: any = null, observe: any = null): Observable<any> {
    return this.http.post(url, param, { headers: this.getHeaders(), responseType: responseType, observe: observe });
  }

  public put(url: string, param: {}): Observable<any> {
    return this.http.put<any>(url, param, { headers: this.getHeaders() });
  }

  public patch(url: string, param: {}): Observable<any> {
    return this.http.patch<any>(url, param, { headers: this.getHeaders() });
  }

  public delete(url: string): Observable<any> {
    return this.http.delete<any>(url, { headers: this.getHeaders() });
  }
}
