import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  paramValue1 = 'John';
  paramValue2 = 'Patricia';

  stringInCode: string;

  constructor(private translate: TranslateService) {}

  async ngOnInit() {
    await this.translate.use('en').toPromise();
    this.stringInCode = this.translate.instant('TEXT', {
      value1: this.paramValue1,
      value2: this.paramValue2,
    });
  }
}
