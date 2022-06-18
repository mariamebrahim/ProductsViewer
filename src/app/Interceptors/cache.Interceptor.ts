import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from 'rxjs/operators';
import { HttpCacheService } from "../cache.service";
import { of } from 'rxjs';



@Injectable()
    export class cacheInterceptor implements HttpInterceptor{

        constructor(private CacheService:HttpCacheService ) { }
        intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
            console.log("You passed through the cacheInterceptor");

            if( req.url.indexOf("/Token")<0){
                const cachedResponse=this.CacheService.get(req);
                if(cachedResponse){
                    console.log("Returning response from cache");
                    return of(cachedResponse);
                }
            }

           
           
            return next.handle(req).pipe(tap(event=>{
                if(event instanceof HttpResponse && req.urlWithParams.indexOf("/Token")<0){
                    this.CacheService.put(req,event);
                    console.log("response from server");
                }

            }))
        }
    }

