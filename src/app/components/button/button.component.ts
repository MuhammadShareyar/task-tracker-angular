import { NgStyle } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [NgStyle],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  color = input('');
  text = input('');
  btnClick = output();

  onClick() {
    this.btnClick.emit();
  }
}
