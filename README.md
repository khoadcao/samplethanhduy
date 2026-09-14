# Portfolio Demo - Vũ Thành Duy

Bản demo trang giới thiệu cá nhân (personal portfolio / personal branding) cho
một nhà đào tạo & tư vấn AI/EdTech. Giao diện dark theme sang trọng, màu nhấn
gradient teal → cyan → blue, card bo góc có hiệu ứng viền sáng (glow), tiêu đề
lớn và bố cục thoáng. Toàn bộ nội dung hiện tại là **placeholder tiếng Việt** để
xem trước layout, dễ dàng thay bằng nội dung thật sau này.

## Các section

- **Header**: logo + tên, menu (Về tôi, Giải pháp, Blog, Showcase), nút chuyển
  giao diện sáng/tối, nút đổi ngôn ngữ (EN — placeholder), nút CTA "Đặt lịch hẹn",
  và menu hamburger cho mobile.
- **Hero**: lời chào lớn, câu giới thiệu, nút "Tải Profile", 3 con số thống kê,
  ảnh chân dung với các tag nổi.
- **Tôi là ai (About)**: tiểu sử + cột "Chuyên môn" với các thanh kỹ năng có %.
- **Kinh nghiệm công tác (Experience)**: timeline các mốc thời gian + highlight.
- **Giá trị tôi mang lại (Values)**: 3 card dịch vụ có icon + mô tả.
- **Danh mục chương trình đào tạo AI (Programs)**: lưới card chủ đề + card CTA.
- **Footer**: tên, tagline, liên kết điều hướng, dòng bản quyền.

## Công nghệ & phiên bản (pinned)

| Thư viện | Phiên bản |
| --- | --- |
| next | 14.2.5 |
| react | 18.3.1 |
| react-dom | 18.3.1 |
| typescript | 5.4.5 |
| tailwindcss | 3.4.4 |
| postcss | 8.4.39 |
| autoprefixer | 10.4.19 |
| eslint | 8.57.0 |
| eslint-config-next | 14.2.5 |

- **Next.js 14 (App Router)** + **React 18** + **TypeScript**
- **Tailwind CSS 3** với `darkMode: 'class'`
- Không dùng font từ Google Fonts hay bất kỳ CDN nào; dùng system font stack và
  các file SVG cục bộ trong `public/` (không phụ thuộc image host bên ngoài).

## Chạy dự án ở máy cá nhân

Yêu cầu **Node.js 18 trở lên**.

```bash
npm install
npm run dev
```

Sau đó mở [http://localhost:3000](http://localhost:3000).

Các script khác:

```bash
npm run build   # build production (next build)
npm run start   # chạy bản build production
npm run lint    # kiểm tra lint
```

> Lưu ý: dự án được viết tay trong một sandbox không có kết nối tới npm registry,
> nên `npm install` và `next build` **chưa được chạy trong sandbox**. Việc build
> sẽ thực hiện được bình thường ở máy cá nhân hoặc trên Vercel khi có mạng.

## Chỉnh sửa nội dung

Toàn bộ nội dung (nhãn menu, hero, tiểu sử, kỹ năng và %, timeline kinh nghiệm,
card giá trị, danh mục chương trình, footer) được tập trung trong một file duy
nhất:

```
lib/content.ts
```

Chỉ cần sửa các chuỗi và số trong `content` là giao diện tự cập nhật — không cần
đụng tới code component.

## Deploy lên Vercel (free tier)

1. Đẩy mã nguồn lên một Git provider (GitHub / GitLab / Bitbucket).
2. Vào [vercel.com](https://vercel.com), chọn **Add New… → Project** và import
   repository.
3. Vercel tự nhận diện framework là **Next.js** — giữ nguyên cấu hình mặc định
   (Build Command `next build`, Output mặc định).
4. **Không cần biến môi trường (env vars) nào.**
5. Nhấn **Deploy**. Sau khi hoàn tất, bạn sẽ nhận được URL công khai của trang.
