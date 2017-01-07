import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';

@Component({
    selector: 'weather-page',
    templateUrl: 'weather.html',
    providers: [WeatherService]
})
export class WeatherPage implements OnInit {

    zmw: string;
    weather: any;
    searchStr: string;
    results: any[];
    
    constructor(private _weatherService:WeatherService) {
    }

    ngOnInit() {
        this.getDefaultCity();
        this._weatherService.getWeather(this.zmw)
            .subscribe(weather => {
                this.weather = weather.current_observation;
            })
    }

    getQuery(){
        this._weatherService.searchCities(this.searchStr)
            .subscribe(res => {
                this.results = res.RESULTS;
            })
    }

    chooseCity(city){
        this.results = [];
        this.searchStr = '';
        this._weatherService.getWeather(city.zmw)
            .subscribe(weather => {
                this.weather = weather.current_observation;
            })
    }

    getDefaultCity(){
        this.zmw = '00000.1.08221';
    }
}