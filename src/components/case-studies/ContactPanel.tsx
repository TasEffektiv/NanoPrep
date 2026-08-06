"use client";

import { useState } from "react";
import { enquiryOptions } from "@/content/caseStudies";
import styles from "./ContactPanel.module.css";

export default function ContactPanel() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className={styles.panel}>
        <h3>Thank you</h3>
        <p className={styles.success}>
          Your enquiry has been received. One of our team will be in touch within 1&ndash;2 business days.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.panel}>
      <h3>More Information?</h3>
      <p>
        For more information about NanoPrep products and services, fill out the form below and one of our team will
        be in touch within 1&ndash;2 business days.
      </p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div className={styles.formGrid}>
          <div className={styles.formGroup}>
            <label htmlFor="cp-name">Your name</label>
            <input id="cp-name" type="text" name="name" placeholder="Full name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cp-company">Company</label>
            <input id="cp-company" type="text" name="company" placeholder="Company name" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cp-email">Email</label>
            <input id="cp-email" type="email" name="email" placeholder="your@email.com" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cp-phone">Phone</label>
            <input id="cp-phone" type="tel" name="phone" placeholder="+61" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cp-industry">Industry</label>
            <select id="cp-industry" name="industry" defaultValue="">
              <option value="" disabled>
                Select industry...
              </option>
              {enquiryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className={`${styles.formGroup} ${styles.formGridFull}`}>
            <label htmlFor="cp-message">Message</label>
            <textarea id="cp-message" name="message" placeholder="Describe your application or requirement..." />
          </div>
          <div className={styles.formGridFull}>
            <button type="submit" className={styles.submitBtn}>
              Send Enquiry
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
