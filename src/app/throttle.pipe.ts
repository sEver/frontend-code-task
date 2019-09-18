import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { map, delay, switchMap, mergeMap, flatMap } from 'rxjs/operators';
@Pipe({
  name: 'throttle'
})
export class ThrottlePipe implements PipeTransform {

  transform(posts$: Observable<any[]>): Observable<any[]>{
    // use switchMap and from to create a stream of elements
    // introduce a delay for every element
    // upon receiving any element, add it to sum array
    // and emit that array
    // this will result in a growing array
  
    return posts$;
  }

}
