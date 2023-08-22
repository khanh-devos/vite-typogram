import { animation, separate } from './animate';
import create from './typograms';

document.addEventListener("DOMContentLoaded", async () => {
  // replace all of the <script type="text/typogram"> tags
  for (const script of document.querySelectorAll("script[type='text/typogram']")) {
    if (script.hasAttribute("disabled")) {
      continue;
    }
    //setTimeout(() => {
    const source123 = script.innerText;
    const zoom = Number(script.getAttribute("zoom") || 0.3);
    const debug = script.hasAttribute("grid");

    if (!source123.includes(')@{')) {
      // define there is no animation inside.
      const svg = create(source123, zoom, debug);      
      script.parentNode.insertBefore(svg, script.nextSibling);
      continue;
    } 

    // animation starts
    const [sources, classname, ani] = separate(source123);
    const {width, height} = ani;
    var containSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    containSvg.setAttribute("width", width);
    containSvg.setAttribute("height", height);

    for (const source of sources) {
      const svg = create(source, zoom, debug);
      svg.classList.add(classname)
      svg.style.display = 'none';
      containSvg.appendChild(svg);
    }

    script.parentNode.insertBefore(containSvg, script.nextSibling);
    //}, 0);
    
    animation(classname, ani);
  }


});



