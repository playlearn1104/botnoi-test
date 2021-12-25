import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user.model';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(tableUsers:User[],inputSearch:string): User[] {
    console.log(tableUsers);
    console.log(inputSearch);
    if(!tableUsers||!inputSearch){
      return tableUsers;
    }

    return tableUsers.filter(user=>
      user.name.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase())||
      user.username.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase())||
      user.email.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase())||
      Object.values(user.address).toString().toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase())||
      Object.values(user.address.geo).toString().toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase())||
      user.phone.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase())||
      user.website.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase())||
      Object.values(user.company).toString().toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase()));
  }

}