import style from "./hero.module.scss";
import { infoType } from "@/types/info";
import { scrollTosection } from "@/helpers/healper";
import ProgrammingAnimate from "../common/lottieAnimate/Programming";
const Hero = (props: infoType) => {
  console.log("props", props);
  return (
    <section className={`${style.hero}`}>
      <div className={style.inner}>
        <div className={style.title}>
          <div className={style.line}>
            <span className={style.circle}></span>
            <span className={style.height}></span>
          </div>
          <div className={style.name}>
            <h1>
              {props?.title} <span>{props?.title_name}</span>
            </h1>
            <div className={style.info}>
              <p>{props?.description}</p>
            </div>
          </div>
        </div>
        <div className={style.canvas}>
          <ProgrammingAnimate />
        </div>
        <div className={style.more}>
          <div
            className={style.box}
            onClick={() => scrollTosection("experience")}
          >
            <div className={style.circle}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
