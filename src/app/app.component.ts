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

  @ViewChild("dashboard1", { read: DashboardComponent })
  dashboard1: DashboardComponent;
  
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

}
