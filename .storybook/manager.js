import {addons} from '@storybook/addons';
import {create} from "@storybook/theming";

addons.setConfig({
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullscreen: false,

    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,

    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,

    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: 'bottom',

    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,

    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true,

    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: true,

    /**
     * theme storybook, see link below
     */
    theme: create({
        // base: "dark",

        // colorPrimary: "mistyrose",
        // colorSecondary: "purple",

        // UI
        // appBg: "#9f84bd",
        // appContentBg: "grey",
        // appBorderColor: "grey",
        appBorderRadius: 10,

        // Typography
        // fontBase: '"Open Sans", sans-serif',
        // fontCode: "monospace",

        // Text colors
        // textColor: "white",
        // textInverseColor: "rgba(255,255,255,0.9)",

        // Toolbar default and active colors
        // barTextColor: "white",
        // barSelectedColor: "white",
        // barBg: "#ca7df9",

        // Form colors
        // inputBg: "white",
        // inputBorder: "silver",
        // inputTextColor: "white",
        inputBorderRadius: 10,

        brandTitle: "Logo or Title",
        // brandUrl: "https://example.com",
        // brandImage: "https://placehold.it/350x150"
        // brandImage: "/images/logo.png"
    }),

    showRoots: true,

    /**
     * id to select an addon panel
     * @type {String}
     */
    selectedPanel: undefined,
});