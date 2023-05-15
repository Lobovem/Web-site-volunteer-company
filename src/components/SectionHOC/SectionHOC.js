import React from 'react';
import { AboutUs } from '../AboutUs/AboutUs';
import s from './SectionHOC.module.scss';
import { News } from '../News/News';
import { OurResult } from '../OurResult/OurResult';

export const SectionHOC = (Component) => (props) =>
  (
    <section className={s[props.classNameSection]}>
      <div className={s.sectionWrap}>
        <h1 className={s.titleSection}>{props.titleSection}</h1>
        <Component {...props} />
      </div>
    </section>
  );

export const AboutUsWithHOC = SectionHOC(AboutUs);
export const NewsWithHOC = SectionHOC(News);
export const OurRulesWithHOC = SectionHOC(OurResult);
