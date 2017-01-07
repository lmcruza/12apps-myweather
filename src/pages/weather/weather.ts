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
    
    constructor(private _weatherService:WeatherService) {
        this.state = 'MA';
        this.city = 'Boston';
    }

    ngOnInit() {
        this._weatherService.getWeather(this.city, this.state)
            .subscribe(weather => {
                console.log(weather);
            })
    }
}