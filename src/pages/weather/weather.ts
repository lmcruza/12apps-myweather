import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';

@Component({
    selector: 'weather-page',
    templateUrl: 'weather.html',
    providers: [WeatherService]
})
export class WeatherPage implements OnInit {

    state: string;
    city: string;
    weather: any;
    searchStr: string;
    results: any[];
    
    constructor(private _weatherService:WeatherService) {
        this.state = 'MA';
        this.city = 'Boston';
    }

    ngOnInit() {
        this._weatherService.getWeather(this.city, this.state)
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
}