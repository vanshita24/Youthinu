export const BrandInput = ({
  type,
  className,
  inputClassName,
  errorClassName,
  name,
  placeholder,
  value,
  onChange,
  error,
  onBlur,
  icon,
  autoComplete,
}) => {
  return (
    <div>
      <div className={`flex items-center ${className ? className : ''}`}>
        {icon}
        <input
          autoComplete={autoComplete}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`border-b-2 ml-6 ${
            icon ? 'pl-8' : 'pl-1'
          } font-display outline-none focus:border-brand-purple-dark transition-all duration-500 text-lg w-full ${
            inputClassName ? inputClassName : ''
          }`}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        />
      </div>
      <span
        className={`flex-1 w-64 bg-white block my-2 pl-8 text-red-800 text-xs font-bold ${errorClassName}`}>
        {error}
      </span>
    </div>
  );
};

export const BrandSelect = ({
  type,
  className,
  inputClassName,
  errorClassName,
  name,
  placeholder,
  value,
  onChange,
  error,
  onBlur,
  icon,
  children,
}) => {
  return (
    <div>
      <div className={`flex items-center ${className ? className : ''}`}>
        {icon}
        <select
          name={name}
          placeholder={placeholder}
          className={`border-b-2 ml-0 lg:ml-6 ${
            icon ? 'pl-8' : 'pl-1'
          } font-display outline-none focus:border-brand-purple-dark transition-all duration-500 text-lg  w-full ${
            inputClassName ? inputClassName : ''
          }`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}>
          <option value='DEFAULT' disabled>
            Choose an option...
          </option>
          {children}
        </select>
      </div>
      <span
        className={`flex-1 w-64 bg-white block my-2 pl-8 text-red-800 text-xs font-bold  ${errorClassName}`}>
        {error}
      </span>
    </div>
  );
};

export const BrandSubmit = ({ children, disabled, onClick, className }) => (
  <button
    disabled={disabled}
    type={onClick ? 'button' : 'submit'}
    onClick={onClick}
    className={`py-2 px-10 rounded-full lg:text-white font-semibold uppercase text-base mt-4 ${
      className ? className : ''
    }  ${
      disabled
        ? 'bg-gray-300 '
        : 'bg-brand-blue-light lg:bg-brand-purple-dark text-gray-900 transition duration-500 ease-in-out xl:hover:bg-brand-red-light xl:hover:ring-4 xl:transform xl:hover:-translate-y-1 xl:hover:scale-110 '
    }`}>
    {children}
  </button>
);
