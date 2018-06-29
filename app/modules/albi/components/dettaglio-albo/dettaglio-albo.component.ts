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
  stati: any[] = [];
  items: object = {};
  selectedIndex: number = 0;

  constructor(private route: ActivatedRoute, private albiService: AlbiService,) { }

  /**
   *
   */
  ngOnInit() {
    console.log('inside dettaglio albo');
    const numeroAlbo = this.route.snapshot.params.numero;

    this.albiService.getAlbo(numeroAlbo).subscribe((albo) => this.albo = albo);

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

    console.log("AlboId:", this.albo._id);
    console.log("Stato:", stato);

    this.albiService.updateAlbo(this.albo._id, stato).subscribe(res => {
      console.log(res);
    });
  }

}
