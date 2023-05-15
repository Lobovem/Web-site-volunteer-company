import React from 'react';
import { AboutUs } from '../AboutUs/AboutUs';
import s from './SectionHOC.module.scss';
import { News } from '../News/News';
import { OurResult } from '../OurResult/OurResult';
import { WaySupport } from '../WaySupport/WaySupport';
import { Donate } from '../Donate/Donate';
import { Teams } from '../Teams/Teams';

export const SectionHOC = (Component) => (props) =>
  (
    <section className={s[props.classNameSection]}>
      <div className={s[props.clasNameSectionWrap]}>
        <h1 className={s[props.classNameTitleSection]}>{props.titleSection}</h1>
        <Component {...props} />
      </div>
    </section>
  );

export const AboutUsWithHOC = SectionHOC(AboutUs);
export const NewsWithHOC = SectionHOC(News);
export const OurRulesWithHOC = SectionHOC(OurResult);
export const WayWithHOC = SectionHOC(WaySupport);
export const DonateWithHOC = SectionHOC(Donate);
export const TeamsWithHOC = SectionHOC(Teams);
