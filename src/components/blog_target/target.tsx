import "./target.scss";
import { targetData } from "./targetData";
export default function Target() {
  return (
    <section>
      <div id="target-contain">
        <h1> Bienvenue sur ReactNest killer !</h1>
        {targetData.map((target, index) => (
          <p
            key={index}
            dangerouslySetInnerHTML={{ __html: target.paragraph }}
          />
        ))}
      </div>
    </section>
  );
}
