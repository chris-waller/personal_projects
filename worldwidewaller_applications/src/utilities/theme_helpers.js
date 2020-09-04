/* *********************************************** */
/* Use this file for any theme-related javascript  */
/* *********************************************** */

// styles imports
import styles from '~/styles/site_themes.scss';
// import themeHelpers from './theme_helpers.scss';

/**
 * All themes supported by this application
 */
export const THEME_NAMES = {
  ASTRONOMY: 'Astronomy',
  FOREST: 'Forest',
  HALLOWEEN: 'Halloween',
  OCEAN: 'Ocean',
};

export const DEFAULT_THEME = THEME_NAMES.FOREST;

/**
 * List of theme names and their associated styles.
 * Associates the theme with its react-specific style name.
 */
export const THEMES = [
  {
    name: THEME_NAMES.ASTRONOMY,
    // eslint-disable-next-line css-modules/no-undef-class
    classname: styles.astronomy_theme,
  },
  {
    name: THEME_NAMES.FOREST,
    // eslint-disable-next-line css-modules/no-undef-class
    classname: styles.forest_theme,
  },
  {
    name: THEME_NAMES.HALLOWEEN,
    // eslint-disable-next-line css-modules/no-undef-class
    classname: styles.halloween_theme,
  },
  {
    name: THEME_NAMES.OCEAN,
    // eslint-disable-next-line css-modules/no-undef-class
    classname: styles.ocean_theme,
  },
];

/**
 * Generate an array of site themes for use in a dropdown menu.
 * Includess the react css classnames
 */
export function getSiteThemes() {
  const siteThemes = [];
  THEMES.forEach((theme) => {
    siteThemes.push(
      {
        value: theme.classname,
        label: theme.name,
        // TODO: move this into the dropdown
        // className: themeHelpers.menuItem,
      },
    );
  });

  return siteThemes;
}

/**
 * Changes the site theme by updating the CSS of the overall site div
 */
export function changeTheme(newThemeName) {
  document.getElementById('root').className = `root ${newThemeName}`;
}
