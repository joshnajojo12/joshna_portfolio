import { Skills } from './_components';
import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Transition,
} from './_layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Home | Joshna',
  description:
    'Helping brands thrive in the digital world. Located in The Netherlands. Delivering tailor-made digital designs and building interactive websites from scratch. © Code by Joshna',
};

export default function Home() {
  return (
    <Transition>
      <Navbar />
      <Header />
      <main>
        <Description />
        <Skills />
        <Thumbnail />
        <Project />
      </main>
      <Contact />
    </Transition>
  );
}
