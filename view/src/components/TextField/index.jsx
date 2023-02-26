export const TextField = ({
  label,
  error,
  validation,
  htmlFor,
  value,
  defaultValue,
  onChange,
  classes,
  ...props
}) => {
  return (
    <div onChange={onChange} className={classes + " " + "mb-6"}>
      <label
        htmlFor={htmlFor}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <input
        {...props}
        {...validation}
        defaultValue={defaultValue}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <p
        id="helper-text-explanation"
        className="mt-2 text-sm text-red-500 dark:text-gray-400"
      >
        {error}
      </p>
    </div>
  );
};
