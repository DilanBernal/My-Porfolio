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
export class AboutComponent implements OnInit{
  allSkills!: Skills;
  frontendSkills:Skill[] = [];
  backendSkills?:Skill;

  constructor(private translate:TranslateService){
  }
  
  ngOnInit(): void {
    this.translate.get('myInfo.skills').subscribe((skills: Skills) => {
      this.allSkills = skills;
      skills.frontend.forEach(element => {
        let skill:Skill = {
          name: element.name,
          level: element.level
        }
        this.frontendSkills.push(skill);
      });
    });
    // this.translate.get('my-info.skills.frontend').subscribe((frontend: Skill) => {
    //   this.frontendSkills = frontend;
    //   console.log(this.frontendSkills);
    // });
  }
}
