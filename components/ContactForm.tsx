"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/kontakt/actions";
import { initialActionState } from "@/lib/server/action-state";
import { TextField, TextareaField, ConsentField, HoneypotField } from "./form-fields";
import { Button } from "./Button";
import { StatusMessage } from "./StatusMessage";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialActionState);

  return (
    <form action={formAction} className="space-y-5" noValidate={false}>
      <HoneypotField />
      <div className="grid gap-4 sm:grid-cols-2">
        <TextField id="name" label="Name" required autoComplete="name" error={state.fieldErrors?.name} />
        <TextField id="email" label="E-Mail" type="email" required autoComplete="email" error={state.fieldErrors?.email} />
      </div>
      <TextField id="phone" label="Telefon (optional)" type="tel" autoComplete="tel" error={state.fieldErrors?.phone} />
      <TextareaField id="message" label="Deine Nachricht" required error={state.fieldErrors?.message} />
      <ConsentField error={state.fieldErrors?.consent} />
      <StatusMessage state={state} />
      <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
        {pending ? "Wird gesendet…" : "Nachricht senden"}
      </Button>
    </form>
  );
}
