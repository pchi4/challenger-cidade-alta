/* eslint-disable jsx-a11y/img-redundant-alt */
interface Props {
  details: {
    title: string;
    bio: string;
    img: string;
    link: string;
  };
}

export const Card = ({ details }: Props) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 h-3/4 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
      <div className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2">
        <svg
          className="w-2.5 h-2.5 me-1.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
          />
        </svg>
        Code
      </div>
      <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
        {details.title}
      </h2>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
        {details.bio}
      </p>

      <img
        className="h-2/4 mx-auto max-w-full rounded-md"
        src={details.img}
        alt="image from repos"
      />

      <a
        href={details.link}
        className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center my-4"
      >
        Read more
        <svg
          className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
};
