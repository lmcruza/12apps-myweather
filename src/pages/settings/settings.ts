import { Component, OnInit } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { WeatherService } from '../../services/weather.service';

import { WeatherPage } from '../weather/weather'; 

@Component({
    selector: 'settings-page',
    templateUrl: 'settings.html',
    providers: [WeatherService]
})
export class SettingsPage implements OnInit {

    searchStr: string;
    defaultCity: any;
    results: any[];

    constructor(public navCtrl: NavController, private _weatherService:WeatherService) {
        this.getDefaultCity();
    }

    ngOnInit() {
        this.getDefaultCity();
    }

    getQuery(){
        this._weatherService.searchCities(this.searchStr)
            .subscribe(res => {
                this.results = res.RESULTS;
            });
    }

    getDefaultCity(){
        if (localStorage.getItem('city') !== null){
            this.defaultCity = JSON.parse(localStorage.getItem('city')).name;
        } else {
            this.defaultCity = '';
        }
    }

    setDefaultCity(city){
        this.results = [];
        if (typeof(Storage) !== "undefined"){
            localStorage.setItem('city', JSON.stringify(city));
            this.searchStr = city.name;
            this.getDefaultCity();
        } else {
            console.log('LocalStorage Not Supported');
        }
    }

    saveChanges(){
        this.navCtrl.parent.select(0);
        //this.navCtrl.setRoot(WeatherPage);
    }
}