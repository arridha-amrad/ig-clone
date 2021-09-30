import React from "react";
import { EmailSMSContainer, MenuWrapper } from "./EmailSMS.elements";

interface EmailSMSProps {}

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

export default EmailSMS;
