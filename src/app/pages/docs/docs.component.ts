import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      const section = params.get('section');
      const page = params.get('page');

      this.notFound = false;

      this.mdPath = `/docs/${section}/${page}.md`;
    });
  }
}
