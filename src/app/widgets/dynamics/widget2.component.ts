import { SimpleChanges, OnChanges, Component, Input, ViewChild, Renderer2, ElementRef } from "@angular/core";


@Component({
    selector: 'widget2',
    template: `<div>Widget 2 with <span #text>{{config}} size</span></div>`
})
export default class Widget2Component implements OnChanges {
    @Input() config: string;
    @ViewChild("text", { read: ElementRef }) text: ElementRef;

    constructor(private renderer: Renderer2) {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes.config) {
            if (this.text) {
                this.renderer.setStyle(this.text.nativeElement, 'font-size', this.config);
            }
        }
    }
}