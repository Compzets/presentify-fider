import React from "react";
import { Modal, Checkbox } from "@fider/components/common";
import { useFider } from "@fider/hooks";

interface LegalAgreementProps {
  onChange: (agreed: boolean) => void;
}

export const Home: React.FunctionComponent<{}> = () => {
  const fider = useFider();

  if (fider.settings.hasLegal) {
    return (
      <a href="https://presentify.compzets.com" target="_blank">
        Home
      </a>
    );
  }
  return null;
};

export const Faq: React.FunctionComponent<{}> = () => {
  const fider = useFider();

  if (fider.settings.hasLegal) {
    return (
      <a href="https://presentify.compzets.com/faq.html" target="_blank">
        Faq
      </a>
    );
  }
  return null;
};

export const PrivacyPolicy: React.FunctionComponent<{}> = () => {
  const fider = useFider();

  if (fider.settings.hasLegal) {
    return (
      <a href="https://presentify.compzets.com/privacy.html" target="_blank">
        Privacy Policy
      </a>
    );
  }
  return null;
};

export const LegalNotice: React.FunctionComponent<{}> = () => {
  const fider = useFider();

  if (fider.settings.hasLegal) {
    return (
      <p className="info">
        By signing in, you agree to the <PrivacyPolicy />.
      </p>
    );
  }
  return null;
};

export const LegalFooter: React.FunctionComponent<{}> = () => {
  const fider = useFider();

  if (fider.settings.hasLegal) {
    return (
      <Modal.Footer align="center">
        <LegalNotice />
      </Modal.Footer>
    );
  }
  return null;
};

export const LegalAgreement: React.FunctionComponent<LegalAgreementProps> = props => {
  const fider = useFider();

  if (fider.settings.hasLegal) {
    return (
      <Checkbox field="legalAgreement" onChange={props.onChange}>
        I have read and agree to the <PrivacyPolicy />.
      </Checkbox>
    );
  }
  return null;
};
