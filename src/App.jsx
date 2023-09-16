import Nav from './components/Nav';
import {Hero,Footer,PopularProducts} from "./sections";

const App = () => (
  <main className="relative bg-black">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <PopularProducts/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>
);

export default App;