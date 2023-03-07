import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-svg',
  templateUrl: './ui-svg.component.svg',
  styleUrls: ['./ui-svg.component.css']
})
export class UiSvgComponent {

  fill = "rgb(255, 0, 0)";

  public changeColor() {
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    this.fill = `rgb(${r}, ${g}, ${b})`;
  }
}
