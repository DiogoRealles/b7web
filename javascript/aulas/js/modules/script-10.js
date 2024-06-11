export default function script10() {
  // DOM EVENTS - CLICK

  let btn01 = document
    .querySelector('#btn-01')
    .addEventListener('click', () => {
      alert('Clicked');
    });

  let square01 = document
    .querySelector('#square-01')
    .addEventListener('mouseover', () => {
      alert('Passou o mouse por cima do elemento');
    });

  let square02 = document
    .querySelector('#square-02')
    .addEventListener('mouseleave', () => {
      alert('Tirou o mouse de cima do elemento');
    });
}
