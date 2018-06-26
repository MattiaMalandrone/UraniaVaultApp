import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ListaAlbiComponent } from "./components/lista-albi/lista-albi.component";

const albiRoutes: Routes = [
    { path: "", component: ListaAlbiComponent }
];

export const albiRouting: ModuleWithProviders = RouterModule.forChild(albiRoutes);