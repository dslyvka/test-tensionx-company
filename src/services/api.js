export default async function fetchData() {
  let response = await fetch(
    ' https://test-task-j.herokuapp.com/data?page=1&size=8',
  ).then(res => res.json());

  return response;
}
