import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


abstract class HttpCache{

  abstract get(req:HttpRequest<any>):HttpResponse<any> | null;
  abstract put(req:HttpRequest<any>,res:HttpResponse<any>):void;

}

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService implements HttpCache {

  private cache : {[url:string]:HttpResponse<any>}={};
  put(req:HttpRequest<any>,res:HttpResponse<any>):void{
    this.cache[req.urlWithParams]=res;
  }
  get(req:HttpRequest<any>):HttpResponse<any> | null{
    return this.cache[req.urlWithParams];
  }
  constructor() { }
}
