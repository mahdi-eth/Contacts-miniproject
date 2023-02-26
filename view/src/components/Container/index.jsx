const Container = ({ children, classes }) => {
  return (
    <div className={classes + " " + "max-w-lg mx-auto my-6 px-5"}>
      {children}
    </div>
  );
};

export default Container;