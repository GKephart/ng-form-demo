 import {User} from "./user.ts";
 import {Post} from "./post.ts"
    
 export interface UserPosts {
 	user: User
  posts: Post[]
 }