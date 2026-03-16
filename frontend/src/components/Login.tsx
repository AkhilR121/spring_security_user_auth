import { useForm } from "react-hook-form";
import { Link, useSubmit } from "react-router-dom";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user_name: "",
      password: "",
    },
  });

  const submit = useSubmit();

  const onSubmit = (data: { user_name: string; password: string }) => {
    const formData = new FormData();
    formData.append("user_name", data.user_name);
    formData.append("password", data.password);
    submit(formData, { method: "post", action: "/login" });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="m-auto p-6 w-80 flex flex-col justify-center items-center border"
    >
      <main className="*:py-3">
        <div>
          <input
            {...register("user_name", { required: true, minLength: 3 })}
            className="p-2 border rounded-2xl outline-none"
            type="text"
            id="user_name"
            placeholder="Username"
          />
          {errors.user_name?.type === "minLength" && (
            <p className="text-red-500">
              Username must be at least 3 characters
            </p>
          )}
          {errors.user_name?.type === "required" && (
            <p className="text-red-500">This is required field*</p>
          )}
        </div>
        <div>
          <input
            {...register("password", { required: true })}
            className="p-2 border rounded-2xl outline-none"
            type="password"
            id="password"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">This is required field*</p>
          )}
        </div>
      </main>
      <Link to={"/signup"} className="text-blue-700 w-full cursor-pointer ml-2">
        New User?
      </Link>
      <footer>
        <button
          type="submit"
          className="flex items-center justify-center w-full cursor-pointer p-3 border"
        >
          Login
        </button>
      </footer>
    </form>
  );
}
