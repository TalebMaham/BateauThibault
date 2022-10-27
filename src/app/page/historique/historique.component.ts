import { Component, OnInit } from '@angular/core';
declare var google:any;
@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    google.charts.load('current', {packages: ['corechart']});
    google.charts.setOnLoadCallback(this.drawChart);
  }
  drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['mois', 'Sales'],
      ['1',  1000],
      ['2',  1170],
      ['3',  200],
      ['12',  150],
 
    ]);

    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }

}
