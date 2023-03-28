import { ReactElement } from "react";
import useTheme from "../hooks/useTheme";

export default function Home(): ReactElement {
  const { themes } = useTheme();
  return (
    <div className="max-w-md mx-auto p-4">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col w-full">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.oegfCIw7nZgeieBiQhdaWAHaEK%26pid%3DApi&f=1&ipt=85bf69ef05745079e747c167ff7b0c362afdae449cad684718176a653a10999f&ipo=images"
            className="max-w-sm w-full rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
