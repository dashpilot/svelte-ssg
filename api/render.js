
// import template from "./../precompiled/index.js";

export const config = {
  runtime: "edge",
};

export default async (request) => {
  const response = await fetch("/data.json");
	const data = await response.json();
  const { default: Component } = await import(`./../precompiled/pages/index.js`);
  const result = Component.render({ data: data });
  return new Response(result.html, {
    headers: { "content-type": "text/html" },
  });
};
