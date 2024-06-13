export default function decorate(block) {
  const [quoteWrapper] = block.children;
  const blockquote = document.createElement("blockquote");
  blockquote.textContent ='NEXA';
  quoteWrapper.replaceChildren(blockquote);
}
