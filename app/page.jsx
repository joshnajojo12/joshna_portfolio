import Skills from './_components/skills';
import {
  Contact,
  Description,
  Header,
  Navbar,
  Thumbnail,
} from './_layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home | Joshna',
  description:
    'Helping brands thrive in the digital world. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Joshna',
};

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Skills />
        <Thumbnail />
      </main>
      <Contact />
    </>
  );
}
