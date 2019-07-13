import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BakeryService } from 'src/app/shared/services/bakery/bakery.service';
import { Router } from '@angular/router';
import { Layer, tileLayer, Map, control, latLng, LatLngBounds, latLngBounds, icon, marker } from 'leaflet';
import * as L from 'leaflet';
import { ZOOM, ATTRIBUTION } from 'src/app/shared/constant/app.constants';
import { MapService } from 'src/app/shared/services/map/map.service';
import '../../../../node_modules/leaflet.browser.print/dist/leaflet.browser.print.min.js';
import '../../../../node_modules/leaflet.coordinates/dist/Leaflet.Coordinates-0.1.5.src.js';
import { Bakery } from 'src/app/model/bakery.model.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page: number;
  pageSize = 10;
  bakeries: Bakery[] = [];
  totalBakeries = 0;
  loading = false;
  searchForm: FormGroup;

  get layers() { return this.mapService.layers; }
  get layersControl() { return this.mapService.layersControl; }
  get fitBounds() { return this.mapService.fitBounds; }

  options: any = {};

  constructor(private router: Router,
              private bakeryService: BakeryService,
              private mapService: MapService) {
    this.options[ATTRIBUTION] = false;
    this.options[ZOOM] = false;
  }

  onMapReady(map: Map) {
    map.addControl(
        control.attribution({
            position: 'bottomright',
            prefix: ''
        })
    );
    map.addControl(L.control.zoom({ position: 'topleft', zoomInTitle: 'Zoomer', zoomOutTitle: 'Dézoomer' }));
    L.control.coordinates({ position: 'topright',
                            labelTemplateLat: 'Lat: {y}',
                            labelTemplateLng: 'Lon: {x}'
                          }).addTo(map);
    /*L.control.browserPrint({ title: 'Imprimer la carte',
                             mode: {
                               Portrait: 'Portrait',
                               Landscape: 'Paysage',
                               Auto: 'Auto',
                               Custom: 'Séléctionnez la zone'
                             }
                           }).addTo(map);*/
    L.control.scale({ position: 'bottomleft', maxWidth: 100, metric: true, imperial: false, updateWhenIdle: false }).addTo(map);
  }

  ngOnInit() {
    this.page = 1;
    this.totalBakeries = 0;
    this.search();
  }

  get f() {
    return this.searchForm.controls;
  }

  search() {
    const searchPage = this.page - 1;
    this.totalBakeries = 0;
    this.loading = true;
    this.bakeryService.searchBakeries(searchPage, this.pageSize).subscribe(
      page => {
        this.bakeries = page.Items;
        this.totalBakeries = page.ScannedCount;
        const markers = this.bakeries.map((m: Bakery) => this.markersMap(m) );
        this.mapService.model.overlayLayers = this.mapService.model.overlayLayers.concat(markers);
        this.mapService.fitBounds = latLngBounds((this.bakeries.map((bakery: Bakery) => [ bakery.lat, bakery.lon] )));
        this.mapService.apply();
        this.loading = false;
      },
      () => this.router.navigate(['/error/server']),
      () => this.loading = false
    );
  }

  markersMap(m: Bakery): any {
    const mm = marker([ m.lat, m.lon ], {
      icon: icon({
        iconSize: [ 32, 32 ],
        iconUrl: './assets/bakery32.png'
      })
    });
    mm.on('add', () => { mm.bindTooltip(this.getInnerHtmlPopup(m.name, String(m.lat), String(m.lon), '0'));
    });
    return ({ id: m.id,
      name: m.name,
      enabled: true,
      layer: mm
    });
  }

  getInnerHtmlPopup(name: string, lat: string, lon: string, radius: string): string {
    let popupMessage = '<strong>Boulangerie: </strong>' + name;
    popupMessage += '<br><strong>Latitude: </strong>' + lat;
    popupMessage += '<br><strong>Longitude: </strong>' + lon;
    if (radius !== '0') {
      popupMessage += '<br><strong>Rayon: </strong>' + radius + ' m';
    }
    return popupMessage;
  }

}
