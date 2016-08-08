/// <reference path="../../typings/index.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from './app.component';
import { LensAdminService } from './admin/lens-admin.service';

import { APP_ROUTER_PROVIDERS } from './routes.app';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    LensAdminService,
    provide(LocationStrategy, {useClass: HashLocationStrategy}), 
    HTTP_PROVIDERS, 
    disableDeprecatedForms(), 
    provideForms()
])
.catch(err => console.error(err));