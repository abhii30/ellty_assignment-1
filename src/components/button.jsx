/* eslint-disable react/prop-types */

const Button = ({ label }) => {
  return (
    <div className="min-w-80 h-10 bg-primary justify-center items-center flex rounded cursor-pointer hover:bg-primary-faded active:bg-primary active:cursor-default">
      <div className="px-2.5 text-sm font-normal font-montserrat text-black">
        {label}
      </div>
    </div>
  );
};

export default Button;
