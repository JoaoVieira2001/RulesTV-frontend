import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  formGroup: FormGroup;
  selectedLanguage: any;

  languages:SelectItem[] = [
    { label: '🇺🇸 English', value: { name: 'English', code: 'en' } },
    { label: '🇵🇹 Portuguese', value: { name: 'Portuguese', code: 'pt' } },
    { label: '🇪🇸 Spanish', value: { name: 'Spanish', code: 'es' } }
  ];

  constructor(private fb: FormBuilder) {
    this.selectedLanguage = this.languages[0].value;
    this.formGroup = this.fb.group({
      language:[this.selectedLanguage]
    })

  }

  onLanguageChange(event:any) {
    this.selectedLanguage = event.value;
    console.log('Selected Language:',this.selectedLanguage);
  }
}
