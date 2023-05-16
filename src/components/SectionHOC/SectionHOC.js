import React from 'react';
import { AboutUs } from '../AboutUs/AboutUs';
import { News } from '../News/News';
import { OurResult } from '../OurResult/OurResult';
import { WaySupport } from '../WaySupport/WaySupport';
import { Donate } from '../Donate/Donate';
import { Teams } from '../Teams/Teams';
import { Contacts } from '../Contacts/Contacts';
import { Form } from '../Form/Form';
import { Pagination } from '../Pagination/Pagination';
import s from './SectionHOC.module.scss';
import { SimpleNews } from '../SimpleNews/SimpleNews';

export const SectionHOC = (Component) => (props) =>
  (
    <section className={s[props.classNameSection]}>
      <div className={s[props.classNameSectionWrap]}>
        <h1 className={s[props.classNameTitleSection]}>{props.titleSection}</h1>
        <Component {...props} />
      </div>
    </section>
  );

export const AboutUsWithLayout = SectionHOC(AboutUs);
export const NewsWithLayout = SectionHOC(News);
export const OurRulesWithLayout = SectionHOC(OurResult);
export const WayWithLayout = SectionHOC(WaySupport);
export const DonateWithLayout = SectionHOC(Donate);
export const TeamsWithLayout = SectionHOC(Teams);
export const FormWithLayout = SectionHOC(Form);
export const ContactsWithLayout = SectionHOC(Contacts);
export const PaginationWithLayout = SectionHOC(Pagination);
export const SimpleNewsnWithLayout = SectionHOC(SimpleNews);
