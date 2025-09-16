import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

// Header component hiển thị logo và các link điều hướng
const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <span>Nexjs-Code-Base</span>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/articles">Bài viết</Link>
        <Link href="/questions">Q&A</Link>
        <Link href="/courses">Khóa học</Link>
        <Link href="/dashboard">Thống kê</Link>
        <Link href="/profile">Tài khoản</Link>
      </nav>
    </header>
  );
};

export default Header;
