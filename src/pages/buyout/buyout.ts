import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-buyout',
    templateUrl: 'buyout.html',
})
export class BuyoutPage {
    constructor(private navParams: NavParams,
                private navCtrl:NavController) {
                    this.product = this.navParams.get('productName');
                }
    
    goHome() {
        this.navCtrl.popToRoot();
    }
}