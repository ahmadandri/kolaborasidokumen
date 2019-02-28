import { Component, ViewChild, ElementRef } from '@angular/core';
import { App, IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
//import JQuery from 'jquery'
import { File } from '@ionic-native/file'
import { FileOpener } from '@ionic-native/file-opener'
import { PlatformLocation } from '@angular/common' 
import { Tab1Page } from '../../pages/tab1/tab1'
import { DocumentProvider } from '../../providers/document/document';
import { Socket } from 'ng-socket-io'
/**
 * Generated class for the DownloaddocumentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-downloaddocument',
  templateUrl: 'downloaddocument.html',
})
export class DownloaddocumentPage {
  @ViewChild('one') d1:ElementRef;
  nav
  pdf
  fileName
  timer1
  timer2
  result_timer
  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public file : File,
      public fileOpener : FileOpener,
      public platform : Platform,
      public alertCtrl : AlertController,
      private location :PlatformLocation,
      private app : App,
      private socket : Socket,
      private document : DocumentProvider) {

    this.socket.on('timer',(data)=>{
        this.timer1 = data.time1
        this.timer2 = data.time2
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DownloaddocumentPage');
    let title = this.document.currentDocument
    this.document.getTextDocument(title).subscribe(result=>{
      $('#Html2Pdf').append(result[0].text)
    })

    this.location.onPopState(()=>{
      this.nav=this.app.getRootNavById('n4')
      this.nav.setRoot(Tab1Page)
    });

    this.platform.registerBackButtonAction(() => { 
      this.nav=this.app.getRootNavById('n4')
      this.nav.setRoot(Tab1Page)
    });

  }

  ionViewWillLeave(){
    this.document.removeCurrentDocument()
  }

  back(){
    this.nav = this.app.getRootNavById('n4');
    this.nav.setRoot(Tab1Page)
  }

   generatePdf(){
    this.result_timer = (this.timer1)
    const div = document.getElementById("Html2Pdf");
    const options = {background:"red",height : 900 ,width : 700 };
    html2canvas(div,options).then((canvas)=>{
      

      //Initialize JSPDF
      var doc = new jsPDF("p","mm","f4");
      //Converting canvas to Image
      let imgData = canvas.toDataURL("image/PNG");
      //Add image Canvas to PDF
      doc.addImage(imgData, 'PNG', 20,20 );
      
      let pdfOutput = doc.output();

      // using ArrayBuffer will allow you to put image inside PDF
      let buffer = new ArrayBuffer(pdfOutput.length);
      let array = new Uint8Array(buffer);
      for (var i = 0; i < pdfOutput.length; i++) {
          array[i] = pdfOutput.charCodeAt(i);
      }


      //This is where the PDF file will stored , you can change it as you like
      // for more information please visit https://ionicframework.com/docs/native/file/
      if(this.platform.is('core')||this.platform.is('mobileweb') ){
         console.log(this.platform.is('mobileweb'))
         console.log(this.platform.is('core'))
         doc.save(this.fileName+'.pdf')
         this.result_timer = (this.timer1)

      }else{
        const directory = this.file.externalApplicationStorageDirectory ;

        //Name of pdf
        const fileName = this.fileName+".pdf";

        //Writing File to Device
        this.file.writeFile(directory,fileName,buffer)
        .then((success)=>{
         this.result_timer = (this.timer1)
         let alert = this.alertCtrl.create({
            title: 'Success',
            subTitle: 'PDF downloaded!',
            buttons: ['Ok']
          });
          alert.present()

        })
        .catch((error)=>{
            this.result_timer = (this.timer1)
            JSON.stringify(error)
            let alert = this.alertCtrl.create({
              title: 'Filed',
              subTitle: 'File name already exist!' ,
              buttons: ['Ok']
            });
            alert.present()
        });
        
        
      }
      this.result_timer = (this.timer1)
    });
  }
}
