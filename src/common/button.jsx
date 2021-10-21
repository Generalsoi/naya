import React from "react";

const Button = (props) => {
  const { content, buttonStyles } = props;
  return (
    <button type="button" className="btn ms-2" style={buttonStyles}>
      {content}
    </button>
  );
};

export default Button;
