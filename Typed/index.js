import React from "react";
import Typed from "typed.js";

class TypedString extends React.Component {
  componentDidMount() {
    // If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
    const { strings } = this.props;
    // You can pass other options here, such as typing speed, back speed, etc.
    const options = {
      strings: strings,
      typeSpeed: 30,
      backSpeed: 30,
      smartBackspace: true, // this is a default
      loop: true,
      shuffle: true,
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <span
        // style={{ color: '#8C4A7B', whiteSpace: 'pre' }}
        ref={(el) => {
          this.el = el;
        }}
      />
    );
  }
}
export default TypedString;
