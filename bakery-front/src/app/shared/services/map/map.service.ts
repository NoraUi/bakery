import { Injectable } from '@angular/core';
import { circle, icon, latLng, Layer, marker, polyline, point, tileLayer, latLngBounds, LatLngBounds, LatLng} from 'leaflet';
import { LeafletLayers } from 'src/app/model/layers.model';


@Injectable()
export class MapService {

  ignSat: string;
  ignCad: string;

  private LAYER_OSM = {
    id: 'openstreetmap',
    name: 'Open Street Map',
    enabled: false,
    layer: tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Open Street Map'
    })
  };
  private LAYER_GM_STREET = {
    id: 'googlestreetmaps',
    name: 'Route',
    enabled: false,
    layer: tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      attribution: 'Route',
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    })
  };
  private LAYER_GM_SATELLITE = {
    id: 'googlesatellitemaps',
    name: 'Google Satellite',
    enabled: false,
    layer: tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      attribution: 'Satellite',
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    })
  };
  private LAYER_GM_TERRAIN = {
    id: 'googlestreetmaps',
    name: 'Terrain',
    enabled: false,
    layer: tileLayer('http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      attribution: 'Terrain',
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    })
  };

  private LAYER_IGN_SATELLITE: any;
  private LAYER_IGN_CADASTRAL: any;

  layers: Layer[];
  layersControl: any;
  fitBounds: LatLngBounds;
  model: LeafletLayers;

  constructor() {
    const ign = 'https://wxs.ign.fr/an7nvfzojv5wa96dsga5nk8w/geoportail/wmts?';
    const ignEnd = '&tilematrixset=PM&tilematrix={z}&tilecol={x}&tilerow={y}';
    this.ignSat = ign + 'layer=ORTHOIMAGERY.ORTHOPHOTOS';
    this.ignCad = ign + 'layer=CADASTRALPARCELS.PARCELS';

    this.ignSat = this.ignSat + '&style=normal';
    this.ignSat = this.ignSat + '&tilematrixset=PM';
    this.ignSat = this.ignSat + '&Service=WMTS';
    this.ignSat = this.ignSat + '&Request=GetTile';
    this.ignSat = this.ignSat + '&Version=1.0.0';
    this.ignSat = this.ignSat + '&Format=image%2Fjpeg' + ignEnd;

    this.ignCad = this.ignCad + '&style=bdparcellaire';
    this.ignCad = this.ignCad + '&tilematrixset=PM';
    this.ignCad = this.ignCad + '&Service=WMTS';
    this.ignCad = this.ignCad + '&Request=GetTile';
    this.ignCad = this.ignCad + '&Version=1.0.0';
    this.ignCad = this.ignCad + '&Format=image%2Fpng' + ignEnd;

    this.LAYER_IGN_SATELLITE = {
      id: 'ignsatelite',
      name: 'IGN Satelite',
      enabled: false,
      layer: tileLayer(this.ignSat, {
        maxZoom: 20,
        attribution: 'IGN'
      })
    };

    this.LAYER_IGN_CADASTRAL = {
      id: 'igncadastre',
      name: 'Terrain',
      enabled: false,
      layer: tileLayer(this.ignCad, {
        maxZoom: 20,
        attribution: 'Cadastre'
      })
    };

    this.layersControl = {
      baseLayers: {
        Route: this.LAYER_GM_STREET.layer,
        Google: this.LAYER_GM_SATELLITE.layer,
        IGN: this.LAYER_IGN_SATELLITE.layer,
        Terrain: this.LAYER_GM_TERRAIN.layer,
        OpenStreetMap: this.LAYER_OSM.layer
      },
      overlays: {Cadastre: this.LAYER_IGN_CADASTRAL.layer}
    };

    this.model = new LeafletLayers(
      [this.LAYER_GM_STREET, this.LAYER_GM_SATELLITE, this.LAYER_GM_TERRAIN, this.LAYER_OSM],
      this.LAYER_GM_STREET.id,
      [this.LAYER_IGN_CADASTRAL]
    );

  }

  apply(): void {
    // Get the active base layer
    const baseLayer = this.model.baseLayers.find((l: any) => (l.id === this.model.baseLayer));
    // Get all the active overlay layers
    const newLayers = this.model.overlayLayers
      .filter((l: any) => l.enabled)
      .map((l: any) => l.layer);
    if (baseLayer !== undefined) {
      newLayers.unshift(baseLayer.layer);
    }
    this.layers = newLayers;
  }

}
