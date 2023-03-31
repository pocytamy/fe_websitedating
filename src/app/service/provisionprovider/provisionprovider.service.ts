import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProvisionProvider} from "../../model/ProvisionProvider";

@Injectable({
    providedIn: 'root'
})
export class ProvisionProviderService {
    provisionproviders: ProvisionProvider[] = [];
    private url = 'http://103.57.220.123:8080/';

    constructor(private http: HttpClient) {
    }

    getAllProvisionProvider(): Observable<ProvisionProvider[]> {
        return this.http.get<ProvisionProvider[]>(this.url+"provisionproviders");
    }

    findProvisionProviderByProviderId(providerId: number): Observable<ProvisionProvider[]> {
        return this.http.get<ProvisionProvider[]>(this.url+`provisionproviders/a/getStatus/${providerId}`)
    }

    findById(id: number): Observable<ProvisionProvider> {
        return this.http.get<ProvisionProvider>(this.url+`provisionproviders/a/${id}`)
    }

    saveProvisionProvider(provisionProvider: ProvisionProvider): Observable<ProvisionProvider> {
        return this.http.post<ProvisionProvider>(this.url+'provisionproviders', provisionProvider)
    }

    findProvisionProviderByProviderIdStatus1(providerId: number): Observable<ProvisionProvider[]> {
        return this.http.get<ProvisionProvider[]>(this.url+`provisionproviders/a/getStatus1/${providerId}`)
    }
}
