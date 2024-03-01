import { EventEmitter } from "@angular/core"

export class UserService{
user=[
{
id:1,user_name:'Megha',age:22,user_qualification:'BSc',total_Experiece:'1year',Fresher:'yes',previous_company_name:'-'
},
{id:2,user_name:'Radha',age:32,user_qualification:'EXTC',total_Experiece:'5years',Fresher:'no',previous_company_name:'Lorens_mayo'},

{id:3,user_name:'Yogesh',age:25,user_qualification:'BE (CS)',total_Experiece:'1.2years',Fresher:'no',previous_company_name:'Labadhi Roryoko pvt'},

{id:4,user_name:'Shashank',age:27,user_qualification:'EXTC',total_Experiece:'0years',Fresher:'yes',previous_company_name:'-'},

{id:5,user_name:'Kedar',age:34,user_qualification:'BTech',total_Experiece:'5.3years',Fresher:'no',previous_company_name:'Data Buisness Analatical'},

{id:6,user_name:'Komal',age:29,user_qualification:'Diploma',total_Experiece:'3years',Fresher:'no',previous_company_name:'MASK Buisness Consultancy'},

{id:7,user_name:'Rohan',age:42,user_qualification:'Msc in AI',total_Experiece:'0years',Fresher:'yes',previous_company_name:'-'}
]

addUser(newUser:{id:number,user_name:string,age:number,user_qualification:string,total_Experiece:string,Fresher:string,previous_company_name:string})
{
this.user.push(newUser)
}

onshowDetailsEvent=new EventEmitter<{id:number,user_name:string,age:number,user_qualification:string,total_Experiece:string,Fresher:string,previous_company_name:string}>();


methodRaiseEvent(user:{id:number,user_name:string,age:number,user_qualification:string,total_Experiece:string,Fresher:string,previous_company_name:string})
{
this.onshowDetailsEvent.emit(user)
}




}
