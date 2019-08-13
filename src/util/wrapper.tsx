import * as Preact from 'preact';
import * as React from 'react';

interface WrapperProps {
  component: Preact.JSX.Element
}

// renders preact component as react component
const Wrapper = ({component}: WrapperProps): JSX.Element => {
  const anchorRef = React.createRef<HTMLDivElement>();

  const renderPreact = () => {
    debugger;
    Preact.render(component, anchorRef.current);
  }

  React.useEffect(renderPreact);

  return(
    <div ref={anchorRef}></div>
  );
}

export default Wrapper;
