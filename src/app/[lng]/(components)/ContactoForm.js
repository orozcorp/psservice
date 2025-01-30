"use client";
import { useState, useCallback, memo } from "react";
import { postData } from "../../lib/helpers/getData";
import Alert from "../../components/atoms/Alert";

const MUTATION = `
  mutation Mutation($contact: Contact) {
    contact(contact: $contact) {
      code
      data
      message
      success
    }
  }
`;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FormInput = memo(({ id, type, label, value, onChange }) => (
  <div className="relative z-0 w-full mb-6 group">
    <input
      type={type}
      name={id}
      id={id}
      className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
      value={value}
      onChange={onChange}
    />
    <label
      htmlFor={id}
      className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
    >
      {label}
    </label>
  </div>
));

FormInput.displayName = "FormInput";

const SuccessMessage = memo(() => (
  <div className="text-green-600 text-center py-4 font-medium">
    Recibimos tu mensaje
  </div>
));
SuccessMessage.displayName = "SuccessMessage";

export default function ContactoForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = useCallback(
    (field) => (e) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (error) setError("");
    },
    [error]
  );

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setError("");
      setLoading(true);

      if (!emailPattern.test(form.email)) {
        setError("Email inválido");
        setLoading(false);
        return;
      }

      try {
        const response = await postData({
          query: MUTATION,
          variables: { contact: form },
        });

        if (response?.success) {
          setSent(true);
        } else {
          throw new Error(response?.message || "Error al enviar el mensaje");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [form]
  );

  if (sent) return <SuccessMessage />;

  return (
    <form className="my-8" onSubmit={handleSubmit}>
      <FormInput
        id="name"
        type="text"
        label="Nombre"
        value={form.name}
        onChange={handleChange("name")}
      />
      <FormInput
        id="email"
        type="email"
        label="Email"
        value={form.email}
        onChange={handleChange("email")}
      />
      <FormInput
        id="tel"
        type="tel"
        label="Teléfono"
        value={form.tel}
        onChange={handleChange("tel")}
      />
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Escribe un mensaje corto"
        value={form.message}
        onChange={handleChange("message")}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Enviar Mensaje"}
      </button>
      {error && <Alert color="red" title="Error" data={error} />}
    </form>
  );
}
