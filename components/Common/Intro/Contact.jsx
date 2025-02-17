import React from "react";
import { CONTACTS } from "../../../constants/constants";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col space-y-2 pt-6">
      <div className="flex flex-col">
        <span className="text-Snow text-xs font-bold">Email Address</span>

        <span className="text-xs text-LightGray" mailto="true">
          <Link href={`mailto:${CONTACTS.EMAIL}`}>{CONTACTS.EMAIL}</Link>
        </span>
      </div>
    </div>
  );
};

export default Contact;
