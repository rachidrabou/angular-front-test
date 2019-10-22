import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Tache} from '../../Classes/tache';
import { Chart } from 'chart.js';
import {TacheService} from '../../services/tache.service';


@Component({
  selector: 'app-graphe1',
  templateUrl: './graphe1.component.html',
  styleUrls: ['./graphe1.component.scss']
})
export class Graphe1Component implements OnInit {

  taches$: Observable<Tache[]>;
  taches: Tache[];
  maDonne: object;
  cnt1 = 0;
  cnt2 = 0;
  cnt3 = 0;
  cnt4 = 0;
  chart1 = {
    data : {
      labels: [],
      datasets: [{
        label: 'Non-définies',
        data: [],
        backgroundColor: 'transparent',
        borderColor: '#ff0066',
        borderWidth: 2
      },
        {
          label: 'Irratrapable',
          data: [],
          backgroundColor: 'transparent',
          borderColor: '#0099ff',
          borderWidth: 2
        },
        {
          label: 'On-time',
          data: [],
          backgroundColor: 'transparent',
          borderColor: '#00ff99',
          borderWidth: 2
        },
        {
          label: 'En retard',
          data: [],
          backgroundColor: 'transparent',
          borderColor: '#ff9900',
          borderWidth: 2
        }
      ]
    },
    options: {
      title: {
        display: false,
        text: 'Percentage Des Taches En Fonction Du Temps'
      },
      spanGaps: true,
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Percentage'
          },
          ticks: {
            fontColor: 'rgba(0,0,0,.6)',
            fontStyle: 'bold',
            beginAtZero: true,
            maxTicksLimit: 8,
            padding: 10,
            labelString: 'Percentage'
          }
        }]
      },
      responsive: true,
      legend: {
        position: 'bottom',
        display: true,
      },
    }
  };

  constructor(public tacheService: TacheService) {}

  ngOnInit() {
    this.reloadData();
    this.taches$.subscribe(data => this.taches = data);
    this.actualiser();
    this.chart1 = new Chart('chart-line',  {
      type: 'line',
      data: this.chart1.data,
      options: this.chart1.options
    });

  }

  actualiser() {
    this.reloadData();
    this.tacheService.getTaches2()
      .subscribe(
        data => {
          // console.log(data);
          this.maDonne = data;


          // C'est là ou je vais faire le traitement :



          for (let i = 0; i < data.valueOf().length; i++) {

            this.chart1.data.labels.push(this.maDonne[i].date);

            if (this.maDonne[i].etat.toString() === 'Non-définies') {
              this.chart1.data.datasets[0].data.push(this.maDonne[i].percentage);
              this.cnt1++;
            } else {
              this.chart1.data.datasets[0].data.push(null);
            }

            if (this.maDonne[i].etat.toString() === 'Irratrapable' || this.maDonne[i].etat.toString() === 'irratrapable') {
              this.chart1.data.datasets[1].data.push(this.maDonne[i].percentage);
              this.cnt2++;
            } else {
              this.chart1.data.datasets[1].data.push(null);
            }

            if (this.maDonne[i].etat.toString() === 'On-time' || this.maDonne[i].etat.toString() === 'on-time') {
              this.chart1.data.datasets[2].data.push(this.maDonne[i].percentage);
              this.cnt3++;
            } else {
              this.chart1.data.datasets[2].data.push(null);
            }

            if (this.maDonne[i].etat.toString() === 'En retard' || this.maDonne[i].etat.toString() === 'en retard') {
              this.chart1.data.datasets[3].data.push(this.maDonne[i].percentage);
              this.cnt4++;
            } else {
              this.chart1.data.datasets[3].data.push(null);
            }






          }

          console.log('le nombre de Non-définies est : ' + this.cnt1);
          console.log('le nombre de Irratrapable est : ' + this.cnt2);
          console.log('le nombre de On-time est : ' + this.cnt3);
          console.log('le nombre de En retard est : ' + this.cnt4);


          // Jusqu'à là

        },
        error => console.log('ERROR: ' + error));
  }
  reloadData() {
    this.taches$ = this.tacheService.getAllTaches();
  }
  updateLast10(chart) {
    this.chart1.data.labels = [];
    this.chart1.data.datasets[0].data = [];
    this.chart1.data.datasets[1].data = [];
    this.chart1.data.datasets[2].data = [];
    this.chart1.data.datasets[3].data = [];
    for (let i = 89; i < 100; i++) {
      this.chart1.data.labels.push(this.maDonne[i].date);
      if (this.maDonne[i].etat.toString() === 'Non-définies') {
        this.chart1.data.datasets[0].data.push(this.maDonne[i].percentage);
      } else {
        this.chart1.data.datasets[0].data.push(null);
      }

      if (this.maDonne[i].etat.toString() === 'Irratrapable' || this.maDonne[i].etat.toString() === 'irratrapable') {
        this.chart1.data.datasets[1].data.push(this.maDonne[i].percentage);
      } else {
        this.chart1.data.datasets[1].data.push(null);
      }
      if (this.maDonne[i].etat.toString() === 'On-time') {
        this.chart1.data.datasets[2].data.push(this.maDonne[i].percentage);
      } else {
        this.chart1.data.datasets[2].data.push(null);
      }

      if (this.maDonne[i].etat.toString() === 'En retard') {
        this.chart1.data.datasets[3].data.push(this.maDonne[i].percentage);

      } else {
        this.chart1.data.datasets[3].data.push(null);
      }




    }
    chart.update();
  }
  updateLast20(chart) {
    this.chart1.data.labels = [];
    this.chart1.data.datasets[0].data = [];
    this.chart1.data.datasets[1].data = [];
    this.chart1.data.datasets[2].data = [];
    this.chart1.data.datasets[3].data = [];

    for (let i = 79; i < 100; i++) {
      this.chart1.data.labels.push(this.maDonne[i].date);
      if (this.maDonne[i].etat.toString() === 'Non-définies') {
        this.chart1.data.datasets[0].data.push(this.maDonne[i].percentage);
      } else {
        this.chart1.data.datasets[0].data.push(null);
      }

      if (this.maDonne[i].etat.toString() === 'Irratrapable' || this.maDonne[i].etat.toString() === 'irratrapable') {

        this.chart1.data.datasets[1].data.push(this.maDonne[i].percentage);
      } else {
        this.chart1.data.datasets[1].data.push(null);
      }

      if (this.maDonne[i].etat.toString() === 'On-time') {

        this.chart1.data.datasets[2].data.push(this.maDonne[i].percentage);
      } else {
        this.chart1.data.datasets[2].data.push(null);
      }

      if (this.maDonne[i].etat.toString() === 'En retard') {
        this.chart1.data.datasets[3].data.push(this.maDonne[i].percentage);
      } else {
        this.chart1.data.datasets[3].data.push(null);
      }


    }
    chart.update();
  }
  updateLast30(chart) {
    this.chart1.data.labels = [];
    this.chart1.data.datasets[0].data = [];
    this.chart1.data.datasets[1].data = [];
    this.chart1.data.datasets[2].data = [];
    this.chart1.data.datasets[3].data = [];

    for (let i = 69; i < 100; i++) {
      this.chart1.data.labels.push(this.maDonne[i].date);
      if (this.maDonne[i].etat.toString() === 'Non-définies') {
        this.chart1.data.datasets[0].data.push(this.maDonne[i].percentage);
      } else {
        this.chart1.data.datasets[0].data.push(null);
      }

      if (this.maDonne[i].etat.toString() === 'Irratrapable' || this.maDonne[i].etat.toString() === 'irratrapable') {
        this.chart1.data.datasets[1].data.push(this.maDonne[i].percentage);
      } else {
        this.chart1.data.datasets[1].data.push(null);
      }

      if (this.maDonne[i].etat.toString() === 'On-time') {
        this.chart1.data.datasets[2].data.push(this.maDonne[i].percentage);
      } else {
        this.chart1.data.datasets[2].data.push(null);
      }

      if (this.maDonne[i].etat.toString() === 'En retard') {
        this.chart1.data.datasets[3].data.push(this.maDonne[i].percentage);
      } else {
        this.chart1.data.datasets[3].data.push(null);
      }

    }
    chart.update();
  }
  updateAll(chart) {
    this.chart1.data.labels = [];
    this.chart1.data.datasets[0].data = [];
    this.chart1.data.datasets[1].data = [];
    this.chart1.data.datasets[2].data = [];
    this.chart1.data.datasets[3].data = [];

    for (let i = 0; i < 100; i++) {
      this.chart1.data.labels.push(this.maDonne[i].date);
      if (this.maDonne[i].etat.toString() === 'Non-définies') {
        this.chart1.data.datasets[0].data.push(this.maDonne[i].percentage);
      } else {
        this.chart1.data.datasets[0].data.push(null);
      }

      if (this.maDonne[i].etat.toString() === 'Irratrapable' || this.maDonne[i].etat.toString() === 'irratrapable') {
        this.chart1.data.datasets[1].data.push(this.maDonne[i].percentage);
      } else {
        this.chart1.data.datasets[1].data.push(null);
      }

      if (this.maDonne[i].etat.toString() === 'On-time') {
        this.chart1.data.datasets[2].data.push(this.maDonne[i].percentage);
      } else {
        this.chart1.data.datasets[2].data.push(null);
      }

      if (this.maDonne[i].etat.toString() === 'En retard') {
        this.chart1.data.datasets[3].data.push(this.maDonne[i].percentage);
      } else {
        this.chart1.data.datasets[3].data.push(null);
      }

    }
    chart.update();
  }
  sync(chart) {
    chart.update();
  }


}
