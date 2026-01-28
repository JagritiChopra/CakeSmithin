import { useState } from "react";
import emailjs from "@emailjs/browser";

export const useEmailForm = ({ serviceId, templateId, publicKey }) => {
  const [loading, setLoading] = useState(false);

  const sendForm = async (formRef) => {
    setLoading(true);
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      return { success: true };
    } catch (error) {
      console.error(error);
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  return { sendForm, loading };
};
