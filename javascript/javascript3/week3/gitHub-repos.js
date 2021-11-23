const promise1 = fetch(
    `https://api.github.com/search/repositories?q=user:JiuTak`
).then((response) => response.json())
const promise2 = fetch(
    `https://api.github.com/search/repositories?q=user:saloumeh-67`
).then((response) => response.json());
const promise3 = fetch(
    `https://api.github.com/search/repositories?q=user:suvarna-ratna`
).then((response) => response.json());

Promise.all([promise1, promise2, promise3])
    .then((users) => {
        console.log(users);
        users.forEach((user) => {
            user.items.forEach((item) => {
                const reposOwner = item.owner.login;
                const fullname = item.full_name;
                const userUrl = item.html_url;
                renderReposOwner(reposOwner);
                renderReposData(fullname, userUrl);
            });
        });
    })
    .catch((error) => {
        console.log("some problem in fetching data");
        console.log(error);
    });

function renderReposOwner(reposOwner) {
    const username = document.createElement("h2");
    username.innerHTML = `Owner : ${reposOwner}`;
    document.body.appendChild(username);
}

function renderReposData(fullname, userUrl) {
    const ul = document.createElement("ul");
    document.body.appendChild(ul);

    const li = document.createElement("li");
    li.innerHTML = `<div> Fullname : ${fullname}</div>
 <div>URL : ${userUrl}</div>`;
    ul.appendChild(li);
}