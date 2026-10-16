import { useState, type ChangeEvent } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: "connect" | "inquiries";
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  subject: "connect",
  message: "",
};

const Form = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState<FormErrors>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "email is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "phone number i required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "message is required";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "connect",
      message: "",
    });

    setError({});

    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);

    console.log(formData);
  };

  return (
    <form className="" action="" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 md:max-w-200">
        <div className="mb-4">
          <label className="block text-background" htmlFor="name">
            name
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-background w-64 text-primary p-2 rounded-md my-2"
          />
          {error.name && <p className="text-error">{error.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-background" htmlFor="email">
            e-mail
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-background w-64 text-primary p-2 rounded-md my-2"
          />
          {error.email && <p className="text-error">{error.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-background" htmlFor="phone">
            phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="phone"
            value={formData.phone}
            onChange={handleChange}
            className="bg-background w-64 text-primary p-2 rounded-md my-2"
          />
        </div>
        <div className="text-background mb-4">
          <p>contact type</p>
          <div>
            <label className="flex w-fit gap-2 mt-2" htmlFor="connect">
              <input
                type="radio"
                name="subject"
                value="connect"
                id="connect"
                className="accent-secondary"
                checked={formData.subject === "connect"}
                onChange={handleChange}
              />
              connect
            </label>
          </div>
          <div>
            <label className="flex w-fit gap-2 mt-2" htmlFor="inquiries">
              <input
                type="radio"
                name="subject"
                value="inquiries"
                id="inquiries"
                className="accent-secondary"
                checked={formData.subject === "inquiries"}
                onChange={handleChange}
              />
              inquiries
            </label>
          </div>
        </div>
        <div className="w-64 mb-4">
          <label className="text-background block" htmlFor="message">
            message
          </label>
          <textarea
            className="bg-background w-full text-primary p-2 rounded-md my-2"
            rows={8}
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}></textarea>
          {error.message && <p className="text-error">{error.message}</p>}{" "}
          {isSuccess && (
            <p className="text-success">your message was sent!☺️</p>
          )}
        </div>
      </div>

      <button
        className="rounded-full px-4 py-2 bg-secondary text-background w-24 mb-2 font-medium transition-colors;"
        type="submit">
        send
      </button>
    </form>
  );
};
export default Form;
