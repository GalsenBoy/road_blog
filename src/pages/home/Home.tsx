import Target from "../../components/blog_target/target";
import Card from "../../components/card/card";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Hero from "../../components/hero/Hero";
import "./home.scss";

export default function Home() {
  return (
    <div id="home">
      <Header />
      <Hero />
      <Target />
      <Card />
      <Footer />
    </div>
  );
}
