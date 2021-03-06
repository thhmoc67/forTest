"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var nav_route_module_1 = require('./nav-route.module');
var app_component_1 = require('./app.component');
var header_component_1 = require('./header.component');
var home_component_1 = require('./home.component');
var Error404_component_1 = require('./Error404.component');
var freeTemplate_component_1 = require('./freeTemplate.component');
var premiumTemplate_component_1 = require('./premiumTemplate.component');
var footer_component_1 = require('./footer.component');
var loaders_component_1 = require("./loaders.component");
var home_module_1 = require('./home/home.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                home_module_1.HomeModule,
                nav_route_module_1.AppRoutingModule
            ],
            declarations: [loaders_component_1.LoadersComponent,
                app_component_1.AppComponent,
                app_component_1.TasksComponent,
                header_component_1.HeadercompComponent,
                home_component_1.HomeComponent,
                freeTemplate_component_1.freeTemplateComponent,
                premiumTemplate_component_1.premiumTemplateComponent,
                Error404_component_1.pageNotFoundComponent,
                footer_component_1.FooterComponent,
            ],
            bootstrap: [
                app_component_1.AppComponent,
                app_component_1.TasksComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map