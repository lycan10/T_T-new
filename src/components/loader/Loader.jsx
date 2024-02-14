const { RevolvingDot } = require("react-loader-spinner");

const Loader = ({ fullscreen }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...(fullscreen
          ? {
              height: "100vh",
              width: "100%",
            }
          : {}),
      }}
    >
      <RevolvingDot
        visible={true}
        height="80"
        width="80"
        color="#3B67AF"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
