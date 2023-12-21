

const main = document.getElementById("main")
function loadBoard(board){
    switch(board){
        case 1: {
            main.innerHTML = 
            `<a href="#" onclick="loadPost(1,1)">
                <section class="post">
                    <h3>Post in board 1</h3>
                    <h6><i>Posted by: <b>demo1</b></i></h6>
                    <h5>Post 1 text preview</h5>
                </section>
            </a>`;
            break;
        }
        
        case 2: {
            main.innerHTML = 
            `<section class="post">
                <h3>Post 1 in board 2</h3>
                <h5>Preview of body of post 1 in board 2</h5>
            </section>
            <section class="post">
                <h3>Post 2 in board 2</h3>
                <h5>Preview of body of post 2 in board 2</h5>
            </section>`;
            break;
        }

        case 3: {
            main.innerHTML = 
            `<section class="post">
                <h3>Post 1 in board 3</h3>
                <h5>Preview of body of post 1 in board 3</h5>
            </section>
            <section class="post">
                <h3>Post 2 in board 3</h3>
                <h5>Preview of body of post 2 in board 3</h5>
            </section>
            <section class="post">
                <h3>Post 3 in board 3</h3>
                <h5>Preview of body of post 3 in board 3</h5>
            </section>`;
            break;
        }
    }
}

function loadPost(board, post){
    main.innerHTML = 
    `<section class="main-post">
        <h3>Post in board 1</h3>
        <h5>Post 1 text preview</h5>
    </section>
    <section class="comment">
        <p>COMMENTCOMMENTCOMMENTCOMMENT</p>
    </section>`;
}