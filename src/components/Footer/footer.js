import './footer.css';
import { data } from "../../../utils/data.js";

// crear Footer
export const Footer = () => {
  const footer = document.createElement('div');
  footer.id = 'footer';
  const h3Footer = document.createElement('h3');
  h3Footer.className = 'h3-footer';
  h3Footer.textContent = data.footer;
  const linkStart = document.createElement('a');
  linkStart.className = 'link-start';
  linkStart.href = '#presentation';
  linkStart.title = 'Ir al Inicio';
  const imgStart = document.createElement('img');
  imgStart.className = 'link-start';
  imgStart.src = '../../../public/arrows.webp';
  const ulFooter = document.createElement('ul');
  ulFooter.className = 'ul-footer';

  for (const rrss of data.rrss) {
    const li = document.createElement('li');
    li.className = rrss.classLink
    const a = document.createElement('a');
    a.href = rrss.href;
    a.target = rrss.target;
    const img = document.createElement('img');
    img.className = rrss.classImg;
    img.src = rrss.src;
    ulFooter.appendChild(li);
    li.appendChild(a);
    a.appendChild(img);
  };
  
  main.appendChild(footer);
  footer.append(h3Footer, ulFooter, linkStart);
  linkStart.appendChild(imgStart);
};