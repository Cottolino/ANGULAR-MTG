// import { Component, Input } from '@angular/core';
import { Card } from '../classes/Card';

import { Component, OnInit, ElementRef ,ViewChild, Input} from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-trade-in',
  templateUrl: './trade-in.component.html',
  styleUrls: ['./trade-in.component.css']
})
export class TradeInComponent {
//Da valutare se passare la copia!
//Init dei campi
@Input("card") card: Card | undefined;
public convetToPDF()
{
    
    const data: any = document.querySelector(".tradePDF");
    html2canvas(data).then(canvas => {
        alert("File");
      // Few necessary setting options
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('new-file.pdf'); // Generated PDF
      
    });
}
}
