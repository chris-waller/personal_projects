// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// css imports
import styles from './styles/header.scss';

// image imports

/**
 * This component is responsible for displaying the site header.
 * The header will be replaced with a humburger menu at a specified screen size
 */
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      foo: 'bar',
    };
  }

  render() {
    const { headerOptions } = this.props;

    const { foo } = this.state;
    if (foo === 'bat') {
      return null;
    }

    return (
      <div className={styles.container}>

        {/* Home Icon Section */}
        {/* ***************** */}
        <div className={styles.logoSection}>
          <Link to="/">
            <div className={styles.homeLink} title="Home">
              <div title="Home">&nbsp;</div>
            </div>
          </Link>
        </div>

        {/* Options Section */}
        {/* ************* */}
        <div className={styles.optionsSection}>
          {headerOptions.map((option) => (
            React.createElement(
              option.type,
              {
                key: option.key,
                ...option.props,
              },
              option.props.children,
            )
          ))}
        </div>

      </div>
    );
  }
}
export default Header;

Header.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  headerOptions: PropTypes.array.isRequired,
};
