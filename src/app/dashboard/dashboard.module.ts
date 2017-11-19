import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DashboardWidgetDirective } from './dashboard-widget.directive';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DashboardComponent,
        DashboardWidgetDirective
    ],
    exports: [
        DashboardComponent,
        DashboardWidgetDirective
    ]
})
export class DashboardModule {}