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
  activeSection = '';

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {

      const section = params.get('section');
      const page = params.get('page');

      const path = `/docs/${section}/${page}.md`;

      // reset state first
      this.notFound = false;
      this.mdPath = '';
      this.toc = [];

      // check file existence
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

      // always scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });

    });
  }




  toc: { id: string; text: string }[] = [];

  generateTOC() {

    this.toc = [];

    setTimeout(() => {

      const headings =
        document.querySelectorAll('.docs-container h2, .docs-container h3');

      headings.forEach((el: any, index) => {

        const id = 'section-' + index;
        el.id = id;

        this.toc.push({
          id,
          text: el.innerText
        });

      });

      // ⭐ start scroll spy AFTER headings exist
      this.setupScrollSpy();

    });
  }


  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  setupScrollSpy() {

    const headings = Array.from(
      document.querySelectorAll('.docs-container h2, .docs-container h3')
    ) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
          }
        });

      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0
      }
    );

    headings.forEach(h => observer.observe(h));
  }


}
