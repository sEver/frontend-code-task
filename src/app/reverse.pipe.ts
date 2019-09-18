import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(posts$: Observable<any[]>): Observable<any[]>{
    return posts$.pipe(
      map((posts: any[])=> posts.reverse())
    );
  }

}
