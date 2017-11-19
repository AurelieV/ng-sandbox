import { NgModule } from "@angular/core";
// Directives
import { WidgetLoaderDirective } from "./widget-loader.directive";

// Components
import Widget1Component from "./dynamics/widget1.component";
import Widget2Component from "./dynamics/widget2.component";

const widgets = [ Widget1Component, Widget2Component ];

@NgModule({
    declarations: [
        ...widgets,
        WidgetLoaderDirective
    ],
    exports: [
        WidgetLoaderDirective
    ],
    entryComponents: widgets
})
export class WidgetsModule {}