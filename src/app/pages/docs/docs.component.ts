import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.css']
})
export class DocsComponent implements OnInit {

  mdPath = '';
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      const section = params.get('section');
      const page = params.get('page');

      const path = `/docs/${section}/${page}.md`;

      // reset state
      this.notFound = false;
      this.mdPath = '';

      // check if markdown file exists
      this.http.get(path, { responseType: 'text' }).subscribe({

        next: () => {
          // file exists → render markdown
          this.mdPath = path;
        },

        error: () => {
          // file missing → show not found
          this.notFound = true;
        }

      });

      // scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });

    });

  }

}