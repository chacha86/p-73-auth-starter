"use client";
import { useAuth } from "@/global/auth/authStore";
import { fetchApi } from "@/lib/client";
import Link from "next/link";
import { useEffect } from "react";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loginMember, setLoginMember } = useAuth();
  const isLogin = !!loginMember;
  const isAdmin = !!loginMember?.isAdmin;

  useEffect(() => {
    // 🔴 [3강] 로그인 상태 확인: GET /api/v1/members/me
    //   성공하면 setLoginMember(data.data)   ← /me 응답은 data.data 가 회원 정보
    //   로그인 안 한 상태면 실패하니 .catch(() => {}) 로 무시
    // TODO
  }, []);

  const logout = () => {
    // 🔴 [4강] 로그아웃: DELETE /api/v1/members/logout 후 setLoginMember(null)
    // TODO
  };

  return (
    <>
      <header>
        <nav className="flex gap-4">
          <Link href="/">메인</Link>
          <Link href="/posts">글 목록</Link>
          {!isLogin && <Link href="/members/login">로그인</Link>}
          {isLogin && <button onClick={logout}>로그아웃</button>}
          {isLogin && <Link href="/members/me">{loginMember?.name}</Link>}
          {isLogin && isAdmin && <Link href="/adm/members">회원 목록</Link>}
        </nav>
      </header>
      <main className="flex-1 flex flex-col justify-center items-center">
        {children}
      </main>
      <footer>푸터</footer>
    </>
  );
}
