import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionHeadingProps = {
  title: ReactNode;
  intro?: ReactNode;
  /** Max width of the intro paragraph — 44rem on Experience, 40rem on Contact. */
  introMax?: string;
};

/** Centred heading + 6rem gradient rule, the design's section header pattern. */
const SectionHeading = ({ title, intro, introMax = '44rem' }: SectionHeadingProps) => (
  <Reveal className="mb-14 text-center">
    <h2 className="h2-fluid m-0 font-bold text-ink">{title}</h2>
    <span aria-hidden="true" className="heading-rule" />
    {intro && (
      <p className="mx-auto mt-5 text-base leading-[1.7] text-muted" style={{ maxWidth: introMax }}>
        {intro}
      </p>
    )}
  </Reveal>
);

export default SectionHeading;
