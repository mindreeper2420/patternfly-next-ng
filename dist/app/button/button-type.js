/*
 * An object containing properties for the button's style input
 */
var ButtonStyle = /** @class */ (function () {
    function ButtonStyle() {
    }
    /**
     * Danger style type
     */
    ButtonStyle.DANGER = 'danger';
    /**
     * Default style type
     */
    ButtonStyle.DEFAULT = 'default';
    /**
     * Information style type
     */
    ButtonStyle.PRIMARY = 'primary';
    /**
     * Success style type
     */
    ButtonStyle.SECONDARY = 'secondary';
    /**
     * Warning style type
     */
    ButtonStyle.TERTIARY = 'tertiary';
    return ButtonStyle;
}());
export { ButtonStyle };
/**
 * An object containing properties for the button's type input
 */
var ButtonType = /** @class */ (function () {
    function ButtonType() {
    }
    /**
     * The button is a clickable button
     */
    ButtonType.BUTTON = 'button';
    /**
     * The button is a reset button (resets the form-data to its initial values)
     */
    ButtonType.RESET = 'reset';
    /**
     * The button is a submit button (submits form-data)
     */
    ButtonType.SUBMIT = 'submit';
    return ButtonType;
}());
export { ButtonType };
/**
 * An object containing properties for the button's formEncType input
 */
var ButtonFormEncType = /** @class */ (function () {
    function ButtonFormEncType() {
    }
    /**
     * All characters will be encoded before sent
     */
    ButtonFormEncType.APPLICATION_FORM_URLENCODED = 'application/x-www-form-urlencoded';
    /**
     * No characters are encoded (use this when you are using forms that have a file upload control)
     */
    ButtonFormEncType.MULTIPART_FORM_DATA = 'multipart/form-data';
    /**
     * Spaces are converted to "+" symbols, but no characters are encoded
     */
    ButtonFormEncType.TEXT_PLAIN = 'text/plain';
    return ButtonFormEncType;
}());
export { ButtonFormEncType };
/**
 * An object containing properties for the button's formMethod input
 */
var ButtonFormMethod = /** @class */ (function () {
    function ButtonFormMethod() {
    }
    /**
     * Appends the form-data to the URL: URL?name=value&name=value
     */
    ButtonFormMethod.GET = 'get';
    /**
     * Sends the form-data as an HTTP post transaction
     */
    ButtonFormMethod.POST = 'post';
    return ButtonFormMethod;
}());
export { ButtonFormMethod };
/**
 * An object containing properties for the button's formTarget input
 */
var ButtonFormTarget = /** @class */ (function () {
    function ButtonFormTarget() {
    }
    /**
     * Loads the response in a new window/tab
     */
    ButtonFormTarget.BLANK = '_blank';
    /**
     * Loads the response in the parent frame
     */
    ButtonFormTarget.PARENT = '_parent';
    /**
     * Loads the response in the same frame
     */
    ButtonFormTarget.SELF = '_self';
    /**
     * Loads the response in the full body of the window
     */
    ButtonFormTarget.TOP = '_top';
    return ButtonFormTarget;
}());
export { ButtonFormTarget };
//# sourceMappingURL=button-type.js.map