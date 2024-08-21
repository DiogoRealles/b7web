export default function script12() {
  // FETCH - THEN

  const baseURL = 'https://jsonplaceholder.typicode.com/posts';

  function fetchPostsThen() {
    fetch(baseURL)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        return alert(`[TITLE]: ${json[0].title}`);
      })
      .catch((error) => {
        console.log('[ERROR] samething error');
      })
      .finally(() => {
        console.log('Finished');
      });
  }

  fetchPostsThen();

  // ASYNC / AWAIT
  async function fetchPostsAsync() {
    const res = await fetch(baseURL);
    const data = await res.json();

    console.log(data);
  }

  fetchPostsAsync();
}
