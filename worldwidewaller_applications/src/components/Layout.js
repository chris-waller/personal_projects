// npm imports
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { connect } from 'react-redux';

// the Header component
import Header from './Header';

// css imports
import styles from './styles/layout.scss';

// redux actions
import {
  toggleHeader as toggleHeaderAction,
} from '../redux/actions';

/**
 * This component is responsible for the overall site layout and styling.
 * General site layout will be done here. The styling of the header and pages
 * themselves will be done in the specific classes.
 */
class Layout extends Component {
  constructor(props) {
    super(props);
    console.log('layout constructor');

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
    console.log('layout render');
    const { headerCollapsed } = this.state;
    const { children } = this.props;

    // adjust styles for header expansion/collapse
    const collapsedStyle = headerCollapsed ? styles.collapsed : null;
    const collapseText = headerCollapsed ? 'Expand Menu' : 'Collapse Menu';
    const collapseIcon = React.createElement(
      headerCollapsed ? MdExpandMore : MdExpandLess,
      {
        className: styles.collapseIcon,
      },
      null,
    );

    return (
      <div className={classNames(styles.layout, collapsedStyle)}>

        {/* Site Header */}
        <div className={classNames(styles.siteHeader, collapsedStyle)}>
          <Header />
        </div>

        {/* Collapse Header */}
        <div
          className={classNames(styles.collapseHeader, collapsedStyle)}
          title={collapseText}
        >

          <div
            className={styles.collapseHeaderWrapper}
            onClick={this.collapseHeader}
          >
            {collapseIcon}
          </div>
        </div>

        {/* Page Content */}
        <div className={classNames(styles.pageContentWrapper, collapsedStyle)}>
          <div className={styles.pageContentOverlay} />
          <div className={styles.pageContent}>
            {children}
          </div>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    headerCollapsed: state.updateClientSettings.headerCollapsed,
  }
);

export default connect(
  mapStateToProps,
  { toggleHeaderAction },
)(Layout);

Layout.defaultProps = {
  headerCollapsed: false,
};

Layout.propTypes = {
  headerCollapsed: PropTypes.bool,
  toggleHeaderAction: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
