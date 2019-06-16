import React from 'react';

const PageLayout = ({children, title, subtitle}) => {
  return (
    <div class="wrap wrap__generic">
      <div class="page-content-header">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
      {children}
    </div>
  );  
}

export default PageLayout;