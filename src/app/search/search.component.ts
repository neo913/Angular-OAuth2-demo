import { Component, OnInit, OnDestroy } from '@angular/core';
import { Person, SearchService } from '../shared';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[SearchService]
})
export class SearchComponent implements OnInit, OnDestroy {

  query: string;
  searchResults: Array<Person>;

  sub: Subscription;

  constructor(private searchService: SearchService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if(params['term']) {
        this.query = decodeURIComponent(params['term']);
        this.search();
      }
    })
  }

  ngOnDestroy() {
    if(this.sub) {
      this.sub.unsubscribe();
    }
  }

  search() {
    this.searchService.search(this.query).subscribe(
      (data: any) => {this.searchResults = data; },
      error => console.log(error)
    );
  }
}
