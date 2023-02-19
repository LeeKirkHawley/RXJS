// https://www.tutorialspoint.com/rxjs/index.htm
// node -r esm testrx.js


import { of } from 'rxjs';
import {reduce, filter, take, tap, map} from "rxjs/operators"
import { Observable } from 'rxjs'
import { Subject } from 'rxjs'

map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`Output is: ${v}`));

var observable = new Observable(
  function subscribe(subscriber) {
     try {
        subscriber.next("My First Observable");
        subscriber.next("Testing Observable");
        subscriber.complete();
     } catch(e){
        subscriber.error(e);
     }
  }
);

observable.subscribe(x => console.log(x));

observable.subscribe({complete: ()=>console.log("Observable is complete")});

observable.subscribe({
  next: (v) => console.log(v),
  error: (e) => console.error(e),
  complete: () => console.info('complete') 
})


let test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let case1 = test1.pipe(
   filter(x => x % 2 === 0),
   reduce((acc, one) => acc + one, 0)
)
case1.subscribe(x => console.log(x));