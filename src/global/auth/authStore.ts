"use client";
import { create } from "zustand";
import { MemberDto } from "@/type/member";

// 전역 로그인 상태 상자(Zustand).
// 어느 컴포넌트에서든 useAuth() 로 꺼내 쓰고,
// setLoginMember 로 값을 바꾸면 그 값을 쓰던 화면들이 알아서 다시 그려진다.
type AuthState = {
  loginMember: MemberDto | null;
  setLoginMember: (member: MemberDto | null) => void;
};

export const useAuth = create<AuthState>((set) => ({
  loginMember: null,
  setLoginMember: (member) => set({ loginMember: member }),
}));
