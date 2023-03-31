

import {Injectable,OnInit} from '@angular/core';
import {Account} from "../../model/Account";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccountCreate} from "../../model/AccountCreate";
import {AccountToken} from "../../model/AccountToken";
import { AccountForChange } from 'src/app/model/AccountForChange';

@Injectable({
    providedIn: 'root'
})
export class AccountService implements OnInit {
    accounts: Account[] = [];
    private url = 'http://103.57.220.123:8080/';

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
    }

    getAllProvider(): Observable<Account[]> {
        return this.http.get<Account[]>(this.url+"accounts");
    }

    createAccount(accountCreate: AccountCreate): Observable<Account> {
        return this.http.post<Account>(this.url+'register', accountCreate)
    }

    findAccountByUsername(username: String): Observable<any> {
        return this.http.get<any>(this.url+`register/findAccountByUsername/${username}`)
    }

    findAccountByEmail(email: String): Observable<any> {
        return this.http.get<any>(this.url+`register/findAccountByEmail/${email}`)
    }
    findAccountByPhoneNumber(phoneNumber: String): Observable<any> {
            return this.http.get<any>(this.url+`register/findAccountByPhoneNumber/${phoneNumber}`)
    }
    forgotPass(account:Account):Observable<any>{
        return this.http.post<any>(this.url+'register/forgetPass',account)
    }
    getAllAccount(page: number): Observable<any> {
        return this.http.get<any>( this.url+"admin/accounts"+ '?page=' + page);
    }

    blockAccount(id: number): Observable<any> {
        // @ts-ignore
        return this.http.post<any>(this.url1+`admin/accounts/block/${id}`);
    }

    search(stringSearch: String): Observable<any> {
        return this.http.get<any>(this.url+`admin/search/${stringSearch}`)
    }


    searchProvider(stringSearch: String): Observable<any> {
        return this.http.get<any>(this.url+`user/searchProvider/${stringSearch}`)
    }


    findById(id: number): Observable<any> {
        return this.http.get<any>(this.url+`admin/accounts/${id}`)
    }

    upVip(id: number): Observable<any> {
        // @ts-ignore
        return this.http.post <any>(this.url+`admin/accounts/vip/${id}`);
    }

    login(account: any): Observable<AccountToken> {
        return this.http.post<AccountToken>(this.url+"login", account)
    }

    changeInfo(account: AccountForChange): Observable<AccountForChange> {
        return this.http.post<AccountForChange>(this.url+'user/editProfile', account)
    }
    verify(code: String): Observable<boolean> {
        return this.http.get<boolean>(this.url+`verify/${code}`)
    }

    setToken(token: string) {
        localStorage.setItem("token", token)
    }

    getToken() {
        return localStorage.getItem("token")
    }


    setAccountToken(accountToken: AccountToken) {
        localStorage.setItem("accountToken", JSON.stringify(accountToken))
    }

    getAccountToken() {
        // @ts-ignore - nghĩa là không su dụng cú pháp của TS
        return JSON.parse(localStorage.getItem("accountToken"))
    }
}
