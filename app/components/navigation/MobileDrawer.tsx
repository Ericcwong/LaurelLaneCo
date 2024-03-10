export const MobileDrawer = ({
  isMenuOpen,
  setIsMenuOpen,
  handleSubmit,
  email,
  setEmail,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  email: string;
  setEmail: (email: string) => void;
}) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full bg-light-beige text-warm-gray z-50 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        style={{ width: "400px" }}
      >
        <button
          className="absolute top-0 right-0 m-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="flex flex-col items-start p-4 text-lg">
          <a href="#" className="mt-4">
            Home
          </a>
          <a href="#" className="mt-4">
            About
          </a>
          <a href="#" className="mt-4">
            Services
          </a>
          <form onSubmit={handleSubmit} className="mt-4 flex w-full">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0  opacity-50 z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}{" "}
    </>
  );
};
