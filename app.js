const requestURL = 'https://jsonplaceholder.typicode.com/users'
const xhr = new XMLHttpRequest()

xhr.open ('get', requestURL)
xhr.onload = () => {
  console.log(xhr.response)
}

// JSON.parse(xhr.response)