import { useForm } from "react-hook-form";
import { Link, useActionData, useSubmit } from "react-router-dom";

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
  const actionData = useActionData();

  const onSubmit = (data: { user_name: string; password: string }) => {
    const formData = new FormData();
    formData.append("user_name", data.user_name);
    formData.append("password", data.password);
    submit(formData, { method: "post", action: "/login" });
  };

  return (
    <div className="flex justify-center items-center relative w-full overflow-hidden h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative flex rounded-2xl shadow-lg bg-white over"
      >
        <div className="border relative p-20 w flex flex-col justify-center items-center">
          <header className="text-2xl font-bold underline underline-offset-8 pb-9">
            Login
          </header>
          <p className="w-full text-red-500">{actionData?.error}</p>
          <main className="*:py-5">
            <div className="w-88">
              <input
                {...register("user_name", { required: true, minLength: 3 })}
                className="p-1.5 w-full border-b outline-none border-gray-400"
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
            <div className="w-88">
              <input
                {...register("password", { required: true })}
                className="p-1.5 w-full border-b outline-none border-gray-400"
                type="password"
                id="password"
                placeholder="Password"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">This is required field*</p>
              )}
            </div>
          </main>
          <Link
            to={"/signup"}
            className="text-blue-700 w-full cursor-pointer ml-2 hover:underline"
          >
            New User?
          </Link>
          <footer>
            <button
              type="submit"
              className="flex items-center justify-center w-full cursor-pointer text-xl font-medium text-white shadow-xl mt-10 rounded-full px-22 /py-3 bg-[#764DE7]"
            >
              Login
            </button>
          </footer>
        </div>
        <div className="bg-blue-200 border w-96">Hi</div>
        <div className="absolute right-0 bg-red-200 rounded-full w-20 h-20"></div>
      </form>
      <div className="-top-56 -left-3/6 -z-10 absolute w-[73%] rounded-r-full h-[150vh] bg-[#764DE7]"></div>
    </div>
  );
}
