import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SignComponent } from "./components/sign/sign.component";

const signRoutes: Routes = [
    { path: "", component: SignComponent }
];

export const signRouting: ModuleWithProviders = RouterModule.forChild(signRoutes);