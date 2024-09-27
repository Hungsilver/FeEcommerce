"use client";
import React from "react";
import {
  GoogleReCaptcha,
  GoogleReCaptchaProvider,
} from "react-google-recaptcha-v3";

function GoogleRecaptchaWrapper({ children }: { children: React.ReactNode }) {
  const recaptchaKey: string | undefined =
    process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey ?? "Not defined"}>
      {children}
    </GoogleReCaptchaProvider>
  );
}

export default GoogleRecaptchaWrapper;
