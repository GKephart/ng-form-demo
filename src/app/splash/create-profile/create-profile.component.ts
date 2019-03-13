import {Component, OnInit, Input} from "@angular/core";
import {User} from "../../shared/interfaces/user";
import {Status} from "../../shared/interfaces/Status";
import {ApiService} from "../../shared/services/api.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
	templateUrl: "./create-profile.component.html",
  selector: "create-profile-form"
})

export class CreateProfileComponent implements OnInit {

  //https://stackoverflow.com/questions/45749533/what-is-input-used-for
  @Input() users: User[];

  createUserForm : FormGroup;
  usernameExisits: boolean = false;
  userEmailExists: boolean = false;
  
  status: Status = {status:null, message:"", type:null };


  constructor(protected userService: ApiService, private router: Router, private formBuilder: FormBuilder) {

  }

  ngOnInit() : void {

    this.createUserForm = this.formBuilder.group({
      email: ["", [Validators.maxLength(128), Validators.required, Validators.email,]],
      name: ["", [Validators.maxLength(64), Validators.required]],
      phone: ["", [Validators.maxLength(32), Validators.required]],
      username: ["",[Validators.maxLength(32), Validators.required]],
      website: ["", [Validators.maxLength(128), Validators.required]]
    });
  }

  createProfile() : void {
    let newUser : User = {userId:null, email: this.createUserForm.value.email, name: this.createUserForm.value.name, phone: this.createUserForm.value.phone, username: this.createUserForm.value.username, website: this.createUserForm.value.website };
    this.userService.createUser(newUser).subscribe(status => {
      this.status = status;
      if(status.status === 200) {
        // perfect place for an event emitter
        alert("congrats you have created user please refresh(yuck!!!!)")
      }
    });
  } 
}

/**
 * for(let user of this.users) { 
       if(user.email ===  this.createUserForm.value.email){
         this.userEmailExists = true
       }

       if(user.email ===  this.createUserForm.value.email){
         this.usernameExisits = true
      }
    } 



    let newUser : User = {userId:null, email: this.createUserForm.value.email, name: this.createUserForm.value.name, phone: 
    this.createUserForm.value.phone, username: this.createUserForm.value.username, website: this.createUserForm.value.website };

    
    //
    this.userEmailExists ? this.status.message = "email already exists"
         : this.usernameExisits ? this.status.message = "name already exists"
         : this.userService.createUser(newUser).subscribe(status => {
            this.status = status;
            if(status.status === 200) {
            // perfect place for an event emitter
            alert("congrats you have created user please refresh(yuck!!!!)")
         }
       });
  }
 */















