import {Pipe, PipeTransform} from '@angular/core';
import {Data} from './data/data.model';

@Pipe({

})

export class ShowPipe implements PipeTransform {
  transform(input: Data[], args) {
    return input;
  }
}
