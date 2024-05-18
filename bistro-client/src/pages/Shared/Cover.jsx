import { Parallax } from "react-parallax";
export default function Cover({ img, title }) {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage="path/to/image.jpg"
        bgImageAlt="the cat"
        strength={-200}>
        <div
          className="hero min-h-[500px]"
          style={{
            backgroundImage: `url("${img}")`,
          }}>
          {/* <div className="hero-overlay bg-opacity-60"></div> */}
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-xl w-full bg-slate-800/50 py-16 px-24">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
      );
    </div>
  );
}
