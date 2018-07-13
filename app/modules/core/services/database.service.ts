import { Injectable } from "@angular/core";

// nativescript
import * as appSettings from 'application-settings';

const Sqlite = require("nativescript-sqlite");

interface IKeys {
    currentUser: string;
    accessToken: string;
    host: string;
}

@Injectable()
export class DatabaseService {

    public isOffline: boolean;

    public sqliteDb: any;

    public static KEYS: IKeys = {
        currentUser: 'current-user',
        accessToken: 'access-token',
        host: 'host'
    };

    /**
     *
     */
    constructor() {
        // "https://urania-vault-node.herokuapp.com"
        // "http://10.0.2.2:5000"
        this.removeItem(DatabaseService.KEYS.host);
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


    /**
     *
     */
    public initSqlite() {
        console.log('INIT SQLITE...');



        (new Sqlite("my.uraniaVault")).then(db => {
            db.execSQL(`CREATE TABLE IF NOT EXISTS relations (_id INTEGER PRIMARY KEY,
                                                              alboId TEXT,
                                                              userId TEXT,
                                                              status INTEGER)`).then(() => {
                console.log(db);
                this.sqliteDb = db;
                console.log('Sqlite DB Created (if not exists yet)');
            }, error => console.log("CREATE TABLE ERROR", error));
        }, error => console.log("OPEN DB ERROR", error));
    }

    /**
     *
     */
    public postSqlite(alboId, userId, status) {
        console.log('postSqlite....');
        return this.sqliteDb.execSQL("INSERT INTO relations (alboId, userId, status) VALUES (?, ?, ?)", [alboId, userId, status]).then(id => {
            console.log("INSERT RESULT", id);
        }, error => {
            console.log("INSERT ERROR", error);
        });
    }

    /**
     *
     */
    public patchSqlite(alboId, userId, status) {
        console.log('patchSqlite....');
        return this.sqliteDb.execSQL("UPDATE relations SET status = ? WHERE alboId = ? AND userId = ?", [status, alboId, userId]).then(id => {
            console.log("UPDATE RESULT", id);
        }, error => {
            console.log("UPDATE ERROR", error);
        });
    }

    /**
     *
     */
    public existsSqlite(alboId, userId) {
        return this.sqliteDb.get("SELECT * FROM relations WHERE alboId = ? AND userId = ?", [alboId, userId]).then(res => {
            console.log("RESULT SELECT", res);
            return res == null ? false : true;
        }, error => {
            console.log("RESULT SELECT", error);
            return error;
        });
    }

    /**
     *
     */
    public getOfflineData(userId) {
        return this.sqliteDb.get("SELECT * FROM relations WHERE userId = ?", [userId]).then(res => {
            console.log("RESULT SELECT", res);
            return res;
        }, error => {
            console.log("RESULT SELECT", error);
            return error;
        });
    }

    /**
     *
     */
    public removeDatabaseSqlite() {
        console.log("DB uraniaVault exists: ", Sqlite.exists("my.uraniaVault"));
        if (Sqlite.exists("my.uraniaVault")) {
            console.log('cancello sqlite db');
            Sqlite.deleteDatabase("my.uraniaVault");
        }
    }
}
