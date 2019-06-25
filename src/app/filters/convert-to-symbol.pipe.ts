import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSymbol'
})

export class ConvertToSymbolPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    switch(value){
      case "negative":
        return "-";

       case "positive":
        return "+";

       default:
         return "";
    }
  }
}