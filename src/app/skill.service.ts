// skill.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  private skills: { name: string; logoUrl: string }[] = [
    { name: 'HTML5', logoUrl: '../assets/html.svg' },
    { name: 'CSS3', logoUrl: 'path-to-css3-logo.png' },
    { name: 'JavaScript', logoUrl: 'path-to-js-logo.png' },
    // Add more skills with their respective logo URLs
  ];

  getRandomSkills(count: number): { name: string; logoUrl: string }[] {
    const randomSkills = [];
    for (let i = 0; i < count; i++) {
      const randomIndex = Math.floor(Math.random() * this.skills.length);
      randomSkills.push(this.skills[randomIndex]);
    }
    return randomSkills;
  }
}
