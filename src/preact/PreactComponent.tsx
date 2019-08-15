/** @jsx h */
import Preact, { h } from 'preact';

interface PreactComponentProps {
  type: string;
}

class Foo extends Preact.Component<{text: string}, {}> {
  render() {
    return <p>{this.props.text}</p>
  }
}

export class PreactComponent extends Preact.Component <PreactComponentProps, {}>{
  render() {
    return (
      <Foo text={`This is a ${this.props.type} Component`} />
    );
  }
}
