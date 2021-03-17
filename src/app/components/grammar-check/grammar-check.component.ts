import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiResponse, Info, Quote } from 'src/app/app.model';
import { AppService } from '../../app.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-grammar-check',
  templateUrl: './grammar-check.component.html',
  styleUrls: ['./grammar-check.component.css'],
})
export class GrammarCheckComponent implements OnInit {
  constructor(private appService: AppService) {}
  quotes: Quote[];
  sendText: string;

  info: Info[];
  public usersSubject = new BehaviorSubject<Quote[]>([]);

  private loadingSubject = new BehaviorSubject<boolean>(false);

  public loading$ = this.loadingSubject.asObservable();

  private totalUsersCountSubject = new BehaviorSubject<number>(0);

  public totalUsersCount$ = this.totalUsersCountSubject.asObservable();

  ngOnInit(): void {
    this.loadQuotes();
  }

  async loadQuotes() {
    this.appService.getQuotes().subscribe((result: ApiResponse) => {
      console.log(result);
      this.quotes = result.quotes;
    });
  }

  grammarCheck() {
    this.appService.checkGrammar(this.sendText).subscribe((result: any) => {
      this.info = result.matches;
      console.log(result.matches);
    });
  }
}

// loadQuotes() {
//   this.appService
//     .getQuotes()
//     .pipe(finalize(() => this.loadingSubject.next(false)))
//     .subscribe((quotes: Quote[]) => {
//       if (quotes) {
//         this.totalUsersCountSubject.next(quotes.length);
//         this.usersSubject.next(quotes);
//         console.log(quotes);
//         // return this.usersSubject.asObservable();
//       }
//     });
// }
