// angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// app
import { SharedModule } from '../shared/shared.module';
import { signRouting } from "./sign.routing";
import { COMPONENTS } from './components';

@NgModule({
    imports: [
        SharedModule,
        signRouting
    ],
    providers: [
    ],
    declarations: [
        ...COMPONENTS,
    ],
    exports: [
        SharedModule,
        ...COMPONENTS
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SignModule { }