export async function fetchGraphcms(query: string) {
  const res = await fetch(process.env.GRAPHCMS_URL, {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `query {
        ${query}
      }`,
    }),
    method: "POST",
  });

  const data = await res.json();
  return data;
}