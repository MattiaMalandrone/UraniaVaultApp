// angular
import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// app
// import { PIPES } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    NativeScriptFormsModule
  ],
  declarations: [
    // ...PIPES
  ],
  exports: [
    CommonModule,
    NativeScriptFormsModule
  ]
})

export class SharedModule { }