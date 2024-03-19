import Img from "./Img/Img.png";
import Img2 from "./Img/Img.svg";

function App() {
  return (
    <div className="container max-w-[1440px] flex w-full m-auto sm:flex sm:items-center">
      <img
        className="max-w-[720px] max-h-[899px] w-full h-full"
        src={Img}
        alt="img"
      />
      <div className="h-full md:bg-white p-10 xs:w-96 absolute px-10 w-80 sm:relative">
        <p className="text-xs text-midnight font-roboto font-normal">
          Welcome back
        </p>
        <h1 className="xs:text-3xl text-black font-roboto font-bold xs:mb-8 text-2xl mb-3">
          Login to your account
        </h1>

        <label class="block ">
          <p className="text-xs font-roboto font-normal mb-1 text-grey">
            Email
          </p>
          <input
            type="email"
            name="email"
            class="font-roboto ss:w-80 w-64 mt-1 px-3 py-1 bg-white border border-slate-200 placeholder-slate-900 focus:outline-none focus:border-sky-100 focus:ring-sky-800 block rounded-md sm:text-sm focus:ring-1 bg-transparent"
            placeholder="John.snow@gmail.com"
          />
        </label>

        <label class="block mt-3">
          <p className="text-xs font-roboto font-normal mb-2 text-grey">
            Password
          </p>
          <input
            type="password"
            name="email"
            class="font-roboto ss:w-80 w-64 mt-2 px-3 py-1 bg-white border border-slate-200 placeholder-slate-900 focus:outline-none focus:border-sky-100 focus:ring-sky-800 block rounded-md sm:text-sm focus:ring-1 max-md:bg-transparent"
            placeholder="********"
          />
        </label>

        <div className="flex justify-between xs:mt-10 items-center	mt-1">
          <div className="flex items-center	">
            <input type="checkbox" class="checked:bg-blue bg-grey" />
            <p className="ml-2 sm:text-midnight text-sm font-normal font-roboto text-white">
              Remember me
            </p>
          </div>
          <a
            className="text-sm font-normal sm:text-darkBlue font-roboto text-white"
            href="#"
          >
            Forgot password?
          </a>
        </div>
        <div className="text-center xs:mt-10 mt-1">
          <button className="font-bold text-center bg-green rounded-md w-80 max-xs:w-64 max-xs:mr-12 p-3 max-xs:p-1 text-white mb-3">
            Login now
          </button>
          <button className="flex font-bold text-center items-center text-white bg-midnight rounded-md w-80 max-xs:w-64 p-3 max-xs:p-1">
            <img
              className="ml-12 mr-2 max-xs:ml-5"
              src={Img2}
              alt="logo"
              width={20}
              height={20}
            />
            Or sign-in with google
          </button>
        </div>
        <div className="flex items-center xs:mt-20 mt-5">
          <p className="font-normal text-xs font-roboto sm:text-grey text-white">
            Dont have an account?
          </p>
          <a className="ml-2 font-roboto text-xs text-blue" href="#">
            Join free today
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
