import { NgModule, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { Routes } from "@angular/router";

const routes: Routes = [{
    path: '',
    loadChildren: './modules/sign/sign.module#SignModule'
}, {
    path: 'albi',
    loadChildren: './modules/albi/albi.module#AlbiModule'
    // canLoad: [AuthGuard]
}];

@NgModule({
    imports: [
        NativeScriptRouterModule.forRoot(routes)
    ],
    exports: [
        NativeScriptRouterModule
    ]
})
export class AppRoutingModule { }