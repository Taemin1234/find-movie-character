import type { Metadata } from "next";
import "./globals.css";
import styles from './layout.module.css'
import { URLProvider } from '../context/URLContext'

export const metadata: Metadata = {
  title: "나와 맞는 영화 캐릭터 찾기",
  description: "나와 맞는 영화 캐릭터는 누구일까요??",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <URLProvider>
          <div className={styles.container}>
            <header className={styles.header}>
              <p>🎞️나와 맞는 영화 캐릭터</p>
            </header>
            <main className={styles.main}>{children}</main>
          </div>
        </URLProvider>
      </body>
    </html>
  );
}
