import Spline from "@splinetool/react-spline";
import GithubLogo from "./images/github_logo.png";
import LinkedinLogo from "./images/linkedin_logo.png";

function App() {
  return (
    <div>
      <div className="relative flex flex-row">
        <Spline scene="https://draft.spline.design/LnbR5J8eQhB0kIXT/scene.spline" />
        <div className="absolute flex items-center justify-center w-full bottom-10">
          <div className="flex items-center justify-center p-4 shadow-md bg-zinc-900 rounded-3xl ">
            <p className="text-white">Press and drag to orbit</p>
          </div>
        </div>
      </div>
      <div className="bg-[#15202b] h-[120px] w-[100%] border-t-[1px] border-solid border-t-[#28343e] max-w-[2000px] ml-auto mr-auto flex flex-row justify-between">
        <a
          className="basis-auto w-[80px] ml-20 mt-auto mb-auto"
          href="https://github.com/akpamaboris"
        >
          <img
            src={GithubLogo}
            alt="logo of Github"
            target="_blank"
            rel="noreferrer"
          />
        </a>
        <a
          className="basis-auto w-[80px] mr-20 mt-auto mb-auto"
          href="https://www.linkedin.com/in/borisakpama/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedinLogo} alt="logo of Linkedin" />
        </a>
      </div>
    </div>
  );
}

export default App;
