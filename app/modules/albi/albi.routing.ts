import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListaAlbiComponent } from "./components/lista-albi/lista-albi.component";
import { ListaAlbiGuard } from "./components/lista-albi/lista-albi.guard";
import { ListaAlbiResolver } from "./components/lista-albi/lista-albi.resolver.service";

import { DettaglioAlboComponent } from "~/modules/albi/components/dettaglio-albo/dettaglio-albo.component";
import { DettaglioAlboResolver } from "~/modules/albi/components/dettaglio-albo/dettaglio-albo.resolver.service";

const albiRoutes: Routes = [
    {
        path: "",
        component: ListaAlbiComponent,
        resolve: { albiResolved: ListaAlbiResolver },
        canActivate: [ListaAlbiGuard]
    },
    {
        path: "albo/:numero",
        component: DettaglioAlboComponent,
        resolve: { alboResolved: DettaglioAlboResolver },
    }
];

export const albiRouting: ModuleWithProviders = RouterModule.forChild(albiRoutes);