"use server"; // Directive bắt buộc

import { registerSchema, RegisterInput } from "../lib/zod-schemas";

export async function registerUser(data: RegisterInput) {
  // Validate lại một lần nữa ở Server (Double Validation)
  const result = registerSchema.safeParse(data);

  if (!result.success) {
    return { success: false, message: "Dữ liệu không hợp lệ!" };
  }

  // Giả lập xử lý database
  console.log("Dữ liệu sạch nhận được tại Server:", result.data);

  return { success: true, message: "Đăng ký thành viên thành công!" };
}
