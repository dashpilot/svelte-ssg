export const config = {
  runtime: "edge",
};

export default async (request) => {

  const { searchParams } = new URL(request.url);
  var page = searchParams.get("page");
  page.replace('.html', '');

  console.log(page)

  if(page==''){
    page = 'index';
  }

  const resp = await fetch("https://svelte-ssg.vercel.app/data.json");
	var data = await resp.json();
  data.page = page;

  const resp2 = await fetch("https://svelte-ssg.vercel.app/_layout.html");
	const layout = await resp2.text();

  const { default: Component } = await import(`./../precompiled/pages/index.js`);
  const result = Component.render({ data: data });

  const body = layout.replace('{body}', result.html);

  return new Response(body, {
    headers: { "content-type": "text/html" },
  });
};
