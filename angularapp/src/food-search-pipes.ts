import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'pattern'
})
export class foodsearchpipe implements PipeTransform{
    transform(items : any[], field: string, value: string):any[]{
        if(!items){
            return [];
        }
        if(!value){
            return items;
        }

        return items.filter(item => item[field].match(new RegExp(value,'i')));
    }
    }
