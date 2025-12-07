"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GmailForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Log demo
    console.log({ name, email, message });

    // show success screen
    setSubmitted(true);
  };

  const handleCancel = () => {
  router.back();
};

  if (submitted) {
    return (
      <div className="gmail-success-wrapper">
        <div className="gmail-success-card">
          <h1 className="gmail-success-title">Submitted Successfully.</h1>

          <button
            className="gmail-black-btn success-btn"
            onClick={() => router.back()}
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="gmail-full-wrapper">
      <div className="gmail-big-card">
        <h1 className="gmail-big-title">CONTACT ME!</h1>

        <form className="gmail-big-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="gmail-big-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email address"
            className="gmail-big-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <textarea
            placeholder="Message"
            className="gmail-big-textarea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <div className="gmail-big-buttons">
            <button
              type="button"
              onClick={handleCancel}
              className="gmail-black-btn cancel"
            >
              Cancel
            </button>

            <button type="submit" className="gmail-black-btn submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
