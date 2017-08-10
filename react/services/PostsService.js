
class PostsService{

    getPosts(userId){

        return fetch("../../user-twits.json")
            .then(response => response.json())
            .then(posts => {
                return posts.filter(post => {
                    if (post.user.id == userId)
                        return post;
                });
            })
    }

}

module.exports = new PostsService();
