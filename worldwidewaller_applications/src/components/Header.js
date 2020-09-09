// npm imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

// css imports
import styles from './styles/header.scss';

// redux actions
import {
  toggleHeader as toggleHeaderAction,
} from '~/redux/actions/appSettings';

/**
 * This component is responsible for displaying the site header.
 * The header will be replaced with a humburger menu at a specified screen size
 */
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerCollapsed: props.headerCollapsed,
    };

    this.collapseHeader = this.collapseHeader.bind(this);
  }

  /**
   * Expand/collapse the header
   */
  collapseHeader() {
    const { headerCollapsed } = this.state;

    const toggleHeader = this.props.toggleHeaderAction;
    toggleHeader(!headerCollapsed);

    this.setState({
      headerCollapsed: !headerCollapsed,
    });
  }

  /**
   * Render.
   */
  render() {
    const { headerCollapsed } = this.state;

    const collapsedStyle = headerCollapsed ? styles.collapsed : null;
    const collapseIcon = React.createElement(
      headerCollapsed ? MdExpandMore : MdExpandLess,
      {
        className: styles.collapseIcon,
        onClick: this.collapseHeader,
      },
      null,
    );

    return (
      <div className={classNames(styles.headerContainer, collapsedStyle)}>

        <div className={classNames(styles.collapseSection, collapsedStyle)}>
          {collapseIcon}
        </div>

        {/* Home Icon Section */}
        {/* ***************** */}
        <div className={classNames(styles.logoSection, collapsedStyle)}>
          <Link to="/">
            <div className={styles.homeLink} title="Home">
              <div title="Home">&nbsp;</div>
            </div>
          </Link>
        </div>

        {/* Links Section */}
        {/* ************* */}
        <div className={classNames(styles.optionsSection, collapsedStyle)}>
          <Link to="/" className={styles.link}>Resume</Link>
          <Link to="/settings" className={styles.link}>Settings</Link>
          <Link to="/contact" className={styles.link}>Contact Me</Link>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    headerCollapsed: state.userSettings.headerCollapsed,
  }
);

export default connect(
  mapStateToProps,
  { toggleHeaderAction },
)(Header);

Header.propTypes = {
  headerCollapsed: PropTypes.bool,
  toggleHeaderAction: PropTypes.func.isRequired,
};

Header.defaultProps = {
  headerCollapsed: false,
};
