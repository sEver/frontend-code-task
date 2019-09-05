import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {

  transform(posts$: Observable<any[]>, filterBy: string): Observable<any[]> {
    if(filterBy) {
      console.log('Filtering by:', filterBy);
      return posts$.pipe(
        map((posts: any[])=> posts.filter((post)=>{
          return post.title.includes(filterBy) || post.body.includes(filterBy);
        }))
      );
    } else {
      return posts$;
    }
  }

}
