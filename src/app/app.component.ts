import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private translate:TranslateService){
    const browserLang = localStorage.getItem('lang') || translate.getBrowserLang();
    translate.use(browserLang?.match(/en|es/) ? browserLang : 'en');
    this.updateHtmlLang(browserLang || 'en');
    this.translate.onLangChange.subscribe(event => {
      this.updateHtmlLang(event.lang);
    });
  }

  private updateHtmlLang(lang: string) {
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
  }
}
