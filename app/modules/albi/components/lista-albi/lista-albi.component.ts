import { Component, OnInit } from '@angular/core';
import { AlbiService } from '~/modules/albi/services';
import { ActivatedRoute, Router, Event, NavigationEnd, NavigationStart, RoutesRecognized } from "@angular/router";
import { TextField } from "ui/text-field";
import { LoadingIndicator } from "nativescript-loading-indicator";
import * as _ from 'lodash';

import { debounceTime, filter, pairwise } from 'rxjs/operators';
import { Subject } from "rxjs";

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

  loader: any;

  public albi: Array<Albo> = [];
  public currentAlbi: Albo[] = [];

  private lastAlboNumero: any;

  searchTerms = new Subject<string>();
  public searchTxt: string = "";
  public currentSearchTxt: string = "";

  previousUrl: string;

  constructor(private albiService: AlbiService,
              private route: ActivatedRoute,
              private router: Router) { }

  /**
   *
   */
  ngOnInit() {
    this.loader = new LoadingIndicator();

    this.albi = this.route.snapshot.data['albiResolved'];

    this.router.events.pipe(
                              filter(e => e instanceof RoutesRecognized),
                              pairwise()
                           )
                          .subscribe((event: any[]) => this.refreshUpdatedAlbo(event));

    this.searchTerms
                  .pipe(debounceTime(1500))
                  .subscribe(() => this.getList());
  }

  /**
   *
   * @param event
   */
  public onLoadMoreItems() {

    if(!_.isEmpty(this.currentSearchTxt))
      return;

    this.loader.show();

    if(this.currentAlbi == this.albi)
      return;

    this.currentAlbi = this.currentAlbi.concat(this.albi);

    this.lastAlboNumero = _.last(this.currentAlbi).numero;

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
    this.lastAlboNumero = 0;

    this.searchTerms.next(textField.text);
  }

  /**
   *
   * @param args
   */
  public onClear(args) {
    console.log('on clear');
    this.onTextChange(args);
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
    this.albiService
          .getList(this.lastAlboNumero, this.searchTxt)
          .subscribe(res => {
            this.albi.push.apply(this.albi, res);
            this.loader.hide();
          });
  }

  /**
   *
   * @param args
   */
  public loadedSB(args) {
    setTimeout(() => {
        console.log(args.object);
        args.object.dismissSoftInput();
    }, 200)
  }

  /**
   *
   * @param alboNumero
   */
  public goToAlbo(alboNumero: number) {
    this.router.navigate(["/albi/albo", alboNumero]);
  }

  /**
   *
   */
  private refreshUpdatedAlbo(event) {
    const urlAfterRedirects = event[0].urlAfterRedirects;

    if(urlAfterRedirects.indexOf('albo/') >= 0) {

      const numeroAlboUpdated = _.last(_.split(urlAfterRedirects, '/'));

      console.log('numeroAlboUpdated: ', numeroAlboUpdated);

      this.albiService.getAlbo(numeroAlboUpdated)
                                              .subscribe(alboUpdated => {
                                                const foundIndex = this.albi.findIndex(x => x.numero == numeroAlboUpdated);
                                                this.albi[foundIndex] = alboUpdated;
                                              });
    }
  }
}
