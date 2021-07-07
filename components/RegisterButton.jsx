import ButtonBase from "./ButtonBase";

const RegisterButton = () => {
  return (
    <ButtonBase
      href="/register/"
      name="Register"
      className="xl:bg-brand-blue-light  mx-3"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 inline"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
        />
      </svg>
    </ButtonBase>
  );
};

export default RegisterButton;
