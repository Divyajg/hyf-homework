const url1 = fetch(
    `https://api.github.com/search/repositories?q=user:JiuTak`
).then((response) => response.json());
const url2 = fetch(
    `https://api.github.com/search/repositories?q=user:saloumeh-67`
).then((response) => response.json());
const url3 = fetch(
    `https://api.github.com/search/repositories?q=user:suvarna-ratna`
).then((response) => response.json());

Promise.all([url1, url2, url3])
    .then((users) => {
        console.log(users);
        users.forEach((user) => {
            user.items.forEach((item) => {
                const user = document.createElement("div");
                user.innerHTML = `${item.owner.login}`;
                document.body.appendChild(user);
                const ul = document.createElement("ul");
                document.body.appendChild(ul);
                const li = document.createElement("li");
                li.innerHTML = `<div>Owner :${item.owner.login}</div>
         <div> Name :${item.full_name}</div>
         <div>URL : ${item.html_url}</div>`;
                ul.appendChild(li);
            });
        });
    })
    .catch((error) => {
        console.log("some problem in fetching data");
        console.log(error);
    });