const Home = async () => {

    let posts = await fetch('https://dummyjson.com/posts');
    posts = await posts.json();
    console.log(posts)
    return (
        <div>
            <h1 className=" text-yellow-500">Post Page</h1>

            <div className=" grid grid-cols-3">
                {
                    posts.posts.map((post) => (
                        <div key={post.id}  className=" grid grid-cols-3">
                            <p>{post.title}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export const metadata = {
    title: "Posts",
};

export default Home;
