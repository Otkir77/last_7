const endPoint = 20;
        const __baseUrl = `https://jsonplaceholder.typicode.com/comments?_limit=${endPoint}`;

        const getData = async (url) => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching data:', error);
                return [];
            }
        };

        const render = (arr) => {
            const container = document.getElementById('comments-container');
            container.innerHTML = ''; 

            arr.forEach(comment => {
                const commentElement = document.createElement('div');
                commentElement.className = 'comment';

                commentElement.innerHTML = `
                    <h3>${comment.name}</h3>
                    <p><strong>Email:</strong> ${comment.email}</p>
                    <p>${comment.body}</p>
                `;

                container.appendChild(commentElement);
            });
        };

        getData(__baseUrl).then(data => render(data));