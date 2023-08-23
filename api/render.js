
// import template from "./../precompiled/index.js";

export const config = {
  runtime: "edge",
};

export default async (request) => {
    const data = {
        "posts": [
          {
            "page": "index",
            "title": "Welcome to my site",
            "body": "Lorem ipsum dolor sit amet"
          }]
        }
  const { default: Component } = await import(`./../precompiled/pages/index.js`);
  const result = Component.render({ data: data });
  return new Response(result, {
    headers: { "content-type": "text/html" },
  });
};
