/* *********************************************** */
/* Use this file for any theme-related javascript  */
/* *********************************************** */

// styles imports
// eslint-disable-next-line css-modules/no-unused-class
import styles from './themes/site_themes.scss';

/**
 * All themes supported by this application
 */
export const THEME_NAMES = {
  OCEAN: 'Ocean',
  FOREST: 'Forest',
  ASTRONOMY: 'Astronomy',
  HALLOWEEN: 'Halloween',
};

/**
 * List of theme names and their associated styles.
 * Associates the theme with its react-specific style name.
 */
export const THEMES = [
  {
    name: THEME_NAMES.OCEAN,
    // eslint-disable-next-line css-modules/no-undef-class
    classname: styles.ocean_theme,
  },
  {
    name: THEME_NAMES.FOREST,
    // eslint-disable-next-line css-modules/no-undef-class
    classname: styles.forest_theme,
  },
  {
    name: THEME_NAMES.ASTRONOMY,
    // eslint-disable-next-line css-modules/no-undef-class
    classname: styles.astronomy_theme,
  },
  {
    name: THEME_NAMES.HALLOWEEN,
    // eslint-disable-next-line css-modules/no-undef-class
    classname: styles.halloween_theme,
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
        // className: styles.menuItem,
      },
    );
  });

  return siteThemes;
}

/**
 * Changes the site theme by updating the CSS of the overall site div
 */
export function changeTheme(newThemeName) {
  // eslint-disable-next-line no-undef
  document.getElementById('root').className = `root ${newThemeName}`;
}
