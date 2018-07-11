// angular
import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

// app
// import { PIPES } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    NativeScriptUIListViewModule
  ],
  declarations: [
    // ...PIPES
  ],
  exports: [
    CommonModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    NativeScriptUIListViewModule
  ]
})

export class SharedModule { }