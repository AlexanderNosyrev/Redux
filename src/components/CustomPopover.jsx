import React from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';

export default class CustomPopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverOpen: false
    };
  }

  render() {
    const {popoverText, target, isOpen} = this.props;
    return (
      <div>
        <Popover placement="bottom" isOpen={isOpen} target={target}>
          <PopoverHeader>Внимание!</PopoverHeader>
          <PopoverBody>{popoverText}</PopoverBody>
        </Popover>
      </div>
    );
  }
}
