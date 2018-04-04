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
import { ButtonType } from './button-type';
/**
 * Button component.
 */
var ButtonComponent = /** @class */ (function () {
    /**
     * The default constructor
     */
    function ButtonComponent() {
        /**
         * The disabled state
         */
        this.disabled = false;
        /**
         * The button type; see ButtonType
         */
        this.type = ButtonType.DEFAULT;
        /**
         * The event emitted when a button has been selected
         */
        this.onSelect = new EventEmitter();
    }
    // Initialization
    /**
     * Setup component configuration upon initialization
     */
    ButtonComponent.prototype.ngOnInit = function () {
    };
    // Actions
    ButtonComponent.prototype.handleAction = function ($event) {
        this.onSelect.emit(this);
    };
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "type", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ButtonComponent.prototype, "tooltip", void 0);
    __decorate([
        Output('onSelect'),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "onSelect", void 0);
    ButtonComponent = __decorate([
        Component({
            encapsulation: ViewEncapsulation.None,
            selector: 'pfng-button',
            template: "<button class=\"pf-c-button\" title=\"{{tooltip}}\" [disabled]=\"disabled\" [ngClass]=\"{\n          'pf-is-danger': type === 'danger',\n          'pf-is-primary': type === 'primary',\n          'pf-is-secondary': type === 'secondary',\n          'pf-is-tertiary': type === 'tertiary'\n        }\" (click)=\"handleAction($event)\"><ng-content></ng-content></button>"
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());
export { ButtonComponent };
//# sourceMappingURL=button.component.js.map