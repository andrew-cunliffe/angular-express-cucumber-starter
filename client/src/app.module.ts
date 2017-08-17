import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MdButtonModule, MdListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DemoService } from './demo.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        FlexLayoutModule,
        MdButtonModule,
        MdListModule
    ],
    providers: [DemoService],
    bootstrap: [AppComponent]
})

export class AppModule {
}
