import {Component, Input, OnInit} from '@angular/core';
import {TacheService} from '../../services/tache.service';
import { Chart } from 'chart.js';
import {Tache} from '../../Classes/tache';
import {from, Observable} from 'rxjs';







@Component({
  selector: 'app-graphe2',
  templateUrl: './graphe2.component.html',
  styleUrls: ['./graphe2.component.scss']
})

export class Graphe2Component implements OnInit {
  taches$: Observable<Tache[]>;
  taches: Tache[];
  maDonne: object;


  chart2 = {
    data: {
      datasets: [{
        data: [25, 24, 24, 27],
        backgroundColor: ['#ff0066', '#0099ff', '#ff9900', '#00ff99'],
      }],
      labels: [
        'label 1',
        'label 2',
        'label 3',
        'label 4'
      ]

    },
    options: {

      title: {
        display: false,
        text: 'Percentage Des Taches'
      },
      legend: {
        position: 'top',
        display: true
      },
      cutoutPercentage: 60
    }
  };







  constructor(public tacheService: TacheService) {}

  ngOnInit() {
    this.reloadData();
    this.taches$.subscribe(data => this.taches = data);
    this.actualiser();
    this.chart2 = new Chart('chart-doughnut',  {
      type: 'doughnut',
      data: this.chart2.data,
      options: this.chart2.options
    });

    this.sync(this.chart2);

  }


  actualiser() {
    this.tacheService.getTaches1()
      .subscribe(
        data => {
          console.log(data);
          this.maDonne = data;

          // C'est là ou je vais faire le traitement :

          this.chart2.data.datasets[0].data = [this.maDonne[0].percentage, this.maDonne[1].percentage, this.maDonne[2].percentage, this.maDonne[3].percentage];
          this.chart2.data.labels = [this.maDonne[0].etat, this.maDonne[1].etat, this.maDonne[2].etat, this.maDonne[3].etat];
          console.log(this.maDonne[0].percentage);
          console.log(this.maDonne[0].etat);
          console.log(this.maDonne[1].percentage);
          console.log(this.maDonne[1].etat);
          console.log(this.maDonne[2].percentage);
          console.log(this.maDonne[2].etat);
          console.log(this.maDonne[3].percentage);






          // Jusqu'à là
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.taches$ = this.tacheService.getAllTaches();
  }


  sync(chart) {
    chart.update();
  }

}





