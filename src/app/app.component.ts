import { Component } from '@angular/core';
import { CommonService } from './common.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud';
  alluser:any;
  isEdit = false;

  userObj = {
    name:'',
    mobile:'',
    email:'',
    password:'',
    id:''
  }
    
  ngOnInit(){
   this.getLatestUser();
  }
  constructor(private common :CommonService){}
  // *************** For Creating and showing list *************//
  addUser(formObj){
    console.log(formObj);
    this.common.createUser(formObj).subscribe((response) => {
      console.log("User has been added");
      this.getLatestUser();
    })
  }
  getLatestUser(){
    this.common.getAllUser().subscribe((response =>{
      this.alluser = response;
    }))

  }
  //*************************For updating the user ******************//
  editUser(user){
    this.isEdit = true;
   this.userObj = user;
  }
  // ************************For deleting the user *****************//
  deleteUser(user){
    this.common.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
    })
  }
  // ******************Update and save edited data*******************//
  updateUser(){
  this.isEdit = !this.isEdit;
  this.common.updateUser(this.userObj).subscribe(()=>{
  this.getLatestUser(); 
  })
  }

}
