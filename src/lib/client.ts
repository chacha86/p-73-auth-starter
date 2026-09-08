export function fetchApi(url: string, options?: RequestInit) {
  options = options || {};

  // 🔴 [1강] 모든 요청에 쿠키(인증정보)가 자동으로 실려가도록 설정하세요.
  //   힌트: options.credentials
  // TODO

  if (options?.body) {
    const headers = new Headers(options.headers || {});
    headers.set("Content-Type", "application/json");
    options.headers = headers;
  }

  return fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`, options).then(
    async (res) => {
      if (!res.ok) {
        const rsData = await res.json();
        throw rsData;
      }
      return res.json();
    }
  );
}
