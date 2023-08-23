import { compile } from 'svelte/compiler';
import * as fs from "fs"

async function compileComponents(filename){

  let name = filename.replace('.svelte','');

  const source = fs.readFileSync(`./src/lib/${filename}`, 'utf8');


  // Compile the component to JavaScript code
  const { js } = compile(source, {generate: 'ssr'});

  // Write the compiled code to a temporary JS file
  const tmpFile = `./precompiled/lib/${name}.js`
  fs.writeFileSync(tmpFile, js.code);


  
  // Import the temporary JS file as a module
  const { default: Component } = await import(`./precompiled/lib/${name}.js`);
  //const body = Component.render({ data: data });


 

  //console.log(html); 
  // fs.writeFileSync(`./public/${name}.html`, html);
 

  // Delete the temporary file
  // fs.unlinkSync(tmpFile);
}

async function compilePages(filename){

  let name = filename.replace('.svelte','');

  const source = fs.readFileSync(`./src/pages/${filename}`, 'utf8');
  const layout = fs.readFileSync(`./src/layout.html`, 'utf8');
  var data = fs.readFileSync(`./src/data.json`, 'utf8');
  data = JSON.parse(data);
  // console.log(data)

  // Compile the component to JavaScript code
  var { js } = compile(source, {generate: 'ssr'});
  js.code = js.code.replaceAll('.svelte', '.js')


  // Write the compiled code to a temporary JS file
  const tmpFile = `./precompiled/pages/${name}.js`
  fs.writeFileSync(tmpFile, js.code);


  
  // Import the temporary JS file as a module
  const { default: Component } = await import(`./precompiled/pages/${name}.js`);
  const body = Component.render({ data: data });


  const html = layout.replace('{body}', body.html);

  console.log(html); 
  fs.writeFileSync(`./public/${name}.html`, html);
 

  // Delete the temporary file
  // fs.unlinkSync(tmpFile);
}

const comps = fs.readdirSync('./src/lib');
comps.forEach((comp)=>{
  compileComponents(comp);
})

const files = fs.readdirSync('./src/pages');
files.forEach((file)=>{
  compilePages(file);
})
