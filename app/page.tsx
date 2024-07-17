// app/page.js
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Members from './components/Members';
import EmojiBackground from './components/EmojiBackground';

export default function Home() {
  return (
    <>
      <EmojiBackground emoji="🤣" backgroundColor="#1e1e1e"/>
      <Hero />
      <About />
      <Services />
      <Blog />
      <Contact />
    </>
  );
}
