import {Component, OnInit} from "@angular/core";
import {User} from "../shared/interfaces/user";
import {Post} from "../shared/interfaces/post";
import {ApiService} from "../shared/services/api.service";
import {ActivatedRoute} from "@angular/router";
import {UserPosts} from "../shared/interfaces/userPosts";

@Component({
	templateUrl: "./user-detail.component.html",
  styleUrls: [ './user-detail.component.css' ]
})


  export class UserDetailComponent implements OnInit{
	posts: Post[] = [];
	user: User = {userId:null,email:null,name:null,phone:null,username:null,website:null};



	constructor(protected apiService: ApiService, private route: ActivatedRoute) {}


	ngOnInit():void {
		let detailedUserId = this.route.snapshot.params["userId"];
    this.getDetailedUser(detailedUserId);
    }

    getDetailedUser(userId : string) : void {
      this.apiService.getDetailedUser(userId).subscribe(reply => {
      	reply.user = this.user;
      	reply.posts = this.posts;
      })
    }



}