import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbiService } from '~/modules/albi/services';
import { Observable } from 'rxjs';
import { ListPicker } from "ui/list-picker";


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

  constructor(private route: ActivatedRoute, private albiService: AlbiService,) { }

  /**
   *
   */
  ngOnInit() {
    console.log('inside dettaglio albo');
    this.numeroAlbo = +this.route.snapshot.params.numero;

    this.albiService.getAlbo(this.numeroAlbo).subscribe((albo) => {
      this.albo = albo;
      this.setStatus(albo);
      this.selectedIndex = parseInt(albo.status);
    });

    this.albiService.getListaStati().subscribe( (stati: any[]) => {

      for(let i = 0; i < stati.length; i++) {

        const stato: any = {
          value: stati[i].key,
          name: stati[i].value,
          toString: () => stati[i].value
        }

        this.stati.push(stato);
      }

    })
  }

  /**
   *
   * @param args
   */
  selectedIndexChanged(args) {
    const picker = <ListPicker>args.object;
    const stato = picker.selectedIndex;

    if(!this.albo)
      return;

    console.log("AlboId:", this.albo._id);
    console.log("Stato:", stato);

    this.albiService.updateAlbo(this.albo._id, stato).subscribe(res => this.selectedIndex = stato);
  }

  /**
   *
   * @param albo
   */
  setStatus(albo) {
    switch(albo.status) {
      case 0 : this.statusColor = 'lightred'; break;
      case 1 : this.statusColor = 'lightgreen'; break;
      case 2 : this.statusColor = 'lightyellow'; break;
      default: this.statusColor = 'white'; break;
    }
  }

  /**
   *
   */
  prev(numeroAlbo) {
    this.numeroAlbo = numeroAlbo;
    this.albiService.getAlbo(numeroAlbo).subscribe((albo) => {
      this.albo = albo;
      this.setStatus(albo);
      console.log(albo.status);
      this.selectedIndex = parseInt(albo.status);
    });
  }

  /**
   *
   */
  next(numeroAlbo) {
    this.numeroAlbo = numeroAlbo;
    this.albiService.getAlbo(numeroAlbo).subscribe((albo) => {
      this.albo = albo;
      this.setStatus(albo);
      console.log(albo.status);
      this.selectedIndex = parseInt(albo.status);
    });
  }
}
