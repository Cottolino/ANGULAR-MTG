import { Component, OnInit, ElementRef ,ViewChild} from '@angular/core';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'html-to-pdf-angular-application';
  public convetToPDF()
  {
      
      const data: any = document.querySelector("#contentToConvert");
      html2canvas(data).then(canvas => {
        alert("Con");
        // Few necessary setting options
        var imgWidth = 178;
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
