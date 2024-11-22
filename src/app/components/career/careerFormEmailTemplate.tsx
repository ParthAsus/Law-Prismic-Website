import * as React from "react";

interface careerFormEmailTemplateProps {
  firstName: string;
  phoneNumber: string;
  email: string;
  jobTitle: string;
}

export const CareerFormEmailTemplate: React.FC<
  Readonly<careerFormEmailTemplateProps>
> = ({ firstName, phoneNumber, email, jobTitle }) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      color: "#333",
    }}
  >
    <h1
      style={{
        fontSize: "24px",
        color: "#333",
        borderBottom: "2px solid #4caf50",
        paddingBottom: "10px",
        marginBottom: "20px",
      }}
    >
      Welcome, {firstName} !
    </h1>
    <p style={{ fontSize: "16px", lineHeight: "1.5", marginBottom: "20px" }}>
      Thank you for reaching out to us regarding the position of 
      <span className="text-lg text-green-600">
      {" "}
      {jobTitle}.
      {" "}
      </span>
      Here are the details we received from you:
    </p>
    <div
      style={{
        backgroundColor: "#fff",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        marginBottom: "20px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p style={{ margin: "8px 0" }}>
        <strong>First Name:</strong> {firstName}
      </p>

      <p style={{ margin: "8px 0" }}>
        <strong>Phone Number:</strong> {phoneNumber}
      </p>
      <p style={{ margin: "8px 0" }}>
        <strong>Email:</strong> {email}
      </p>
    </div>
    <p style={{ fontSize: "14px", color: "#777" }}>
      If you have any questions, feel free to reply to this email.
    </p>
    <footer
      style={{
        textAlign: "center",
        fontSize: "12px",
        color: "#999",
        marginTop: "20px",
      }}
    >
      © 2024 Your Company. All rights reserved.
    </footer>
  </div>
);
