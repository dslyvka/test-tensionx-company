export default async function fetchData() {
  let response = fetch(
    ' https://test-task-j.herokuapp.com/data?page=1&size=20',
  ).then(res => res.json());

  return response;
}
