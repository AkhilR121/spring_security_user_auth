import { useForm } from "react-hook-form";
import { useSubmit } from "react-router-dom";

export function Login(props: { setAuthPage: (page: string) => void }) {
  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      user_name: "",
      password: "",
    },
  });

    const submit = useSubmit();

  const onSubmit = (data: {user_name: string, password: string}) => {
    const formData = new FormData();
    formData.append('user_name', data.user_name);
    formData.append('password', data.password);
    submit(formData, { method: 'post', action: '/login' });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6">
      <main className="*:flex *:flex-col *:gap-2">
        <div>
          <label htmlFor="user_name">Username</label>
          <input
            {...register("user_name", { required: true })}
            className="p-2 border rounded-2xl outline-none"
            type="text"
            id="user_name"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            {...register("password", { required: true })}
            className="p-2 border rounded-2xl outline-none"
            type="password"
            id="password"
          />
        </div>
      </main>
      <button
        onClick={() => props.setAuthPage("signup")}
        className="text-blue-700 underline self-start w-full cursor-pointer"
      >
        New User?
      </button>
      <footer>
        <button
          type="submit"
          className="flex items-center justify-center w-full"
        >
          Login
        </button>
      </footer>
    </form>
  );
}
