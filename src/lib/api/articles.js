const BASE_URL =
  typeof window === "undefined"
    ? process.env.API_URL
    : process.env.NEXT_PUBLIC_API_URL;

export async function getArticles({ keyword, orderBy, pageSize } = {}) {
  const params = new URLSearchParams();
  if (keyword) params.set("keyword", keyword);
  if (orderBy) params.set("orderBy", orderBy);
  if (pageSize) params.set("pageSize", pageSize);

  const query = params.toString();
  const res = await fetch(`${BASE_URL}/articles${query ? `?${query}` : ""}`);

  if (!res.ok) throw new Error(`게시글 목록 조회 실패: ${res.status}`);
  return await res.json();
}

export async function createArticle(data) {
  const res = await fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error(`게시글 등록 실패: ${res.status}`);
  return res.json();
}
