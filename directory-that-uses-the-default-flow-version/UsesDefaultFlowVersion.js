/* @flow */
import React from "react";

type Props = {
  children?: any,
  name: string
};

class UsesDefaultFlowVersion extends React.Component<*, Props, *> {
  render() {
    const { children, name, description } = this.props;
    return null;
  }
}

export default UsesDefaultFlowVersion;
