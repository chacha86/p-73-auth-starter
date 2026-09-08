"use client";

import { useAuth } from "@/global/auth/authStore";

export default function Me() {
  const { loginMember } = useAuth();

  // 🔴 [5강] 인가 - 로그인 안 했으면 막기
  //   if (!loginMember) return <div>로그인 후 이용해주세요.</div>;
  // TODO

  return (
    <>
      <h1>회원 정보</h1>
      <div>
        <div>회원번호 : {loginMember?.id}</div>
        <div>이름 : {loginMember?.name}</div>
        <div>가입일 : {loginMember?.createDate}</div>
        <div>수정일 : {loginMember?.modifyDate}</div>
      </div>
    </>
  );
}
