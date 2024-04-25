import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomeComponent} from './home/home.component';
import {DiningRoomComponent} from './dining-room/dining-room.component';
import {BathroomComponent} from './bathroom/bathroom.component';
import {GarageComponent} from './garage/garage.component';
import {HeatPumpComponent} from './heat-pump/heat-pump.component';
import {LaundryRoomComponent} from './laundry-room/laundry-room.component';
import {PoolComponent} from './pool/pool.component';
import {ForceButtonComponent} from './components/force-button/force-button.component';
import {TimerComponent} from './components/timer/timer.component';
import {LogComponent} from './components/log/log.component';
import {NgOptimizedImage} from "@angular/common";
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatIcon} from "@angular/material/icon";
import {AdminComponent} from './admin/admin.component';
import {SetTimeComponent} from './admin/set-time/set-time.component';
import {InstructionsComponent} from './components/instructions/instructions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DiningRoomComponent,
    BathroomComponent,
    GarageComponent,
    HeatPumpComponent,
    LaundryRoomComponent,
    PoolComponent,
    TimerComponent,
    LogComponent,
    AdminComponent,
    SetTimeComponent,
    InstructionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgOptimizedImage,
    ForceButtonComponent,
    ForceButtonComponent,
    MatIcon,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {
}
