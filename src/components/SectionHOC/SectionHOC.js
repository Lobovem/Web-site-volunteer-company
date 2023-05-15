import React from 'react';
import { AboutUs } from '../AboutUs/AboutUs';
import s from './SectionHOC.module.scss';
import { News } from '../News/News';
import { OurResult } from '../OurResult/OurResult';
import { WaySupport } from '../WaySupport/WaySupport';
import { Donate } from '../Donate/Donate';
import { Teams } from '../Teams/Teams';
import { Contacts } from '../Contacts/Contacts';
import { Form } from 'react-router-dom';
import { NewsAll } from '../NewsAll/NewsAll';

export const SectionHOC = (Component) => (props) =>
  (
    <section className={s[props.classNameSection]}>
      <div className={s[props.classNameSectionWrap]}>
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
export const ContactsWithHOC = SectionHOC(Contacts);
export const FormWithHOC = SectionHOC(Form);
export const NewAllWithHOC = SectionHOC(NewsAll);
