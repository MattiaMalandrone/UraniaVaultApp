// angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// app
import { SharedModule } from '../shared/shared.module';
import { albiRouting } from "./albi.routing";
import { COMPONENTS } from './components';
import { PROVIDERS } from './services';

@NgModule({
    imports: [
        SharedModule,
        albiRouting
    ],
    providers: [
        ...PROVIDERS
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
export class AlbiModule { }