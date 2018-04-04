import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';

import { ButtonType } from './button-type';

/**
 * Button component.
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'pfng-button',
  templateUrl: './button.component.html'
})
export class ButtonComponent implements OnInit {
  /**
   * The disabled state
   */
  @Input() disabled: boolean = false;

  /**
   * The button type; see ButtonType
   */
  @Input() type: string = ButtonType.DEFAULT;

  /**
   * The button tool tip
   */
  @Input() tooltip: string;

  /**
   * The event emitted when a button has been selected
   */
  @Output('onSelect') onSelect = new EventEmitter();

  /**
   * The default constructor
   */
  constructor() {
  }

  // Initialization

  /**
   * Setup component configuration upon initialization
   */
  ngOnInit(): void {
  }

  // Actions

  handleAction($event: MouseEvent): void {
    this.onSelect.emit(this);
  }
}
