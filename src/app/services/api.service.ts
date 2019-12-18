import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const apiReq = req.clone({ url: `${environment.apiUrl}${req.url}` });
        return next.handle(apiReq);
    }
}
