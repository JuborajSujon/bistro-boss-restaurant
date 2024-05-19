import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  const [disabled, setDisabled] = useState(true);
  const { signIn, signInWithGoogle } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // google login
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Login Successful",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // login with email and password
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Login Successful",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleValidateCaptcha = (e) => {
    e.preventDefault();
    const value = e.target.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row ">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>

          <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100 p-10">
            <div
              onClick={handleGoogleLogin}
              className="flex justify-center items-center text-xl gap-2 py-2 border border-slate-300 rounded-md w-[90%] mx-auto ">
              <FaGoogle />
              Google Login
            </div>
            <div className="divider">or</div>
            <form onSubmit={handleLogin} className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label border border-slate-300 rounded-lg mb-2">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  onBlur={handleValidateCaptcha}
                  placeholder="type the captcha"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={disabled}
                  type="submit"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="text-center mt-4">
              New Here? <Link to="/signup">Create an Account</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
