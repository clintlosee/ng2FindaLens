"use strict";
var router_1 = require('@angular/router');
var main_component_1 = require('./main/main.component');
var lens_admin_component_1 = require('./admin/lens-admin.component');
var brand_choice_component_1 = require('./lens/brand-choice.component');
var photo_style_component_1 = require('./lens/photo-style.component');
var appRoutes = [
    { path: '', component: main_component_1.MainComponent },
    { path: 'main', component: main_component_1.MainComponent },
    { path: 'lens-admin', component: lens_admin_component_1.LensAdminComponent },
    { path: 'camera-choice', component: brand_choice_component_1.BrandChoiceComponent },
    { path: 'photo-style/:brand', component: photo_style_component_1.PhotoStyleComponent },
    { path: '**', component: main_component_1.MainComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0aW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQUV2RCwrQkFBOEIsdUJBQXVCLENBQUMsQ0FBQTtBQUN0RCxxQ0FBbUMsOEJBQThCLENBQUMsQ0FBQTtBQUNsRSx1Q0FBcUMsK0JBQStCLENBQUMsQ0FBQTtBQUNyRSxzQ0FBb0MsOEJBQThCLENBQUMsQ0FBQTtBQUVuRSxJQUFNLFNBQVMsR0FBVztJQUN0QixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDdEMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0lBQzFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUseUNBQWtCLEVBQUU7SUFDckQsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSw2Q0FBb0IsRUFBRTtJQUMxRCxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7SUFDOUQsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0NBQzNDLENBQUM7QUFFVywyQkFBbUIsR0FBVSxFQUV6QyxDQUFDO0FBRVcsZUFBTyxHQUFHLHFCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC5yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gZnJvbSAnLi9tYWluL21haW4uY29tcG9uZW50JztcbmltcG9ydCB7IExlbnNBZG1pbkNvbXBvbmVudCB9IGZyb20gJy4vYWRtaW4vbGVucy1hZG1pbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnJhbmRDaG9pY2VDb21wb25lbnQgfSBmcm9tICcuL2xlbnMvYnJhbmQtY2hvaWNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQaG90b1N0eWxlQ29tcG9uZW50IH0gZnJvbSAnLi9sZW5zL3Bob3RvLXN0eWxlLmNvbXBvbmVudCc7XG5cbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogJycsIGNvbXBvbmVudDogTWFpbkNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ21haW4nLCBjb21wb25lbnQ6IE1haW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdsZW5zLWFkbWluJywgY29tcG9uZW50OiBMZW5zQWRtaW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6ICdjYW1lcmEtY2hvaWNlJywgY29tcG9uZW50OiBCcmFuZENob2ljZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ3Bob3RvLXN0eWxlLzpicmFuZCcsIGNvbXBvbmVudDogUGhvdG9TdHlsZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJyoqJywgY29tcG9uZW50OiBNYWluQ29tcG9uZW50IH1cbl07XG5cbmV4cG9ydCBjb25zdCBhcHBSb3V0aW5nUHJvdmlkZXJzOiBhbnlbXSA9IFtcblxuXTtcblxuZXhwb3J0IGNvbnN0IHJvdXRpbmcgPSBSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
