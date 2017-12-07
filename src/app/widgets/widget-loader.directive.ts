import { Input, ComponentRef, OnChanges, SimpleChanges, Directive, ComponentFactoryResolver, ViewContainerRef } from "@angular/core";

import {CONFIGURATION} from './widget-configuration';

@Directive({
    selector: '[widget-loader]'
})
export class WidgetLoaderDirective implements OnChanges {
    @Input() type: string;
    @Input() config: any;
    componentRef: ComponentRef<any>;

    constructor(
        private resolver: ComponentFactoryResolver,
        private container: ViewContainerRef
    ) {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes.type) {
            if (this.componentRef) this.componentRef.destroy();
            const component = CONFIGURATION[this.type].default;
            const factory = this.resolver.resolveComponentFactory<any>(component);
            this.componentRef = this.container.createComponent(factory);
            this.handleConfigChange(changes);
        } else if (changes.config) {
            this.handleConfigChange(changes);
        }
    }

    handleConfigChange(changes: SimpleChanges) {
        this.componentRef.instance.config = this.config;
        this.componentRef.instance.ngOnChanges({ config: changes.config });
    }
}