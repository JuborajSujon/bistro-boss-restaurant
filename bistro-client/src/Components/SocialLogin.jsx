import { FaGoogle } from "react-icons/fa";

const SocialLogin = ({ handleGoogleLogin }) => {
  return (
    <div>
      <div
        onClick={handleGoogleLogin}
        className="flex justify-center items-center text-xl gap-2 py-2 border border-slate-300 rounded-md w-[90%] mx-auto cursor-pointer ">
        <FaGoogle />
        Google Login
      </div>
      <div className="divider">or</div>
    </div>
  );
};

export default SocialLogin;
