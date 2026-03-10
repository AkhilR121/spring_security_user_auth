import { useForm } from "react-hook-form";
import { useSubmit } from "react-router-dom";

type SignUpFormData = {
  user_name: string;
  email: string;
  password: string;
  phone_num: string;
};

export function SignUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormData>({
    defaultValues: {
      user_name: "",
      email: "",
      password: "",
      phone_num: "",
    },
  });

  const submit = useSubmit();

  const onSubmit = (data: SignUpFormData) => {
    const formData = new FormData();
    formData.append('user_name', data.user_name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('phone_num', data.phone_num);
    submit(formData, { method: 'post', action: '/signin' });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <main className="*:flex *:flex-col *:gap-2">
        <div>
          <label htmlFor="email">Email</label>
          <input
            {...register("email", { required: true })}
            className="p-2 border rounded-2xl outline-none"
            type="email"
          />
        </div>
        <div>
          <label htmlFor="user_name">Username</label>
          <input
            {...register("user_name", { required: true })}
            className="p-2 border rounded-2xl outline-none"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="phone_num">Phone Number</label>
          <input
            {...register("phone_num", { required: true })}
            className="p-2 border rounded-2xl outline-none"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            {...register("password", { required: true })}
            className="p-2 border rounded-2xl outline-none"
            type="password"
          />
        </div>
      </main>
      <footer>
        <button
          type="submit"
          className="flex items-center justify-center w-full py-3 cursor-pointer"
        >
          SignIn
        </button>
      </footer>
    </form>
  );
}
