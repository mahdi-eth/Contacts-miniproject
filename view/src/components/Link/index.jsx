import { Link } from 'react-router-dom';

export const LinkComp = ({value, to}) => {
  return (
    <p className="text-gray-500 dark:text-gray-400 py-3">
      <Link
        to={to}
        href="#"
        className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        {value}
        <svg
          aria-hidden="true"
          className="w-5 h-5 ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
    </p>
  );
};
