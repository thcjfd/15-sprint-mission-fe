const API_URL = process.env.API_URL;

export async function getArticles() {
  const res = await fetch(`${API_URL}/articles`);

  if (!res.ok) {
    throw new Error(`게시글 목록 조회 실패: ${res.status}`);
  }
  const data = await res.json();

  return data;
}
