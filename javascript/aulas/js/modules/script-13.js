export default function script13() {
  // ASYNC / AWAIT

  const baseURL = 'https://jsonplaceholder.typicode.com/posts';

  async function fetchPostsAsync() {
    let postArea = document.querySelector('.posts');
    postArea.innerHTML = 'Loading...';

    let res = await fetch(baseURL);
    const data = await res.json();

    if (data.length > 0) {
      postArea.innerHTML = '';

      for (let i in data) {
        let postHTML = `<div><h1>${data[i].title}</h1>${data[i].body}</div>`;
        postArea.innerHTML += postHTML;
      }
    } else {
      postArea.innerHTML = 'Posts void :/';
    }
  }

  async function addNewPost(title, text) {
    await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        text,
        userId: 2,
      }),
    });

    document.querySelector('#title').value = '';
    document.querySelector('#text').value = '';

    fetchPostsAsync();
  }

  document.querySelector('#submit').addEventListener('click', () => {
    let title = document.querySelector('#title').value;
    let text = document.querySelector('#text').value;

    if (title && text) {
      addNewPost(title, text);
    } else {
      alert('Fill in all fields');
    }
  });

  fetchPostsAsync();
}
