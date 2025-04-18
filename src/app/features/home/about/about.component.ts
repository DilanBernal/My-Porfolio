import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Skill, Skills } from '../../../models/skills';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'about-section',
  imports: [TranslateModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
  actuallyLang: string = '';
  allSkills!: Skills;
  frontendSkills: Skill[] = [];
  backendSkills: Skill[] = [];
  databaseSkills: Skill[] = [];
  languageSkills: Skill[] = [];

  constructor(private translate: TranslateService) {
    this.translate.onLangChange.subscribe(() => {
      this.getAllSkills();
      this.actuallyLang = this.translate.currentLang;
    });
  }

  ngOnInit() {
    // this.getAllSkills();
  }

  getAllSkills() {
    this.translate.get('myInfo.skills').subscribe((skills: Skills) => {
      this.allSkills = skills;
      this.getFrontendSkillsFromTranslate();
      this.getBackendSkillsFromTranslate();
      this.getDatabasesSkillsFromTranslate();
      this.getLanguageSkillsFromTranslate();
    });
  }

  getFrontendSkillsFromTranslate() {
    this.allSkills.frontend.forEach(element => {
      let skill: Skill = {
        name: element.name,
        level: element.level
      }
      this.frontendSkills.push(skill);
    });
  }

  getBackendSkillsFromTranslate() {
    this.allSkills.backend.forEach(element => {
      let skill: Skill = {
        name: element.name,
        level: element.level
      }
      this.backendSkills.push(skill);
    })
  }

  getDatabasesSkillsFromTranslate() {
    this.allSkills.database.forEach(element => {
      let skill: Skill = {
        name: element.name,
        level: element.level
      }
      this.databaseSkills.push(skill);
    })
  }

  getLanguageSkillsFromTranslate() {
    this.allSkills.languages.forEach(element => {
      let skill: Skill = {
        name: element.name,
        level: element.level
      }
      this.languageSkills.push(skill)
    })
  }

  clearSkills(): void {
    this.allSkills = {
      frontend: [],
      backend: [],
      database: [],
      languages: []
    };

  }
}
