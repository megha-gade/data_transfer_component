import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

users:{id:number,user_name:string,age:number,user_qualification:string,total_Experiece:string,Fresher:string,previous_company_name:string}[]=[]
onlyFreshers:{id:number,user_name:string,age:number,user_qualification:string,total_Experiece:string,Fresher:string,previous_company_name:string}[]=[]

onlyExp:{id:number,user_name:string,age:number,user_qualification:string,total_Experiece:string,Fresher:string,previous_company_name:string}[]=[];
firstFiveRecordArray:{id:number,user_name:string,age:number,user_qualification:string,total_Experiece:string,Fresher:string,previous_company_name:string}[]=[]
lastRec:{id:number,user_name:string,age:number,user_qualification:string,total_Experiece:string,Fresher:string,previous_company_name:string}
addEnterUser:{id:number,user_name:string,age:number,user_qualification:string,total_Experiece:string,Fresher:string,previous_company_name:string};
lastrArray:{id:number,user_name:string,age:number,user_qualification:string,total_Experiece:string,Fresher:string,previous_company_name:string}[]=[]
isFresherButtonClicked:boolean=false;
isExperiencedButtonClicked:boolean=false;
isLastRecordButtonClicked:boolean=false
firstFiveRecordClicked:boolean=false;
isAddUserButtonClicked:boolean=false

constructor(private service:UserService)
{

}

ngOnInit(): void {
this.users=this.service.user
console.log(this.users.length-1);

}

showDetails(user:{id:number,user_name:string,age:number,user_qualification:string,total_Experiece:string,Fresher:string,previous_company_name:string})
{
console.log(user);
this.service.methodRaiseEvent(user)
}


onlyFresher()
{


this.onlyFreshers=this.users.filter(x=>{return x.Fresher=='yes'})
console.log(this.onlyFreshers);
}

toggleAndSHowFresher()
{
this.isFresherButtonClicked=!this.isFresherButtonClicked;
this.onlyFresher()
}


onlyExperienced()
{

this.onlyExp=this.users.filter(experienced=>{return experienced.Fresher=='no'})
console.log(this.onlyExp);
}
toggleAndShowExperienced()
{
this.isExperiencedButtonClicked=!this.isExperiencedButtonClicked
this.onlyExperienced()
}


firstFiveRecords()
{

this.firstFiveRecordArray=this.users.filter(fiveUser=>{return fiveUser.id<=5})
console.log(this.firstFiveRecordArray);

}

toggleAndShowFirstFiveRecords()
{
this.firstFiveRecordClicked=!this.firstFiveRecordClicked
this.firstFiveRecords()
}


LastRecord()
{

this.lastRec=this.users.find(x=>{return x.id===this.users.length})

console.log(this.lastRec);


}

lastr()
{

this.lastrArray=this.users.filter(last=>{return last.id===this.users.length})
console.log(this.lastrArray);
}


toggAndShowleLastRecord()
{
this.isLastRecordButtonClicked=!this.isLastRecordButtonClicked
this.lastr()
}


addrecord(formData:NgForm)
{

}



}
