import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import * as L from 'leaflet';
import { Options } from 'ng5-slider';

import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-shadow.png';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data = [
    {
      id: 1,
      lat: -27.3641383333,
      lon: 153.176081667,
      time: '2019-09-07T00:07:54Z',
    },
    {
      id: 2,
      lat: -27.336745,
      lon: 153.190841667,
      time: '2019-09-07T01:09:52Z',
    },
    {
      id: 3,
      lat: -27.336745,
      lon: 153.190841667,
      time: '2019-09-07T01:09:52Z',
    },
    {
      id: 4,
      lat: -27.148075,
      lon: 153.350708333,
      time: '2019-09-07T02:09:58Z',
    },
    {
      id: 5,
      lat: -26.915405,
      lon: 153.19185,
      time: '2019-09-07T03:09:58Z',
    },
    {
      id: 6,
      lat: -26.7047333333,
      lon: 153.182855,
      time: '2019-09-07T04:09:59Z',
    },
    {
      id: 7,
      lat: -26.4476166667,
      lon: 153.338056667,
      time: '2019-09-07T05:14:57Z',
    },
    {
      id: 8,
      lat: -26.1195666667,
      lon: 153.46412,
      time: '2019-09-07T06:19:57Z',
    },
  ];

  value: number = 100;
  opt: Options = {
    floor: 0,
    ceil: 10,
    ticksArray: [0, 10, 25, 50, 100],
  };
  map: L.Map;
  layers: Array<any> = [];
  options = {
    layers: [
      L.tileLayer(
        'https://api.mapbox.com/styles/v1/nikoskous/ckaid0c1y0sw21ipamlvgkzqt/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoibmlrb3Nrb3VzIiwiYSI6ImNrMnRjajM5NDBxZXczbXA1YmxueGdhcmMifQ.O0Fz93cltHQ10OfqGBS7FQ',
        { maxZoom: 18, attribution: '...' }
      ),
    ],
    zoom: 4,
    center: L.latLng(-27.750998, 127.581219),
  };

  constructor() {}

  ngOnInit() {
    const length = this.data.length;
    console.log(length);
    this.opt.floor = new Date(this.data[0]['time']).getTime();
    this.opt.ceil = new Date(this.data[length - 1]['time']).getTime();

    this.opt.ticksArray = [];

    this.data.forEach((position) => {
      this.opt.ticksArray.push(new Date(position.time).getTime());
    });
  }

  onMapReady(map: L.Map) {
    this.map = map;
  }

  playSpatioTemporal() {
    this.value = this.opt.floor;
    let i = 0;
    this.data.forEach((el) => {
      i++;
      setTimeout(() => {
        const lat = el.lat;
        const lon = el.lon;
        const time = el.time;

        // console.log(this.latlngsPolyline);
        this.layers = [];
        this.map.setZoom(7);
        this.map.panTo(new L.LatLng(lat, lon));
        this.layers.push(
          L.marker([lat, lon], {
            // icon: this.greenIcon
          })
          // .bindPopup(
          //   `<div>CraftID: ` +
          //     craftID +
          //     `</div>` +
          //     `<div>TimeStamp: ` +
          //     TimeStamp +
          //     `</div>` +
          //     `<div>Speed: ` +
          //     Speed +
          //     `</div>`
          // )
        );
        this.value = new Date(time).getTime();
      }, i * 500);
    });
  }
}
