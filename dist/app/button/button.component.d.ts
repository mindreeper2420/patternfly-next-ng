import { EventEmitter, OnInit } from '@angular/core';
/**
 * Button component.
 */
export declare class ButtonComponent implements OnInit {
    /**
     * Indicates button should automatically get focus when the page loads
     */
    autofocus: boolean;
    /**
     * The disabled state
     */
    disabled: boolean;
    /**
     * Specifies one or more forms the button belongs to
     */
    form: string;
    /**
     * Specifies where to send the form-data (a URL) when a form is submitted. Only for type submit
     */
    formAction: string;
    /**
     * Specifies how form-data should be encoded before sending it to a server. Only for type submit
     *
     * See [[ButtonFormEncType]]
     */
    formEncType: string;
    /**
     * Specifies how to send the form-data (which HTTP method to use). Only for type submit
     *
     * See [[ButtonFormMethod]]
     */
    formMethod: string;
    /**
     * Specifies that the form-data should not be validated on submission. Only for type submit
     */
    formNoValidate: boolean;
    /**
     * Specifies where to display the response after submitting the form. Only for type submit
     *
     * See [[ButtonFormTarget]]
     */
    formTarget: string;
    /**
     * The button ID
     */
    id: string;
    /**
     * The button name
     */
    name: string;
    /**
     * The button style
     *
     * See [[ButtonStyle]]
     */
    style: string;
    /**
     * The button tooltip
     */
    tooltip: string;
    /**
     * The button type
     *
     * See [[ButtonType]]
     */
    type: string;
    /**
     * The initial button value
     */
    value: string;
    /**
     * The event emitted when a button has been clicked
     */
    onClick: EventEmitter<{}>;
    /**
     * The default constructor
     */
    constructor();
    /**
     * Setup component configuration upon initialization
     */
    ngOnInit(): void;
    handleClick($event: MouseEvent): void;
}
