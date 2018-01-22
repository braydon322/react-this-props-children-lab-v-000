import React from 'react';

export default class ThemedDecorations extends React.Component {
  render() {
    const ChildrenWithBonus = React.Children.map(this.props.children, child => React.cloneElement(child, {
      className : this.props.theme
    }));

    return (
      <div>
        {ChildrenWithBonus}
      </div>
    );
  }
}
