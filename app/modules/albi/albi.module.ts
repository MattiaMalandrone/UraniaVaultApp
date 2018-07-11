// angular
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// app
import { SharedModule } from '../shared/shared.module';
import { albiRouting } from "./albi.routing";
import { COMPONENTS } from './components';
import { PROVIDERS } from './services';
import { ListaAlbiGuard } from './components/lista-albi/lista-albi.guard';
import { ListaAlbiResolver } from './components/lista-albi/lista-albi.resolver.service';
import { DettaglioAlboResolver } from '~/modules/albi/components/dettaglio-albo/dettaglio-albo.resolver.service';
import { DettaglioAlboGuard } from '~/modules/albi/components/dettaglio-albo/dettaglio-albo.guard';

@NgModule({
    imports: [
        SharedModule,
        albiRouting
    ],
    providers: [
        ...PROVIDERS,
        ListaAlbiGuard,
        DettaglioAlboGuard,
        ListaAlbiResolver,
        DettaglioAlboResolver
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