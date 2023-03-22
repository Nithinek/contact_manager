import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
//allContacts- array, searchkey-saran, propName-name
  
transform(allContacts: any=[], serchKey:string,propName:string): any[] {
  const result:any=[]///transform output
   if (!allContacts||serchKey==''||propName==''){
    return allContacts
   }
   //searching
  allContacts.forEach((contact:any)=>{
if(contact[propName].trim().toLowerCase().includes(serchKey.toLowerCase())){
  //name 
 result.push(contact)
}
   })
    
    return result;
  }

}
