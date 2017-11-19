import { Output, Input, EventEmitter, Directive, TemplateRef } from "@angular/core";


@Directive({
    selector: '[dashboard-widget]'
})
export class DashboardWidgetDirective {
    @Input() position: number;
    @Output() onMoveRightClick = new EventEmitter();
    @Output() onMoveLeftClick = new EventEmitter();

    constructor(public templateRef: TemplateRef<any>) {}
}