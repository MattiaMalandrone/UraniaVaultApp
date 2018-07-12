import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router, Event, NavigationEnd, NavigationStart } from '@angular/router';
import { AlbiService } from '~/modules/albi/services';
import { ListPicker } from "ui/list-picker";
import { LoadingIndicator } from "nativescript-loading-indicator";
import { of, Observable, pipe } from 'rxjs';
import { flatMap, filter, map, throttleTime  } from 'rxjs/operators';

interface Stati {
  key: string;
  value: string;
}

@Component({
  moduleId: module.id,
  selector: 'app-dettaglio-albo',
  templateUrl: './dettaglio-albo.component.html',
  styleUrls: ['./dettaglio-albo.component.css']
})
export class DettaglioAlboComponent implements OnInit {

  albo: any;
  numeroAlbo: number;
  stati: any[] = [];
  items: object = {};
  selectedIndex: number = 0;
  statusColor: string = "white";
  loader: any;
  selectedStato: any;

  constructor(private route: ActivatedRoute,
              private albiService: AlbiService,
              private router: Router) { }

  /**
   *
   */
  ngOnInit() {
    console.log('inside dettaglio albo');

    this.loader = new LoadingIndicator();

    this.albo = this.route.snapshot.data['alboResolved'];
    this.setStatus(this.albo);
    this.selectedIndex = parseInt(this.albo.stato);
    this.numeroAlbo = this.albo.numero;
    this.albiService.getListaStati().subscribe( (stati: any[]) => {

      for(let i = 0; i < stati.length; i++) {

        const stato: any = {
          value: stati[i].key,
          name: stati[i].value,
          toString: () => stati[i].value
        }

        this.stati.push(stato);
      }
    });
  }
  /**
   *
   * @param args
   */
  selectedIndexChanged(args) {
    this.loader.show();
    this.selectedStato = <ListPicker>args.object.selectedIndex;
    this.albiService.updateAlbo(this.albo._id, this.selectedStato).subscribe(r => {
      this.loader.hide();
    });
  }

  /**
   *
   * @param albo
   */
  private setStatus(albo) {
    switch(albo.stato) {
      case 0 : this.statusColor = 'lightred'; break;
      case 1 : this.statusColor = 'lightgreen'; break;
      case 2 : this.statusColor = 'lightyellow'; break;
      default: this.statusColor = 'white'; break;
    }
  }

  /**
   *
   */
  prev() {
    this.loader.show();
    console.log('PREV A: ' , this.numeroAlbo);
    this.numeroAlbo = this.numeroAlbo - 1;
    console.log('PREV B: ' , this.numeroAlbo);
    this.albiService.getAlbo(this.numeroAlbo).subscribe((albo) => {
      this.albo = albo;
      this.setStatus(albo);
      this.selectedIndex = parseInt(albo.stato);
      this.loader.hide();
    });
  }

  /**
   *
   */
  next() {
    this.loader.show();
    console.log('NEXT A: ' , this.numeroAlbo);
    this.numeroAlbo = this.numeroAlbo + 1;
    console.log('NEXT B ' , this.numeroAlbo);
    this.albiService.getAlbo(this.numeroAlbo).subscribe((albo) => {
      this.albo = albo;
      this.setStatus(albo);
      this.selectedIndex = parseInt(albo.stato);
      this.loader.hide();
    });
  }

}
