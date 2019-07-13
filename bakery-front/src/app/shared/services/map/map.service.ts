import { Injectable } from '@angular/core';
import { circle, icon, latLng, Layer, marker, polyline, point, tileLayer, latLngBounds, LatLngBounds, LatLng} from 'leaflet';
import { LeafletLayers } from 'src/app/model/layers.model';


@Injectable()
export class MapService {

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
    name: 'Satellite',
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
    layer: tileLayer('http://{s}.google.com/vt/lyrs=t&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      attribution: 'Terrain',
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
    })
  };

  layers: Layer[];
  layersControl: any = {
    baseLayers: {
      Route: this.LAYER_GM_STREET.layer,
      Satellite: this.LAYER_GM_SATELLITE.layer,
      Terrain: this.LAYER_GM_TERRAIN.layer,
      OpenStreetMap: this.LAYER_OSM.layer
    }
  };
  fitBounds: LatLngBounds;

  model = new LeafletLayers(
    [this.LAYER_GM_STREET, this.LAYER_GM_SATELLITE, this.LAYER_GM_TERRAIN, this.LAYER_OSM ],
    this.LAYER_GM_STREET.id,
    []
  );

  constructor() {}

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
