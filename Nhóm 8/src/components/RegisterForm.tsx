"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterInput } from "../lib/zod-schemas";
import { registerUser } from "../actions/auth-action";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur", // Real-time validation khi người dùng rời khỏi input
  });

  const onSubmit = async (data: RegisterInput) => {
    const response = await registerUser(data);
    alert(response.message);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 flex flex-col gap-4">
      {/* Name */}
      <div>
        <input
          {...register("name")}
          placeholder="Họ và tên"
          className="border p-2 w-full"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          {...register("email")}
          placeholder="Email"
          className="border p-2 w-full"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <input
          {...register("password")}
          type="password"
          placeholder="Mật khẩu"
          className="border p-2 w-full"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Xác nhận mật khẩu"
          className="border p-2 w-full"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Đăng ký
      </button>
    </form>
  );
}
