import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class ClienteService {


    //método construtor
    constructor(
        private httpClient: HttpClient
    ) {}


}


