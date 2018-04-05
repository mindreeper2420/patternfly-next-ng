import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './button.component';
import { ButtonEvent } from './button-event';
import {
  ButtonFormEncType,
  ButtonFormMethod,
  ButtonFormTarget,
  ButtonStyle,
  ButtonType
} from './button-type';

export {
  ButtonEvent,
  ButtonFormEncType,
  ButtonFormMethod,
  ButtonFormTarget,
  ButtonStyle,
  ButtonType
};

/**
 * A module containing objects associated with button components
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [ButtonComponent],
  exports: [
    ButtonComponent,
    CommonModule,
    FormsModule
  ]
})
export class ButtonModule {}
