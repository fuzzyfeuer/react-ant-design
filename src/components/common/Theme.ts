
export type ThemeVariables = { [key: string]: string };
export type ThemeObject = { [key: string]: string };
export type Theme = { [key: string]: (string | ThemeObject) };

/* --- Variables --- */

const themeFonts: ThemeVariables = {
    default: 'Arial'
};

const themeFontSizes: ThemeVariables = {
    default: '11pt',
    large: '13pt',
    small: '10pt'
};

const themeColors: ThemeVariables = {
    darkGrey: '#404040',
    darkGrey60: '#606060',
    white: 'white',
    whiteOpacity: 'rgba(255,255,255,0.5)'
};

/* --- Theme Mixins --- */

const themeDefaults: ThemeObject = {
    fontFamily: themeFonts.default,
    fontSize: themeFontSizes.default,
    color: themeColors.darkGrey,
    backgroundColor: themeColors.white
};

const themeLabel: ThemeObject = {
    ...themeDefaults,

    textOverflow: 'ellipsis',
    userSelect: 'none',
    whiteSpace: 'nowrap'
};

const themeOverlayLabel: ThemeObject = {
    ...themeLabel,

    backgroundColor: themeColors.whiteOpacity,
    color: themeColors.darkGrey60,
    fontSize: themeFontSizes.small,
    fontWeight: 'bold',

    borderRadius: '3px',
    display: 'inline-block',
    padding: '6px',
    zIndex: '1 !important'
};

/* --- Theme --- */

/**
 * Theme for styled components.
 */
export const theme: Theme = {
    default: themeDefaults,
    label: themeLabel,
    overlayLabel: themeOverlayLabel
};
