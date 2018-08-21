import hljs from 'highlight.js';

hljs.configure({
  useBR: true,
  tabReplace: '  ',
});

export default function highlightCode(text) {
  try {
    const doc = new DOMParser().parseFromString(text, 'text/html');

    doc.querySelectorAll('code').forEach((el) => {
      el.classList.add('hljs');
      if (el.dataset.language && !el.dataset.highlighted) {
        el.innerHTML = hljs.highlight(el.dataset.language, el.innerText).value;
        el.dataset.highlighted = true;
      }
    });

    let firstP = doc.querySelector('p');
    if (firstP.innerHTML.length === 0) {
      firstP.remove();
    }

    return doc.body.innerHTML;

  } catch(e) {
    return text;
  }
};
