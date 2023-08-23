export const config = {
  runtime: "edge",
};

export default async (request) => {

  console.log(request.url.searchParams.get("page"));

  const resp = await fetch("https://svelte-ssg.vercel.app/data.json");
	const data = await resp.json();

  const resp2 = await fetch("https://svelte-ssg.vercel.app/_layout.html");
	const layout = await resp2.text();

  const { default: Component } = await import(`./../precompiled/pages/index.js`);
  const result = Component.render({ data: data });

  const body = layout.replace('{body}', result.html);

  return new Response(body, {
    headers: { "content-type": "text/html" },
  });
};
