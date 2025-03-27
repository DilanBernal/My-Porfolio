import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'hero-section',
  imports: [TranslateModule, CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss', './hero-section-photo.component.scss']
})
export class HeroSectionComponent implements OnInit {
  skillNames: string [] = [];
  constructor(private translate: TranslateService) {}
  
  ngOnInit() {
    this.translate.get('home.heroSection.experiences').subscribe((skills: string[]) => {
      this.skillNames = skills;
      console.log(skills);
    });
  }
}
