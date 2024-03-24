import { Section } from "../../shared/ui/Section/Section";
import * as classes from "./ContactsSection.module.css";

export function ContactsSection() {
  return (
    <Section className={classes.contactsSection} id='contacts'>
      <h2>Our Contacts</h2>
      <div className={classes.contactInf}>
        <div className={classes.info}>
          <h3>For all Library inquiries:</h3>
          <p>
            Please call <a href='tel:+6177302370'> (617) 730-2370</a>
            <br /> For TTY service, please call{" "}
            <a href='tel:+6177302370'> (617)730-2370</a> <br />
            Putterham Library: <a href='tel:+6177302385'> (617) 730-2385</a>
          </p>
          <h3>Senior Staff</h3>
          <p>
            Library Director:{" "}
            <span>
              <b>Amanda Hirst</b>
            </span>
          </p>
        </div>
        <iframe
          className={classes.iframe}
          src='https://yandex.ru/map-widget/v1/?um=constructor%3Ac93972da89a32fd07a8439f24089948346489379cc6d0add0b735b3a7348e94e&amp;source=constructor'></iframe>
      </div>
    </Section>
  );
}
