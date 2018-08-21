// NB: This function can still return unsafe HTML
export const unescapeHTML = (html) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html.replace(/<br\s*\/?>/g, '\n')
    .replace(/<\/p><p>/g, '\n\n')
    .replace(/<code class="singleline">(.+?)<\/code>/g, '`$1`\n') // singleline codeblock
    .replace(/<code[^>]*data-language="(.+?)"[^>]*>/g, '```$1\n') // multiline codeblock with data-language
    .replace(/<code[^>]*>/g, '```\n')                             // multiline codeblock
    .replace(/<\/code>/g, '\n```')                                // multiline codeblock end tag
    .replace(/<[^>]*>/g, '');
  return wrapper.textContent;
};
