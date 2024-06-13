export default function decorate(block) {
  const [quoteWrapper] = block.children;
  const blockquote = document.createElement("blockquote");
  //blockquote.textContent = quoteWrapper.textContent.trim()+"NEXA...";
  blockquote.textContent ="NEXA";
  quoteWrapper.replaceChildren(blockquote);
}
