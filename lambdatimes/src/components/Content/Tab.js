import React from 'react';
import PropTypes from 'prop-types';
const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = 'tab' + props.selectedTab === props.tab ? ' active-tab' : null;
  return (
    <div
      className={selectedClass}
      onClick={() => {props.selectTabHandler(props.tab)
  }}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.
Tab.PropTypes = {
  tab: PropTypes.object
}

export default Tab;