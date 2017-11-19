import { TemplateRef, Component, Input, ContentChildren, QueryList, AfterViewInit, ChangeDetectorRef } from "@angular/core";

import { DashboardWidgetDirective } from "./dashboard-widget.directive";
import { BehaviorSubject } from "rxjs/BehaviorSubject";


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements AfterViewInit {
    @Input() title: string;
    
    @ContentChildren(DashboardWidgetDirective)
    widgets: QueryList<DashboardWidgetDirective>

    orderedWidgets: DashboardWidgetDirective[] = [];

    constructor(private cd: ChangeDetectorRef) {}

    ngAfterViewInit() {
        this.orderWidgets();
        this.widgets.changes.subscribe(w => this.orderWidgets());
    }

    orderWidgets() {
        this.orderedWidgets = this.widgets
            .toArray()
            .sort((a, b) => a.position < b.position ? -1 : 1)
        this.cd.detectChanges();
        this.cd.markForCheck();
    }
}