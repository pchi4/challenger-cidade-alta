export const Nav = () => {
  return (
    <nav className="bg-slate-200	 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/37/Game_%28rapper%29_Logo.png"
            className="h-8"
            alt="Logo mini game"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Desafio Cidade Alta
          </span>
        </div>
      </div>
    </nav>
  );
};
