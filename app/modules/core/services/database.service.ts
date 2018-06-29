import { Injectable } from "@angular/core";

// nativescript
import * as appSettings from 'application-settings';

interface IKeys {
    currentUser: string;
    accessToken: string;
    host: string;
}

@Injectable()
export class DatabaseService {

    public static KEYS: IKeys = {
        currentUser: 'current-user',
        accessToken: 'access-token',
        host: 'host'
    };

    /**
     *
     */
    constructor() {
        // // https://urania-vault-node.herokuapp.com
        this.setItem(DatabaseService.KEYS.host, "http://10.0.2.2:5000");
    }

    /**
     *
     * @param key
     * @param value
     */
    public setItem(key: string, value: any): void {
        appSettings.setString(key, JSON.stringify(value));
    }

    /**
     *
     * @param key
     */
    public getItem(key: string): any {
        let item = appSettings.getString(key);
        if (item) {
            return JSON.parse(item);
        }
        return item;
    }

    /**
     *
     * @param key
     */
    public removeItem(key: string): void {
        appSettings.remove(key);
    }
}
