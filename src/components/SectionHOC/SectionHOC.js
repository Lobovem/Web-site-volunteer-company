import React from 'react';
import { AboutUs } from '../AboutUs/AboutUs';
import s from './SectionHOC.module.scss';

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
