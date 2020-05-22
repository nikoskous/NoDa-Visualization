import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { QuoteService } from './quote.service';
import { Ng5SliderModule } from 'ng5-slider';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  imports: [CommonModule, TranslateModule, LeafletModule, Ng5SliderModule, CoreModule, SharedModule, HomeRoutingModule],
  declarations: [HomeComponent],
})
export class HomeModule {}
