import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import {ButtonComponent} from '../button.component';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'button-example',
  templateUrl: './button-example.component.html'
})
export class ButtonExampleComponent implements OnInit {
  actionsText: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  handleSelect(button: ButtonComponent): void {
    this.actionsText = button.type + ' selected\n' + this.actionsText;
  }
}
