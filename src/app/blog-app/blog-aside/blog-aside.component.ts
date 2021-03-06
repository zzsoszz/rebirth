import { Component, OnInit } from '@angular/core';
import { ArticleService, SearchResult, Article } from '../../shared';

@Component({
  selector: 'blog-aside',
  styleUrls: [
    './blog-aside.scss'
  ],
  templateUrl: './blog-aside.html'
})
export class BlogAsideComponent implements OnInit {
  private article: SearchResult<Article>;

  constructor(private articleService: ArticleService) {

  }

  ngOnInit() {
    this.articleService.getArticles(1, 5)
      .subscribe(result => {
        this.article = result;
      });
  }
}
