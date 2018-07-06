import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Component, OnInit } from '@angular/core';
import { AlbiService } from '~/modules/albi/services';
import { AuthService } from "~/modules/core/services";
import { ActivatedRoute, Router } from "@angular/router";
import { TextField } from "ui/text-field";
import { ActivityIndicator } from "ui/activity-indicator";

import { debounceTime, switchMap } from 'rxjs/operators';
import { Subject } from "rxjs";

import { RouterExtensions } from "nativescript-angular/router";

class Albo {
  constructor(public numero: number, public title: string) { }
}

@Component({
  moduleId: module.id,
  selector: 'app-lista-albi',
  templateUrl: './lista-albi.component.html',
  styleUrls: ['./lista-albi.component.css']
})
export class ListaAlbiComponent implements OnInit {

  public isBusy = true;

  public albi: Array<Albo> = [];
  public currentAlbi: Array<Albo> = [];

  private countAlbiLoaded: number;

  searchTerms = new Subject<string>();
  public searchTxt: string = "";
  public currentSearchTxt: string = "";

  constructor(private albiService: AlbiService,
              private route: ActivatedRoute,
              private router: Router) { }

  /**
   *
   */
  ngOnInit() {
    console.log(`ngOnInit Lista Albi Cmp`);
    const albi = this.route.snapshot.data['dataResolved'];
    this.albi = albi;

    console.log("------------------------------------------------------------------");
    console.log(albi);
    console.log("------------------------------------------------------------------");

    this.isBusy = false;

    this.searchTerms
          .pipe(
            debounceTime(1500)
          )
          .subscribe(res => {
            this.getList();
          });
  }

  /**
   *
   * @param event
   */
  onLoadMoreItems() {

    if(this.currentAlbi == this.albi || this.searchTxt == this.currentSearchTxt)
      return;

    this.currentAlbi = this.albi;

    this.countAlbiLoaded = this.albi.length;

    console.log('getList - onLoadMoreItems');
    this.getList();
  }

  /**
   *
   * @param args
   */
  public onTextChange(args) {
    let textField = <TextField>args.object;

    this.currentSearchTxt = textField.text;

    if(this.searchTxt == textField.text)
      return;

    this.albi = [];

    this.searchTxt = textField.text;
    this.countAlbiLoaded = 0;

    this.searchTerms.next(textField.text);
  }

  /**
   *
   * @param args
   */
  public onReturn(args) {
    let textField = <TextField>args.object;
    this.searchTxt = textField.text;
  }

  /**
   *
   */
  private getList() {
    this.albiService.getList(this.countAlbiLoaded, this.searchTxt)
        .subscribe(res => {
          console.log(res);
          this.albi.push.apply(this.albi, res);
        });
  }

  /**
   *
   * @param alboNumero
   */
  goToAlbo(alboNumero: number) {
    this.router.navigate(["/albi/albo", alboNumero]);
  }

  onBusyChanged(args) {
    let indicator = <ActivityIndicator>args.object;
      console.log("indicator.busy changed to: " + indicator.busy);
  }
}
