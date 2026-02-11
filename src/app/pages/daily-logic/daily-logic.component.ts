import { Component } from '@angular/core';
import { MarkdownModule } from "ngx-markdown";

@Component({
  selector: 'app-daily-logic',
  standalone: true,
  imports: [MarkdownModule],
  templateUrl: './daily-logic.component.html',
  styleUrl: './daily-logic.component.css'
})
export class DailyLogicComponent {

}
