import { AuthStyle } from "./AuthLayout.style";

const AuthLayout = ({ children }) => {
  return (
    <div
      style={{
        height: "100dvh",
        padding: "0rem 0 2rem",
        overflowY: "auto",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        WebkitOverflowScrolling: "touch",
      }}
    >
      <AuthStyle>{children}</AuthStyle>
    </div>
  );
};

export default AuthLayout;
