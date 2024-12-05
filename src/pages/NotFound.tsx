import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col items-center pt-14 gap-3">
      <h1 className="text-slate-50 text-3xl font-semibold">404 Not Foud</h1>

      <button
        onClick={handleGoBack}
        className="bg-slate-50 text-black px-2 rounded-md text-xl outline-none"
      >
        Go back
      </button>
    </div>
  );
}

export default NotFound;
