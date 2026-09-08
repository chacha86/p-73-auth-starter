"use client";

import { useAuth } from "@/global/auth/authStore";
import { fetchApi } from "@/lib/client";
import { MemberWithUsernameDto } from "@/type/member";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Adm() {
  const { loginMember } = useAuth();
  const [members, setMembers] = useState<MemberWithUsernameDto[] | null>(null);

  useEffect(() => {
    fetchApi("/api/v1/adm/members")
      .then(setMembers)
      .catch((rsData) => alert(rsData.msg));
  }, []);

  // 🔴 [6강] 인가 - 관리자만 접근
  //   if (!loginMember) return <div>로그인 후 이용해주세요.</div>;
  //   if (!loginMember.isAdmin) return <div>관리자 권한이 없습니다.</div>;
  // TODO

  return (
    <>
      <div className="flex flex-col gap-9">
        <h1>회원 목록</h1>
        {members === null && <div>Loading...</div>}
        {members !== null && members.length === 0 && <div>회원이 없습니다.</div>}
        {members !== null && members.length > 0 && (
          <ul>
            {members.map((member) => (
              <li key={member.id}>
                <Link href={`/posts/${member.id}`}>
                  {member.id} : {member.username} / {member.nickname}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
