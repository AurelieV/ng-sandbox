import { DashboardComponent } from './dashboard/dashboard.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widgets = [
    { title: 'Widget1', position: 1 },
    { title: 'Widget2', position: 2 }
  ]
  widgets2 = [
    { type: 'widget1', position: 1, config: 'red' },
    { type: 'widget2', position: 2, config: '10px' }
  ];
  
  addWidget() {
    const position = this.widgets.length + 1;
    this.widgets = this.widgets.concat({
      title: `Widget ${position}`,
      position
    });
  }

  move(index: number, delta: 1 | -1) {
    // Here i don't want to rely on array index on widgets, to prove that order is not important
    // So we update the position property instead
    const position = this.widgets[index].position;
    if ((delta === 1 && position !== this.widgets.length) || (delta === -1 && position !== 1)) {
      this.widgets.forEach((w, i) => {
        if (w.position === position) {
          this.widgets[i] = {...w, position: position + delta };
        } else if (w.position === position + delta) {
          this.widgets[i] = {...w, position };
        }
      })
    }
  }

  addWidget1(color: string) {
    this.widgets2 = this.widgets2.concat({
      type: 'widget1',
      config: color,
      position: this.widgets2.length + 1
    });
  }

  addWidget2(size: string) {
    this.widgets2 = this.widgets2.concat({
      type: 'widget2',
      config: size,
      position: this.widgets2.length + 1
    });
  }

  updateConfig(i: number, config: string) {
    this.widgets2[i] = { ...this.widgets2[i], config }
  }

}
