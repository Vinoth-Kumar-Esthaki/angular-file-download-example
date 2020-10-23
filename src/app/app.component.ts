import { Component } from '@angular/core';
import { FileService } from './file.service';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-download-file';
  constructor(private fileService: FileService) { }
  download(url: string) {
    this.fileService.downloadFile(url).subscribe(
      response => {
        const blob: any = new Blob([response], { type: 'application/pdf' });

        const urls: string = window.URL.createObjectURL(blob);
        const filename = urls.split('/').pop();


        // window.open(urls);
        // window.location.href = response.url;
        fileSaver.saveAs(blob, filename);
      }
    );
  }
}
