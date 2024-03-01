import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {


constructor(private service:UserService)
{

}

singleUser:{id:number,user_name:string,age:number,user_qualification:string,total_Experiece:string,Fresher:string,previous_company_name:string}

ngOnInit(): void {
this.service.onshowDetailsEvent.subscribe((data)=>{
this.singleUser=data
})

}


isObjectEmpty(obj: any): boolean {
  return Object.keys(obj).length === 0;
}









}
