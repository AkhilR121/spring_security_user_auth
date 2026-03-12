import { useForm } from "react-hook-form";
import { useSubmit } from "react-router-dom";
import { SignUpFormData } from "../model/modal";

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
    <form onSubmit={handleSubmit(onSubmit)} className="m-auto mt-72 p-6 w-80 flex flex-col justify-center items-center border">
      <main className="*:py-3">
        <div>
          <input
            {...register("email", { required: true })}
            className="p-2 border rounded-2xl outline-none"
            type="email"
            placeholder="Email"
          />
          {errors.email?.type === 'required' && <p className="text-red-500">This is required field*</p>}
        </div>
        <div>
          <input
            {...register("user_name", { required: true, minLength: 3 })}
            className="p-2 border rounded-2xl outline-none"
            type="text"
            placeholder="Username"
          />
          {errors.user_name?.type === 'required' && <p className="text-red-500">This is required field*</p>}
          {errors.user_name?.type === 'minLength' && <p className="text-red-500">Username must be at least 3 characters*</p>}
        </div>
        <div>
          <input
            {...register("phone_num", { required: true, maxLength: 10 })}
            className="p-2 border rounded-2xl outline-none"
            type="text"
            placeholder="Phone Number"
          />
          {errors.phone_num?.type === 'required' && <p className="text-red-500">This is required field*</p>}
          {errors.phone_num?.type === 'maxLength' && <p className="text-red-500">Phone number must be 10 digits*</p>}
        </div>
        <div>
          <input
            {...register("password", { required: true })}
            className="p-2 border rounded-2xl outline-none"
            type="password"
            placeholder="Password"
          />
          {errors.password?.type === 'required' && <p className="text-red-500">This is required field*</p>}
        </div>
      </main>
      <footer>
        <button
          type="submit"
          className="flex items-center justify-center w-full py-3 cursor-pointer border mt-6 p-3"
        >
          Sign-up
        </button>
      </footer>
    </form>
  );
}
