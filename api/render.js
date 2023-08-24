export const config = {
  runtime: "edge",
};

export default async (request) => {

  const { searchParams } = new URL(request.url);
  var page = searchParams.get("page");
  page = page.replace('.html', '');

  console.log(page)

  if(page==''){
    page = 'index';
  }

  const resp = await fetch("https://svelte-ssg.vercel.app/data.json");
	var data = await resp.json();
  data.page = page;

  const resp2 = await fetch("https://svelte-ssg.vercel.app/_layout.html");
	const layout = await resp2.text();

  try {
  const { default: Component } = await import(`./../precompiled/pages/${page}.js`);
  const result = Component.render({ data: data });

  let body = layout.replace('{body}', result.html);

  return new Response(body, {
    headers: { "content-type": "text/html" },
  });
  } catch (e) {
    let error = `<h1>Error 404</h1>`
    let body = layout.replace('{body}', error);

    return new Response(body, {
      headers: { "content-type": "text/html" },
    });
  }
};
