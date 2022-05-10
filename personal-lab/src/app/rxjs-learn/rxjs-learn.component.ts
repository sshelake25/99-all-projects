import { Component, OnInit } from '@angular/core';
import { filter, first, from, interval, last, of, skip } from 'rxjs';

@Component({
  selector: 'app-rxjs-learn',
  templateUrl: './rxjs-learn.component.html',
  styleUrls: ['./rxjs-learn.component.css']
})
export class RxjsLearnComponent implements OnInit {
  title = 'KIRAN';

  constructor() {

    console.log(`${this.title} hello i`);
  }

  ngOnInit(): void {
    console.log(`ngONinit`);

    // let myobs = interval(2000);
    // myobs.subscribe( 
    //    (kirqn) => {  console.log(kirqn)  }
    // )

    // let another = of(1, 2, 3, 4);
    // another.subscribe((mydata) => { console.log(mydata) })

    let again = from([100, 2, 32, 68, 30, 50])
      .pipe(

        first(),
        //last(),
        // skip(2),
      );


    again.subscribe((mydata) => { console.log(mydata) });


  }


}