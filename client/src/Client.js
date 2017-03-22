function search(cb) {
  console.log('inside search function')
  return fetch(`api/festivals`, {
    accept: 'application/json',
  }).then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response){
  console.log("check status response = ", response)
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

function parseJSON(response) {
  console.log("parseJson response is ", response.json)
  return response.json();
}

const Client = { search };
export default Client;
