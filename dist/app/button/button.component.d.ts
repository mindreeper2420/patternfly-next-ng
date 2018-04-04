import { EventEmitter, OnInit } from '@angular/core';
/**
 * Button component.
 */
export declare class ButtonComponent implements OnInit {
    /**
     * The disabled state
     */
    disabled: boolean;
    /**
     * The button type; see ButtonType
     */
    type: string;
    /**
     * The button tool tip
     */
    tooltip: string;
    /**
     * The event emitted when a button has been selected
     */
    onSelect: EventEmitter<{}>;
    /**
     * The default constructor
     */
    constructor();
    /**
     * Setup component configuration upon initialization
     */
    ngOnInit(): void;
    handleAction($event: MouseEvent): void;
}
