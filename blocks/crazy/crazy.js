export default async function decorate(block) {
  const crazy = document.createElement('div');
  crazy.innerHTML = "I'm crazy!";
  block.append(crazy);
}
