import { Injectable } from "@angular/core";

// nativescript
import * as appSettings from 'application-settings';

interface IKeys {
    currentUser: string;
    accessToken: string;
}

@Injectable()
export class DatabaseService {

    public static KEYS: IKeys = {
        currentUser: 'current-user',
        accessToken: 'access-token'
    };

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
