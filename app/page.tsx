import Image from "next/image";
import Textgenerator from "./components/Textgenerator";
import hero from "../public/hero.png";

export default function Home() {
  return (
    <div className="grid-halves h-screen-navbar">
      <div className="bg-teal border-right">
        <div className="column-padding">
          <div className="tablet-centered">
            <div className="content-grid home-hero">
              <Textgenerator />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-salmon">
        <div className="column-padding centered">
          <div className="callout-wrap">
            <Image
              className="callout-image"
              src={hero}
              alt="friendly people"
              placeholder="blur"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
