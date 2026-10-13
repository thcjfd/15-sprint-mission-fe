const API_URL = process.env.API_URL;

export async function getArticles({ keyword, orderBy, pageSize } = {}) {
  const params = new URLSearchParams();
  if (keyword) params.set("keyword", keyword);
  if (orderBy) params.set("orderBy", orderBy);
  if (pageSize) params.set("pageSize", pageSize);

  const query = params.toString();
  const res = await fetch(`${API_URL}/articles${query ? `?${query}` : ""}`);

  if (!res.ok) {
    throw new Error(`게시글 목록 조회 실패: ${res.status}`);
  }
  const data = await res.json();

  return data;
}
