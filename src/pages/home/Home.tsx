import Target from "../../components/blog_target/target";
import Card from "../../components/card/card";
import Hero from "../../components/hero/Hero";
import './home.scss'

export default function Home() {
  return (
    <div id="home">
      <Hero />
      <Target />
      <Card />
    </div>
  );
}
