import React from 'react';

const AppHeader = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header-title">{props.title}</h1>
    </div>
  </div>
);

AppHeader.defaultProps = {
  title: 'Table Task'
};

export default AppHeader;
