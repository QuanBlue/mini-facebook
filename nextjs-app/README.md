This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

---

- tsconfig.json [cheat sheet](https://github.com/rmolinamir/typescript-cheatsheet/blob/master/tsconfig.json)
- Tailwind config [here](https://tailwindcss.com/docs/configuration)

**Why use Tailwind as a PostCSS plugin?**
Khi nói về "Tailwind as a PostCSS plugin", nó có nghĩa là bạn sử dụng Tailwind CSS thông qua PostCSS bằng cách tích hợp Tailwind CSS vào quy trình xử lý CSS của mình thông qua PostCSS.

Tailwind CSS là một framework CSS utility-first, và PostCSS là công cụ mà Tailwind thường được tích hợp để xử lý và tối ưu hóa các tệp CSS.

> - Tích hợp Các Tính Năng Mới của CSS: PostCSS có thể giúp bạn sử dụng các tính năng mới của CSS trước khi chúng được chính thức hỗ trợ trong tất cả các trình duyệt. Điều này giúp làm tăng khả năng tương thích và sử dụng các tính năng mới một cách nhanh chóng.
>
> - Autoprefixing: Autoprefixer là một plugin phổ biến của PostCSS, giúp thêm các tiền tố (prefix) tự động cho các thuộc tính CSS để đảm bảo tương thích trên nhiều trình duyệt.
>
> - Minification: Các plugin như cssnano có thể được tích hợp để tối ưu hóa và nén mã nguồn CSS, giảm dung lượng tệp tin và tăng tốc tải trang
> - Sass và Less: PostCSS có thể xử lý các ngôn ngữ biên dịch thành CSS như Sass và Less thông qua các plugin tương ứng.
>
> - Chuyển đổi Future CSS: Sử dụng các plugin như preset-env để biến đổi CSS mới với các tính năng ECMAScript và CSS chưa được chính thức hỗ trợ thành mã nguồn CSS tương thích.
>
> - Làm việc với Tailwind CSS: Tailwind CSS, một framework CSS utility-first, thường được tích hợp thông qua PostCSS để tạo ra một bộ stylesheet chủ động và tối ưu.
