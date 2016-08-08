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
var router_1 = require('@angular/router');
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'header',
            template: "\n        <!-- Navigation -->\n        <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n            <div class=\"container\">\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n                        <span class=\"sr-only\">Toggle navigation</span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                        <span class=\"icon-bar\"></span>\n                    </button>\n                    <a class=\"navbar-brand\" [routerLink]=\"['/main']\">Find-A-Lens</a>\n                </div>\n\n                <!-- Collect the nav links, forms, and other content for toggling -->\n                <div class=\"collapse navbar-collapse navbar-ex1-collapse\">\n                    <ul class=\"nav navbar-nav\">\n                        <!-- Hidden li included to remove active class from about link when scrolled up past about section -->\n                        <li class=\"hidden\">\n                            <a ui-sref=\"home\">Home</a>\n                        </li>\n                        <li>\n                            <a ui-sref=\"canon\" ui-sref-active=\"active\">Canon</a>\n                        </li>\n                        <li>\n                            <a ui-sref=\"nikon\" ui-sref-active=\"active\">Nikon</a>\n                        </li>\n                        <li>\n                            <a href=\"/sony\">Sony</a>\n                        </li>\n                    </ul>\n<!--                    <button type=\"button\" ng-click=\"clickToOpen()\" class=\"btn navbar-btn pull-right\">Login</button>-->\n<!--                    <button type=\"button\" ng-click=\"\" class=\"btn navbar-btn btn-default pull-right\"><a href=\"/lenses\">Lenses</a></button>-->\n                    <p class=\"navbar-text navbar-right\"><a [routerLink]=\"['/lens-admin']\" class=\"navbar-link\">View Lenses</a></p>\n                </div>\n                <!-- /.navbar-collapse -->\n            </div>\n            <!-- /.container -->\n        </nav>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUErQ3BEO0lBQ0k7SUFBZ0IsQ0FBQztJQUVqQixrQ0FBUSxHQUFSLGNBQWEsQ0FBQztJQWhEbEI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSw2cUVBdUNUO1lBQ0QsVUFBVSxFQUFFLENBQUMsMEJBQWlCLENBQUM7U0FDbEMsQ0FBQzs7dUJBQUE7SUFNRixzQkFBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBTFksdUJBQWUsa0JBSzNCLENBQUEiLCJmaWxlIjoiY29tbW9uL2hlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnaGVhZGVyJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8IS0tIE5hdmlnYXRpb24gLS0+XG4gICAgICAgIDxuYXYgY2xhc3M9XCJuYXZiYXIgbmF2YmFyLWRlZmF1bHQgbmF2YmFyLWZpeGVkLXRvcFwiIHJvbGU9XCJuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmJhci1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJuYXZiYXItdG9nZ2xlIGNvbGxhcHNlZFwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIi5uYXZiYXItZXgxLWNvbGxhcHNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Ub2dnbGUgbmF2aWdhdGlvbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbi1iYXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tYmFyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uLWJhclwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgW3JvdXRlckxpbmtdPVwiWycvbWFpbiddXCI+RmluZC1BLUxlbnM8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8IS0tIENvbGxlY3QgdGhlIG5hdiBsaW5rcywgZm9ybXMsIGFuZCBvdGhlciBjb250ZW50IGZvciB0b2dnbGluZyAtLT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlIG5hdmJhci1leDEtY29sbGFwc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdmJhci1uYXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gSGlkZGVuIGxpIGluY2x1ZGVkIHRvIHJlbW92ZSBhY3RpdmUgY2xhc3MgZnJvbSBhYm91dCBsaW5rIHdoZW4gc2Nyb2xsZWQgdXAgcGFzdCBhYm91dCBzZWN0aW9uIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdWktc3JlZj1cImhvbWVcIj5Ib21lPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB1aS1zcmVmPVwiY2Fub25cIiB1aS1zcmVmLWFjdGl2ZT1cImFjdGl2ZVwiPkNhbm9uPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB1aS1zcmVmPVwibmlrb25cIiB1aS1zcmVmLWFjdGl2ZT1cImFjdGl2ZVwiPk5pa29uPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3NvbnlcIj5Tb255PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbjwhLS0gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG5nLWNsaWNrPVwiY2xpY2tUb09wZW4oKVwiIGNsYXNzPVwiYnRuIG5hdmJhci1idG4gcHVsbC1yaWdodFwiPkxvZ2luPC9idXR0b24+LS0+XG48IS0tICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBuZy1jbGljaz1cIlwiIGNsYXNzPVwiYnRuIG5hdmJhci1idG4gYnRuLWRlZmF1bHQgcHVsbC1yaWdodFwiPjxhIGhyZWY9XCIvbGVuc2VzXCI+TGVuc2VzPC9hPjwvYnV0dG9uPi0tPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIm5hdmJhci10ZXh0IG5hdmJhci1yaWdodFwiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL2xlbnMtYWRtaW4nXVwiIGNsYXNzPVwibmF2YmFyLWxpbmtcIj5WaWV3IExlbnNlczwvYT48L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPCEtLSAvLm5hdmJhci1jb2xsYXBzZSAtLT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLSAvLmNvbnRhaW5lciAtLT5cbiAgICAgICAgPC9uYXY+XG4gICAgYCxcbiAgICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
