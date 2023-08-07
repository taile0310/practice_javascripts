// callback
function fetchDataFromServer(callback) {
  setTimeout(() => {
    const data = [1, 2, 3, 4, 5];
    callback(null, data);
  }, 2000);
}

function processData(err, data) {
  if (err) {
    console.error('Error occurred:', err);
  } else {
    console.log('Fetched data:', data);
    const processedData = data.map((item) => item * 2);
    console.log('Processed data:', processedData);
  }
}

fetchDataFromServer(processData);

// Async/await
function fetchDataFromServer(isSuccessful) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccessful) {
        const data = [1, 2, 3, 4, 5];
        resolve(data);
      } else {
        reject('Failed to fetch data');
      }
    }, 2000);
  });
}
async function processData() {
  try {
    const data = await fetchDataFromServer(true);
    console.log('Fetched data:', data);
    const processedData = data.map((item) => item * 2);
    console.log('Processed data:', processedData);
  } catch (error) {
    console.error('Error occurred:', error);
  }
}
processData();

// Promise
function fetchDataFromServer(isSuccessful) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccessful) {
        const data = [1, 2, 3, 4, 5];
        resolve(data);
      } else {
        reject('Failed to fetch data');
      }
    }, 2000);
  });
}

function processData(data) {
  console.log('Fetched data:', data);
  const processedData = data.map((item) => item * 2);
  console.log('Processed data:', processedData);
}

fetchDataFromServer(true)
  .then(processData)
  .catch((error) => {
    console.error('Error occurred:', error);
  });
