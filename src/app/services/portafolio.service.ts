import { Global } from './global';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Portafolio } from '../models/portafolio';
import { Observable } from 'rxjs';

@Injectable()
export class PortafolioService{
    public url:String;
    constructor(private _http:HttpClient){
        this.url = Global.url;
    }

    getPortafolios():Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url + 'project/?format=json',{headers:headers});
    }

    savePortafolio(portafolio:Portafolio):Observable<any>{
        let params = JSON.stringify(portafolio);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url + 'project/?format=json', params ,{headers:headers});


    }

    detailPortafolio(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url + 'project/' + id + '/?format=json', {headers:headers});
    }

    editarPortafolio(portafolio):Observable<any>{
        let params = JSON.stringify(portafolio);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url + 'project/' + portafolio.id + '/?format=json', params,{headers:headers});
    }

    deletePortafolio(id):Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url + 'project/' + id + '/?format=json', {headers:headers});
    }


 

}