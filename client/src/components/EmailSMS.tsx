import React from "react";
import styled from "styled-components"

interface EmailSMSProps { }

const EmailSMS: React.FC<EmailSMSProps> = () => {
  return (
    <EmailSMSContainer>
      <h1>Subscribe to :</h1>
      <MenuWrapper>
        <input type="checkbox" checked={true} />
        <label htmlFor="feedback">Feedback Emails</label>
        <p>Give feedback on Instagram.</p>
      </MenuWrapper>
      <MenuWrapper>
        <input type="checkbox" checked={true} />
        <label htmlFor="feedback">Remainder emails</label>
        <p>Get notifications you may have missed.</p>
      </MenuWrapper>
      <MenuWrapper>
        <input type="checkbox" checked={true} />
        <label htmlFor="feedback">Product emails</label>
        <p>Get tips about Instagram's tools.</p>
      </MenuWrapper>
      <MenuWrapper>
        <input type="checkbox" checked={true} />
        <label htmlFor="feedback">New emails</label>
        <p>Learn about new Instagram features.</p>
      </MenuWrapper>
    </EmailSMSContainer>
  );
};

const EmailSMSContainer = styled.div`
  display: block;
  width: 600px;
  height: 400px;
  margin-top: 24px;
  margin-left: 4rem;

  h1 {
    font-size: 22px;
    font-weight: 400;
  }
`;

const MenuWrapper = styled.div`
  font-weight: 600;
  margin-top: 2rem;

  label {
    margin-left: 10px;
    font-size: 15px;
  }

  p {
    font-weight: 500;
    color: #ccc;
    margin-top: 5px;
  }
`;

export default EmailSMS;
