import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

    apiKey: string;
    conditionsUrl: string;
    searchUrl: string;

    constructor(private _http:Http) {
        this.apiKey = '5608835fb43bfd01';
        this.conditionsUrl = 'http://localhost:8100/api/'+this.apiKey+'/conditions/q';
        this.searchUrl = 'http://localhost:8100/search/aq?query=';
    }

    getWeather(city, state){
        return this._http.get(this.conditionsUrl+'/'+state+'/'+city+'.json')
            .map(res => res.json());
    }

    searchCities(searchStr){
        return this._http.get(this.searchUrl+''+searchStr)
            .map(res => res.json());
    }
}