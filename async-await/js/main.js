function getData() {
    return new Promise((resolve, reject) => {
        resolve(
            fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
        );
    });
  }
  
  async function fetchData() {
    var result = await getData();
    console.log(result);
  }
  
  fetchData();