import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ApiserviceService} from '../apiservice.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service :ApiserviceService) { }
 errormsg:any;
 successmsg:any;
  ngOnInit(): void {
  }
   movieForm = new FormGroup({
      'name':new FormControl('',Validators.required),
      'year':new FormControl('',Validators.required),
      'code': new FormControl('',Validators.required),
      'link': new FormControl('',Validators.required),
      'category': new FormControl('',Validators.required)
   });
   movieSubmit(){
       if(this.movieForm.valid){
         console.log(this.movieForm.value)
         this.service.createData(this.movieForm.value).subscribe((res)=>{
           console.log(res, 'res =>');
           this.movieForm.reset();
           this.successmsg = "Movie Inserted !";
         })
       }
       else{
         this.errormsg = 'all field are required !';
       }
   }
}
