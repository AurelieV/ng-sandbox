import { SimpleChanges, OnChanges, Component, Input, ViewChild, Renderer2, ElementRef } from "@angular/core";


@Component({
    selector: 'widget1',
    template: `<div>Widget 1 with <span #text>{{config}} color</span></div>`
})
export default class Widget1Component implements OnChanges {
    @Input() config;
    @ViewChild("text", { read: ElementRef }) text: ElementRef;

    constructor(private renderer: Renderer2) {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes.config) {
            if (this.text) {
                this.renderer.setStyle(this.text.nativeElement, 'color', this.config)
            }
        }
    }
}