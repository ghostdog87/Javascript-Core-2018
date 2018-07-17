function  solve() {
    class Post{
        constructor(title,content){
            this.title = title;
            this.content = content;
        }

        toString(){
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title,content,likes,dislikes){
            super(title,content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment){
            this.comments.push(" * " + comment);
        }

        toString(){
            let com = this.comments.length > 0 ? "\nComments:\n" : "";
            return `Post: ${this.title}\nContent: ` +
            `${this.content}\nRating: ${this.likes - this.dislikes}`+
                com +
                `${this.comments.join("\n")}`;
        }
    }

    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content);
            this.views  = views;
        }

        view(){
            this.views++;
            return this;
        }

        toString(){
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`;
        }
    }

   return{
       Post,SocialMediaPost,BlogPost
   }
}





