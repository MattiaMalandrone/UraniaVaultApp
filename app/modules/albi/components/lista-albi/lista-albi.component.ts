import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Component, OnInit } from '@angular/core';
import { AlbiService } from '~/modules/albi/services';
import { AuthUser } from "~/modules/shared/models";
import { AuthService } from "~/modules/core/services";

@Component({
  moduleId: module.id,
  selector: 'app-lista-albi',
  templateUrl: './lista-albi.component.html',
  styleUrls: ['./lista-albi.component.css']
})
export class ListaAlbiComponent implements OnInit {

  constructor(private albiService: AlbiService) { }

  ngOnInit() {
    console.log(AuthService.CURRENT_USER);
    console.log(AuthService.ACCESS_TOKEN);
    console.log(`ngOnInit Lista Albi Cmp`);
    // this.albiService.initCatalogo(this.user).subscribe(res => {
    //   console.log(res);
    //   alert(res);
    // }, err => {
    //   console.log(err);
    //   alert(err.error);
    // });
   }

}
