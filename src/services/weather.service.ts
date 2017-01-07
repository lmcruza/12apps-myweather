import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

    apiKey: string;
    conditionsUrl: string;

    constructor(private _http:Http) {
        this.apiKey = '5608835fb43bfd01';
        this.conditionsUrl = 'http://api.wunderground.com/api/'+this.apiKey+'/conditions/q';
    }

    getWeather(city, state){
        return this._http.get(this.conditionsUrl+'/'+state+'/'+city+'.json')
            .map(res => res.json());
    }
}