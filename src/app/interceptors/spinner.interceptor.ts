import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { SpinnerService } from "../services/spinner.service";

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

    /**
     * Es utilizado para modificar las peticiones http
     * en este caso para que ejecute el sppiner cada vez que se realiza una peticion 
     * mediante ajax
     */

    constructor(private spinnerService: SpinnerService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        this.spinnerService.show();
        return next.handle(req).pipe(
            finalize(() => this.spinnerService.hide()));
    }

}