import { Injectable } from "@angular/core";
import { User, AuthUser } from "../../shared/models/user.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { DatabaseService } from "./database.service";
import { LogService } from "./log.service";

import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

    host: string;

    // access our current user from anywhere
    public static CURRENT_USER: AuthUser;

    public static ACCESS_TOKEN: string;

    // subscribe to authenticated state changes
    /**
     * BehaviorSubjects are useful for representing "values over time".
     * For instance, an event stream of birthdays is a Subject,
     * but the stream of a person's age would be a BehaviorSubject.
     * */
    public authenticated$: BehaviorSubject<boolean> =  new BehaviorSubject(false);

    /**
     *
     */
    constructor(private databaseService: DatabaseService,
                private logService: LogService,
                private httpClient: HttpClient) {
                    this._init();
    }

    /**
     *
     */
    private _init() {
        this.host = this.databaseService.getItem(DatabaseService.KEYS.host);
        AuthService.CURRENT_USER = this.databaseService.getItem(DatabaseService.KEYS.currentUser);
        this.logService.debug(`Current user: `, AuthService.CURRENT_USER);
        this._notifyState(!!AuthService.CURRENT_USER);
    }

    /**
     *
     * @param auth
     */
    private _notifyState(auth: boolean) {
        this.authenticated$.next(auth);
    }

    /**
     *
     * @param user
     */
    register(user: User): Observable<any> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };

        return this.httpClient.post(`${this.host}/api/users/signup`, user, httpOptions);
    }

    /**
     *
     * @param user
     */
    login(user: User): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json'
            })
        };
        console.log('starting http call for login...' + this.host);
        return this.httpClient.post(`${this.host}/api/auth/signin`, user, httpOptions);
    }

    /**
     *
     * @param email
     */
    resetPassword(email) {

    }

    /**
     *
     * @param email
     * @param password
     */
    saveUser(email: string, userId) {
        AuthService.CURRENT_USER = { email, userId };
        this.databaseService.setItem(DatabaseService.KEYS.currentUser, AuthService.CURRENT_USER);
        this._notifyState(true);
    }

    /**
     *
     */
    saveToken(token: string) {
        AuthService.ACCESS_TOKEN = token;
        this.databaseService.setItem(DatabaseService.KEYS.accessToken, token);
    }
}
