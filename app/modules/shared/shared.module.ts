// angular
import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

// app
// import { PIPES } from './pipes';

@NgModule({
  imports: [
    CommonModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptUIListViewModule
  ],
  declarations: [
    // ...PIPES
  ],
  exports: [
    CommonModule,
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    NativeScriptUIListViewModule
  ]
})

export class SharedModule { }