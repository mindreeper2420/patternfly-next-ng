var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ButtonStyle, ButtonType } from './button-type';
/**
 * Button component.
 */
var ButtonComponent = /** @class */ (function () {
    /**
     * The default constructor
     */
    function ButtonComponent() {
        /**
         * Indicates button should automatically get focus when the page loads
         */
        this.autofocus = false;
        /**
         * The disabled state
         */
        this.disabled = false;
        /**
         * Specifies that the form-data should not be validated on submission. Only for type submit
         */
        this.formNoValidate = false;
        /**
         * The button style
         *
         * See [[ButtonStyle]]
         */
        this.style = ButtonStyle.DEFAULT;
        /**
         * The button type
         *
         * See [[ButtonType]]
         */
        this.type = ButtonType.BUTTON;
        /**
         * The event emitted when a button has been clicked
         */
        this.onClick = new EventEmitter();
    }
    // Initialization
    /**
     * Setup component configuration upon initialization
     */
    ButtonComponent.prototype.ngOnInit = function () {
    };
    // Actions
    ButtonComponent.prototype.handleClick = function ($event) {
        this.onClick.emit({
            eventName: 'onClick',
            id: this.id,
            name: this.name,
            value: this.value
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "autofocus", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "form", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "formAction", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "formEncType", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "formMethod", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "formNoValidate", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "formTarget", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "id", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "name", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "style", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "tooltip", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "value", void 0);
    __decorate([
        Output('onClick'),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "onClick", void 0);
    ButtonComponent = __decorate([
        Component({
            encapsulation: ViewEncapsulation.None,
            selector: 'pfng-button',
            template: "<button class=\"pf-c-button\" [attr.form]=\"form\" [attr.formaction]=\"formAction\" [attr.formenctype]=\"formEncType\" [attr.formmethod]=\"formMethod\" [attr.formnovalidate]=\"formNoValidate\" [attr.formtarget]=\"formTarget\" [autofocus]=\"autofocus\" [disabled]=\"disabled\" [id]=\"id\" [name]=\"name\" [ngClass]=\"{\n          'pf-is-danger': style === 'danger',\n          'pf-is-primary': style === 'primary',\n          'pf-is-secondary': style === 'secondary',\n          'pf-is-tertiary': style === 'tertiary'\n        }\" [title]=\"tooltip\" [type]=\"type\" [value]=\"value\" (click)=\"handleClick($event)\"><ng-content></ng-content></button>"
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());
export { ButtonComponent };
//# sourceMappingURL=button.component.js.map