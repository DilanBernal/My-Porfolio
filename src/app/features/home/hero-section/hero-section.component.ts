import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'hero-section',
  imports: [TranslateModule, CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements OnInit {
  skills: string [] = [];
  constructor(private translate: TranslateService) {}
  
  ngOnInit() {
    this.translate.get('hero-section-experiences').subscribe((skills: string[]) => {
      this.skills = skills;
    });
  }
}
