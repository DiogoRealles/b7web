export default function script09() {
  // DOM - .querySelector()

  let text01 = document.querySelector('#text-01');
  console.log(text01.innerHTML);

  text01.innerHTML = 'Texto alterado via JS 09';
  console.log(text01.innerHTML);

  // DOM - .querySelectorAll()
  let list01 = document.querySelectorAll('#list-01');
  console.log(list01[0].innerHTML);
}
