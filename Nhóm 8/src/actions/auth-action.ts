"use server";

import { registerSchema, RegisterInput } from "../lib/zod-schemas";

export async function registerUser(data: RegisterInput) {
  // Server-side validation (Double Validation)
  const parsed = registerSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: "Dữ liệu không hợp lệ.",
    };
  }

  // Nếu validation thành công, xử lý logic phía server
  console.log("Server-side validation successful. Data:", parsed.data);

  try {
    // TODO: Thêm logic lưu vào database tại đây
    // Ví dụ:
    // await db.user.create({
    //   name: parsed.data.name,
    //   email: parsed.data.email,
    //   password: hashedPassword,
    // });

    return {
      success: true,
      message: "Đăng ký thành công!",
    };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      success: false,
      message: "Đã có lỗi xảy ra. Vui lòng thử lại.",
    };
  }
}
