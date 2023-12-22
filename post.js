const url = window.location.search;
const urlParams = new URLSearchParams(url);
const id = Number(urlParams.get("id"))

const postName = document.getElementById("post-name");
const posterName = document.getElementById("poster-name");
const postDate = document.getElementById("post-date");
const postBody = document.getElementById("post-body");
const comments = document.getElementById("comments");

// this honestly feels like a crime, but again, no backend, so I
// can't just pull the comments, post name and so on from a DB like
// I would want to. maybe one day i'll come back to this and do it proper
switch(id){
    case 11: {
        postName.innerText = "This is a demo post in the General board!"
        posterName.innerText = "demo1";
        postDate.innerText = "2023-12-18 15:04:45";
        postBody.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam, rem obcaecati aperiam pariatur nobis ad architecto quod illo enim soluta, dolor, iste quasi reprehenderit. Rerum id earum nam sequi!";
        comments.innerHTML =
        `<div class="card">
            <div class="post-info">
                <div class="poster-name">
                    demo1
                </div>
                <div class="post-date">
                    2023-12-18 15:04:45
                </div>
            </div>
            <div class="post-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore hic molestiae autem totam maiores numquam nobis, molestias vel ex quae fugit dolorem culpa commodi nostrum voluptatibus incidunt! Et, cupiditate.
            </div>
        </div>
        <div class="card">
            <div class="post-info">
                <div class="poster-name">
                    demo2
                </div>
                <div class="post-date">
                    2023-12-18 17:03:10
                </div>
            </div>
            <div class="post-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.   
            </div>
        </div>
        <div class="card">
            <div class="post-info">
                <div class="poster-name">
                    demo1
                </div>
                <div class="post-date">
                    2023-12-19 12:23:11
                </div>
            </div>
            <div class="post-body">
                Soluta cum incidunt ea architecto quas aliquam praesentium nam aliquid repellat, perferendis reprehenderit. Provident excepturi officiis nemo necessitatibus animi explicabo iure tempore.
            </div>
        </div>`;
        break;
    }
    case 21: {
        postName.innerText = "This is a demo post in the Help board!"
        posterName.innerText = "demo1";
        postDate.innerText = "2023-12-19 00:04:35";
        postBody.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam, rem obcaecati aperiam pariatur nobis ad architecto quod illo enim soluta, dolor, iste quasi reprehenderit. Rerum id earum nam sequi!";
        comments.innerHTML =
        `<div class="card">
            <div class="post-info">
                <div class="poster-name">
                    demo2
                </div>
                <div class="post-date">
                    2023-12-19 20:11:05
                </div>
            </div>
            <div class="post-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore hic molestiae autem totam maiores numquam nobis, molestias vel ex quae fugit dolorem culpa commodi nostrum voluptatibus incidunt! Et, cupiditate.
            </div>
        </div>
        <div class="card">
            <div class="post-info">
                <div class="poster-name">
                    demo2
                </div>
                <div class="post-date">
                    2023-12-18 20:12:13
                </div>
            </div>
            <div class="post-body">
                Consectetur adipisicing elit.   
            </div>
        </div>`
        break;
    }
    case 22: {
        postName.innerText = "This is a second demo post in the Help board!"
        posterName.innerText = "demo2";
        postDate.innerText = "2023-12-22 08:29:29";
        postBody.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam, rem obcaecati aperiam pariatur nobis ad architecto quod illo enim soluta, dolor, iste quasi reprehenderit. Rerum id earum nam sequi!";
        break;
    }
    case 31: {
        postName.innerText = "This is a demo post in the Movies board!"
        posterName.innerText = "demo2";
        postDate.innerText = "2023-12-15 13:00:00";
        postBody.innerText = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae aliquam, rem obcaecati aperiam pariatur nobis ad architecto quod illo enim soluta, dolor, iste quasi reprehenderit. Rerum id earum nam sequi!";
        comments.innerHTML =
        `<div class="card">
            <div class="post-info">
                <div class="poster-name">
                    demo1
                </div>
                <div class="post-date">
                    2023-12-15 13:05:47
                </div>
            </div>
            <div class="post-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore hic molestiae autem totam maiores numquam nobis, molestias vel ex quae fugit dolorem culpa commodi nostrum voluptatibus incidunt! Et, cupiditate.
            </div>
        </div>`;
        break;
    }
    default: {
        postBody.innerText = "You seem to have wandered to some unknown post, good job. stop messing with the id in the url."
    }
}

if(localStorage.getItem('loggedIn') !== 'true'){
        const postComment = document.getElementById("make-comment");
        postComment.style.display = "none";
}
