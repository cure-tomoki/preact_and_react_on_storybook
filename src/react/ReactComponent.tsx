import * as React from 'react';

interface ReactComponentProps {
  type: string
}

class Foo extends React.Component<{text: string}, {}> {
  render() {
    return <p>{this.props.text}</p>
  }
}

export class ReactComponent extends React.Component<ReactComponentProps> {
  render() {
    return (
      <Foo text={`This is a ${this.props.type} Component`} />
    );
  }
}
