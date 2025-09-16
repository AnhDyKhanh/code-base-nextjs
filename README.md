This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

## Learn More

```bash

nextjs-full-stack/
│
├── app/                # Giao diện, layout, trang chính (Next.js App Router)
│   ├── favicon.ico
│   ├── GlobalProvider.tsx
│   ├── globals.css
│   ├── head.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── backend/            # Logic server, API, DB, xử lý nghiệp vụ
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── repository/
│   ├── services/
│   └── utils/
│
├── components/         # Component giao diện dùng lại
│   └── layouts/
│
├── context/            # Quản lý state toàn cục (React Context)
│
├── pages/              # Routing & API (Next.js Pages Router)
│   └── api/
│
├── public/             # File tĩnh (ảnh, icon, logo, ...)
│
├── types/              # Định nghĩa kiểu dữ liệu dùng chung
│
├── .vscode/            # Cấu hình cho VS Code
│
├── package.json        # Cấu hình npm, dependencies
├── tsconfig.json       # Cấu hình TypeScript
├── tailwind.config.js  # Cấu hình TailwindCSS
├── postcss.config.js   # Cấu hình PostCSS
├── .eslintrc.json      # Cấu hình ESLint
├── .prettierrc.json    # Cấu hình Prettier
└── README.md           # Tài liệu dự án

```
