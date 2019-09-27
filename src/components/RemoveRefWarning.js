import React from "react";

// No idea what this does, but it removed a warning about React.forwardRef...
// Didn't include in PropTypes validation, since no idea what this is
const RemoveRefWarning = React.forwardRef((props, ref) => (
  <div ref={ref}>{props.children}</div>
));

export default RemoveRefWarning;
