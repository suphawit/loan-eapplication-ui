import { Component, OnInit } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private translate: TranslateService
    ) {
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('th');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use('th');
    }

    ngOnInit(): void {
        console.log('I:--START--:--OnLoad AppComponent--');
        this.init();
    }

    private init(): void {
    }
}
