import { ComponentPropsWithoutRef, FormEvent, useRef } from "react";

type FormProps = {
  onSave: (value: unknown) => void;
} & ComponentPropsWithoutRef<"form">;

function Form({ onSave, children, ...otherProps }: FormProps) {
  const form = useRef<HTMLFormElement>(null);

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    form.current?.reset();
  }

  return (
    <form {...otherProps} onClick={handleFormSubmit} ref={form}>
      {children}
    </form>
  );
}

export default Form;
