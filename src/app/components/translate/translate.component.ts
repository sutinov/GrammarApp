import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css'],
})
export class TranslateComponent implements OnInit {
  text: string;
  translatedText: string;
  constructor(private trasnlateService: AppService) {}

  submit() {
    this.trasnlateService.translate(this.text).subscribe((result) => {
      this.translatedText = result;
    });
  }

  ngOnInit(): void {}
}
