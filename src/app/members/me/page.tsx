"use client";

import { useAuth } from "@/global/auth/authStore";

export default function Me() {
  const { loginMember } = useAuth();

  // 로그인해야 볼 수 있는 페이지
  if (!loginMember) {
    return <div>로그인 후 이용해주세요.</div>;
  }

  return (
    <>
      <h1>회원 정보</h1>
      <div>
        <div>회원번호 : {loginMember.id}</div>
        <div>이름 : {loginMember.name}</div>
        <div>가입일 : {loginMember.createDate}</div>
        <div>수정일 : {loginMember.modifyDate}</div>
      </div>
    </>
  );
}
