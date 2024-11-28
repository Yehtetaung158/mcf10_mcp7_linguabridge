const Container = ({ children, className }) => {
    return (
      <div className={`w-full md:w-[720px] lg:w-[1440px] mx-auto ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Container;