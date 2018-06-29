import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListaAlbiComponent } from "./components/lista-albi/lista-albi.component";
import { ListaAlbiGuard } from "./components/lista-albi/lista-albi.guard";
import { ListaAlbiResolver } from "./components/lista-albi/lista-albi.resolver.service";

import { DettaglioAlboComponent } from "~/modules/albi/components/dettaglio-albo/dettaglio-albo.component";

const albiRoutes: Routes = [
    {
        path: "",
        component: ListaAlbiComponent,
        resolve: { dataResolved: ListaAlbiResolver },
        canActivate: [ListaAlbiGuard]
    },
    {
        path: "albo/:numero",
        component: DettaglioAlboComponent,

        // resolve: { dataResolved: ListaAlbiResolver },
        // canActivate: [ListaAlbiGuard]
    }
];

export const albiRouting: ModuleWithProviders = RouterModule.forChild(albiRoutes);