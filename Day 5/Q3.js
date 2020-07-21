console.log('Q3')
async function getUserAsync() 
{
  let response = await fetch('https://jsonplaceholder.typicode.com/todos');
  let data = await response.json()
  return data;
}

getUserAsync()
  .then(data => console.log(data))