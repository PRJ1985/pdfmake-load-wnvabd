import { Component } from '@angular/core';
import {PdfgeneratorService} from './pdfmake-files/pdfgenerator.service';
import { DomSanitizer } from '@angular/platform-browser/'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  pdfUrl=null;
  constructor(private pdfService:PdfgeneratorService,private sanitizer:DomSanitizer){}
  generatePdfUrl(){
    this.pdfService.generatePdfUrl({},{},performance.now()).subscribe(
      data=>{
        if(data)
        this.pdfUrl=this.sanitizer.bypassSecurityTrustResourceUrl(data);
      }
    )
  }
}
