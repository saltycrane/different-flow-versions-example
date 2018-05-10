/* @flow */
import * as React from "react";

type Props = {
  children?: React.Node,
  name: string
};

class UsesNewFlowVersion extends React.Component<Props> {
  render() {
    const { children, name, description } = this.props;
    return null;
  }
}

export default UsesNewFlowVersion;
