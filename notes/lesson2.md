# Angular Cơ Bản -- Buổi 2 (Angular v22)

## Nội dung buổi học

Trong buổi này chúng ta sẽ học:

- Angular Routing
- Tạo nhiều trang trong Angular
- RouterOutlet
- RouterLink
- Cấu hình routes
- Điều hướng giữa các trang

---

# 1. Angular Routing là gì?

**Routing** cho phép ứng dụng Angular có nhiều trang khác nhau mà
**không cần reload trình duyệt**.

Đây là cơ chế quan trọng để xây dựng **Single Page Application (SPA)**.

Ví dụ website có các trang:

- Trang chủ
- Trang giới thiệu
- Trang liên hệ

Khi người dùng chuyển trang, Angular chỉ **thay đổi component hiển
thị**, không tải lại toàn bộ trang.

---

# 2. File routing trong Angular v22

Khi tạo project với:

ng new angular-learning

và chọn:

Add Angular Routing → Yes

Angular sẽ tạo file:

src/app/app.routes.ts

File này dùng để **khai báo các route của ứng dụng**.

---

# 3. Cấu hình Routes

Ví dụ:

## app.routes.ts

```ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];
```

Giải thích:

Path Component

---

/ HomeComponent
/about AboutComponent

---

# 4. RouterOutlet

`RouterOutlet` là nơi Angular **hiển thị component theo route**.

## app.ts

```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {}
```

---

## app.html

```html
<h1>Angular Routing Demo</h1>

<router-outlet></router-outlet>
```

Component tương ứng với route sẽ hiển thị tại đây.

---

# 5. Tạo Component cho các trang

Tạo component bằng Angular CLI.

## Tạo trang Home

```bash
ng g c pages/home
```

## Tạo trang About

```bash
ng g c pages/about
```

---

# 6. Home Component

## home.ts

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h2>Trang chủ</h2>
    <p>Chào mừng bạn đến với website Angular</p>
  `,
})
export class HomeComponent {}
```

---

# 7. About Component

## about.ts

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <h2>Trang giới thiệu</h2>
    <p>Đây là trang giới thiệu về ứng dụng</p>
  `,
})
export class AboutComponent {}
```

---

# 8. RouterLink

`routerLink` dùng để **điều hướng giữa các trang**.

## app.html

```html
<h1>Angular Routing Demo</h1>

<nav>
  <a routerLink="/">Home</a> |
  <a routerLink="/about">About</a>
</nav>

<hr />

<router-outlet></router-outlet>
```

---

# 9. Ví dụ hoàn chỉnh

## app.routes.ts

```ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];
```

---

## Kết quả

Khi truy cập:

http://localhost:4200

→ hiển thị trang Home

Khi truy cập:

http://localhost:4200/about

→ hiển thị trang About

---

# BÀI TẬP THỰC HÀNH

## Bài 1

Tạo thêm một trang:

contact

Sử dụng CLI:

ng g c pages/contact

---

## Bài 2

Cập nhật routes:

```ts
{ path: 'contact', component: ContactComponent }
```

---

## Bài 3

Thêm menu điều hướng:

    Home
    About
    Contact

Sử dụng:

routerLink

---

## Bài 4

Trang Contact hiển thị nội dung:

    Đây là trang liên hệ
    Email: example@gmail.com

---

## Bài 5 (Nâng cao)

Tạo route:

    /products

Hiển thị danh sách:

    Laptop
    Phone
    Tablet

---

# TỔNG KẾT BUỔI 2

Trong buổi này bạn đã học:

- Angular Routing
- Cấu hình routes
- RouterOutlet
- RouterLink
- Tạo nhiều trang trong Angular

---
