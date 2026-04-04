# Angular Cơ Bản -- Buổi 10 (Login + Lưu Token LocalStorage)

## Nội dung buổi học

- Tạo form đăng nhập
- Gọi API `/login`
- Xử lý token
- Lưu token vào `localStorage`
- Điều hướng sau login
- Loading / Error

---

## 1. Ý tưởng

Luồng login chuẩn:

1.  Nhập email + password
2.  Validate form
3.  Submit → POST `/login`
4.  Server trả về `accessToken`
5.  Lưu vào `localStorage`
6.  Chuyển trang (dashboard / home)

---

## 2. Component Login

```ts
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  imports: [ReactiveFormsModule],
  templateUrl: "./login.html",
  styleUrl: "./login.css",
})
export class Login {
  loginForm: FormGroup;

  loading = false;
  error = "";

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.error = "";

    const data = this.loginForm.value;

    this.http.post<any>("http://localhost:3000/login", data).subscribe({
      next: (res) => {
        this.loading = false;

        localStorage.setItem("token", res.accessToken);
        localStorage.setItem("user", JSON.stringify(res.user));

        this.router.navigateByUrl("/");
      },
      error: () => {
        this.loading = false;
        this.error = "Sai email hoặc mật khẩu";
      },
    });
  }
}
```

---

## 3. HTML

```html
<div class="p-6 max-w-md mx-auto">
  <h1 class="text-2xl font-semibold mb-6">Đăng nhập</h1>

  <form [formGroup]="loginForm" (ngSubmit)="submitForm()" class="space-y-6">
    <div>
      <label class="block font-medium mb-1">Email</label>
      <input formControlName="email" type="email" class="w-full border rounded-lg px-3 py-2" />
    </div>

    <div>
      <label class="block font-medium mb-1">Mật khẩu</label>
      <input formControlName="password" type="password" class="w-full border rounded-lg px-3 py-2" />
    </div>

    <button type="submit" [disabled]="loginForm.invalid || loading" class="px-5 py-2 bg-green-600 text-white rounded-lg w-full">{{ loading ? "Đang đăng nhập..." : "Đăng nhập" }}</button>

    <p class="text-red-500" *ngIf="error">{{ error }}</p>
  </form>
</div>
```

---

## 4. Response API

```json
{
  "accessToken": "abc123...",
  "user": {
    "id": 1,
    "email": "test@gmail.com"
  }
}
```

---

## 5. LocalStorage

Lưu token:

```ts
localStorage.setItem("token", res.accessToken);
```

Lấy token:

```ts
const token = localStorage.getItem("token");
```

Xóa token:

```ts
localStorage.removeItem("token");
```

---

## 6. Gửi token lên API

```ts
this.http.get("http://localhost:3000/profile", {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
```

---

## 7. Logout

```ts
logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  this.router.navigateByUrl("/login");
}
```

---

## 8. Bài tập

### Bài 1

Hiển thị lỗi từng field (email invalid, password ngắn)

### Bài 2

Hiển thị thông tin user sau khi login

### Bài 3

Tạo nút Logout

### Bài 4

Nếu đã login → không cho vào trang login nữa

👉 Gợi ý: check localStorage.getItem("token")

### Bài 5 (Nâng Cao)

Tự động thêm token vào mọi request (Interceptor)

👉 Gợi ý:

- Tạo Interceptor: ng generate interceptor auth
- Config trong auth.interceptor.ts

---

## 9. Tổng kết

- Gọi API `/login`
- Nhận token
- Lưu localStorage
- Dùng token cho API
- Điều hướng sau login
