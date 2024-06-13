import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../../../providers/AuthProvider";
import { useState } from "react";
import mtaApi from "../../../api/mtaApi";
import { setToken } from "../../../utils/helpers";
import Alert from "../../../components/Alert";

export default function SignInForm() {
  const { handleSubmit, register, formState: { isSubmitting }, } = useForm();
  const { setUser } = useAuth();

  const [alert, setAlert] = useState(null);

  const onSubmit = async (values) => {
    try {
      const { data } = await mtaApi.auth.login(values);
      if (data.message !== "Logged in Successfully!") throw new Error(data.description);
      setToken(data.access_token);
      setUser(data);
    } catch (error) {
      // console.log(error)
      const message = error.response?.data?.error ?? error.message;
      setAlert({ type: "error", message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-y-4">
        {alert && <Alert alert={alert} />}
        <div>
          <label htmlFor="email" className="block text-sm mb-2 dark:text-white">
            Email address
          </label>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              {...register("email")}
              autoComplete="current-email"
              className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
              required
            />
          </div>
        </div>
        <div>
          <div className="flex">
            <label htmlFor="password" className="block text-sm mb-2 dark:text-white">
              Password
            </label>

          </div>
          <div className="relative">
            <input
              type="password"
              id="password"
              name="password"
              {...register("password")}
              autoComplete="current-password"
              className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-primary text-white hover:bg-primary focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10 disabled:bg-gray-300"
        >
          {!isSubmitting ? "Sign in" : "Loading..."}
        </button>
      </div>
    </form>
  );
}
