import type { Metadata } from "next";
import "./globals.css";
import { URLProvider } from '../context/URLContext'

export const metadata: Metadata = {
  title: "나와 맞는 영화 캐릭터 찾기",
  description: "나와 맞는 영화 캐릭터는 누구일까요?? 테스트를 통해 찾아보세요!",
  openGraph: {
    title: "나와 맞는 영화 캐릭터 찾기",
    description : "나와 맞는 영화 캐릭터는 누구일까요?? 테스트를 통해 찾아보세요!",
    images : ["https://find-movie-character.vercel.app/images/thumbnail.png"]
  },
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
          {children}
        </URLProvider>
      </body>
    </html>
  );
}
