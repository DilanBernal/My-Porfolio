import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'hero-section',
  imports: [TranslateModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {

  translate: TranslateService = inject(TranslateService);

  changeLanguage(lang: string) {
    this.translate.use(lang);
  } 
}
