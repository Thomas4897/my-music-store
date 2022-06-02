import React from "react";

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <header
        style={{
          background: "red",
          width: "100%",
          padding: "20px",
        }}
      >
        This is the header
      </header>
      {/* <div>This is where the body of the page will be</div> */}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
