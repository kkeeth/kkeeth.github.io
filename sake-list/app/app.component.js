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
var sake_list_1 = require('./sake-list');
var AppComponent = (function () {
    function AppComponent() {
        this.sakes = sake_list_1.SAKES;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"card-table mdl-shadow--3dp mdl-grid\">\n      <div align=\"center\" class=\"mdl-cell mdl-cell--12-col-phone mdl-cell--12-col-tablet mdl-cell--12-col-desktop\">\n        <p>\u81EA\u5206\u304C\u4ECA\u307E\u3067\u98F2\u3093\u3067\u304D\u305F\u65E5\u672C\u9152\u306E\u30EA\u30B9\u30C8\u3067\u3059\uFF01</p>\n        <table class=\"mdl-data-table mdl-js-data-table mdl-shadow--2dp\">\n          <thead>\n            <tr>\n              <th align=\"center\">#</th>\n              <th align=\"center\">\u304A\u9152\u306E\u540D\u524D</th>\n              <th align=\"center\">\u7279\u5B9A\u540D\u79F0</th>\n              <th align=\"center\">\u7CBE\u7C73\u6B69\u5408</th>\n              <th align=\"center\">\u7518\u8F9B\u5EA6</th>\n              <th align=\"center\">\u8A55\u4FA1\uFF085\u6BB5\u968E\uFF09</th>\n              <th align=\"center\">\u8A73\u7D30</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let sake of sakes\">\n              <td>{{ sake.id }}</td>\n              <td>{{ sake.name }}</td>\n              <td>{{ sake.sp_name }}</td>\n              <td>{{ sake.rice_per }}</td>\n              <td>{{ sake.salty_sweet }}</td>\n              <td>{{ sake.assessment }}%</td>\n              <td>{{ sake.detail }}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map