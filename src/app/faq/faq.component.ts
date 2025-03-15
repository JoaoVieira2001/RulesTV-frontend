import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqItems = [
    {
      question: "What is RulesTV?",
      answer: "RulesTV is a streaming service that offers a variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      open: false
    },
    {
      question: "How much does RulesTV cost?",
      answer: "RulesTV offers different pricing plans starting at $9.99 per month. You can choose the plan that best suits your needs.",
      open: false
    },
    {
      question: "Where can I watch?",
      answer: "You can watch RulesTV on any internet-connected device, including smartphones, tablets, Smart TVs, and web browsers.",
      open: false
    }
  ];

  toggleFAQ(index:number){
    this.faqItems[index].open = !this.faqItems[index].open;
  }
}
