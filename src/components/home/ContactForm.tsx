"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className={styles.success}>
        Thanks — your enquiry has been received. Our team typically responds within one business day.
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <p className={styles.requiredNote}>
        <span className={styles.req}>*</span> indicates required fields
      </p>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="firstName">
            First Name<span className={styles.req}>*</span>
          </label>
          <input type="text" id="firstName" name="firstName" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="lastName">
            Last Name<span className={styles.req}>*</span>
          </label>
          <input type="text" id="lastName" name="lastName" required />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="companyName">Company Name</label>
          <input type="text" id="companyName" name="companyName" />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone">
            Phone<span className={styles.req}>*</span>
          </label>
          <input type="tel" id="phone" name="phone" required />
        </div>
      </div>

      <div className={`${styles.row} ${styles.rowFull}`}>
        <div className={styles.field}>
          <label htmlFor="email">
            Email<span className={styles.req}>*</span>
          </label>
          <input type="email" id="email" name="email" required />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="country">
            Country<span className={styles.req}>*</span>
          </label>
          <select id="country" name="country" defaultValue="Australia" required>
            <option value="Australia">Australia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="state">
            State<span className={styles.req}>*</span>
          </label>
          <select id="state" name="state" defaultValue="NSW" required>
            <option value="NSW">NSW</option>
            <option value="VIC">VIC</option>
            <option value="QLD">QLD</option>
            <option value="WA">WA</option>
            <option value="SA">SA</option>
            <option value="TAS">TAS</option>
            <option value="ACT">ACT</option>
            <option value="NT">NT</option>
          </select>
        </div>
      </div>

      <div className={`${styles.row} ${styles.rowFull}`}>
        <div className={styles.field}>
          <label htmlFor="hearAbout">
            How did you hear about us?<span className={styles.req}>*</span>
          </label>
          <select id="hearAbout" name="hearAbout" defaultValue="" required>
            <option value="" disabled>
              Please select…
            </option>
            <option value="Social Media">Social Media</option>
            <option value="Search Engine">Search Engine</option>
            <option value="Referral">Referral</option>
            <option value="Trade Show / Event">Trade Show / Event</option>
            <option value="Existing Customer">Existing Customer</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className={`${styles.row} ${styles.rowFull}`}>
        <div className={styles.field}>
          <label htmlFor="application">Intended Application</label>
          <textarea
            id="application"
            name="application"
            placeholder="Briefly describe the asset, environment, or problem you'd like to discuss."
          />
        </div>
      </div>

      <div className={styles.submit}>
        <button type="submit" className={styles.submitBtn}>
          Send Enquiry ↗
        </button>
        <p className={styles.submitNote}>We typically respond within one business day.</p>
      </div>
    </form>
  );
}
