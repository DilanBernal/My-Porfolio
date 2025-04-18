import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'hero-section',
  imports: [TranslateModule, CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss', './hero-section-photo.component.scss', './hero-section-social-link.component.scss']
})
export class HeroSectionComponent implements OnInit {
  skillNames: string [] = [];
  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.getSkillNames();
    });
  }
  
  ngOnInit() {
    this.getSkillNames();
  }

  getSkillNames(): void{
    this.translate.get('HOME.HEROSECTION.EXPERIENCES').subscribe((skills: string[]) => {
      this.skillNames = skills;
    });
  }
}
