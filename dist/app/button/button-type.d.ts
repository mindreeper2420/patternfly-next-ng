export declare class ButtonStyle {
    /**
     * Danger style type
     */
    static readonly DANGER: string;
    /**
     * Default style type
     */
    static readonly DEFAULT: string;
    /**
     * Information style type
     */
    static readonly PRIMARY: string;
    /**
     * Success style type
     */
    static readonly SECONDARY: string;
    /**
     * Warning style type
     */
    static readonly TERTIARY: string;
}
/**
 * An object containing properties for the button's type input
 */
export declare class ButtonType {
    /**
     * The button is a clickable button
     */
    static readonly BUTTON: string;
    /**
     * The button is a reset button (resets the form-data to its initial values)
     */
    static readonly RESET: string;
    /**
     * The button is a submit button (submits form-data)
     */
    static readonly SUBMIT: string;
}
/**
 * An object containing properties for the button's formEncType input
 */
export declare class ButtonFormEncType {
    /**
     * All characters will be encoded before sent
     */
    static readonly APPLICATION_FORM_URLENCODED: string;
    /**
     * No characters are encoded (use this when you are using forms that have a file upload control)
     */
    static readonly MULTIPART_FORM_DATA: string;
    /**
     * Spaces are converted to "+" symbols, but no characters are encoded
     */
    static readonly TEXT_PLAIN: string;
}
/**
 * An object containing properties for the button's formMethod input
 */
export declare class ButtonFormMethod {
    /**
     * Appends the form-data to the URL: URL?name=value&name=value
     */
    static readonly GET: string;
    /**
     * Sends the form-data as an HTTP post transaction
     */
    static readonly POST: string;
}
/**
 * An object containing properties for the button's formTarget input
 */
export declare class ButtonFormTarget {
    /**
     * Loads the response in a new window/tab
     */
    static readonly BLANK: string;
    /**
     * Loads the response in the parent frame
     */
    static readonly PARENT: string;
    /**
     * Loads the response in the same frame
     */
    static readonly SELF: string;
    /**
     * Loads the response in the full body of the window
     */
    static readonly TOP: string;
}
