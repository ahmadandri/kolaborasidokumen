import { Component, ViewChild, ElementRef } from '@angular/core';
import { Platform, App,IonicPage, NavController, NavParams } from 'ionic-angular';
//import JQuery from 'jquery'
import { ChatdocumentPage } from '../../pages/chatdocument/chatdocument'
import { Socket } from 'ng-socket-io';
import { PlatformLocation } from '@angular/common' 
import { Tab1Page } from '../../pages/tab1/tab1'
import { LoginPage } from '../../pages/login/login'
import { DocumentProvider } from '../../providers/document/document'
import { UserProvider } from '../../providers/user/user'
import { LogPage } from '../../pages/log/log';
/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {
@ViewChild('froalaEditor1') edt: ElementRef;
nav
title
loginUser
text
position = 0
timer1
timer2
result_timer
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private socket : Socket,
      private user : UserProvider,
      private document : DocumentProvider,
      private location :PlatformLocation ,
      private app : App,
      public platform : Platform) {

    this.title = this.document.currentDocument
    //this.loginUser = this.user.userLogin

    this.socket.on('updateTextDocument',(data)=>{
        this.result_timer=(this.timer1)
       this.text=(data['data'])
       //error
       //this.setCursor(this.position,this.position)         
    })

    this.socket.on('timer',(data)=>{
      this.timer1 = data.time1
      this.timer2 = data.time2
    })



  }

  ionViewWillEnter(){
    this.document.getTextDocument(this.title).subscribe(result=>{
      this.text = result[0].text;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');

    if(!this.user.userLogin){
      this.navCtrl.setRoot(LoginPage)
    }
    

    this.location.onPopState(()=>{
      this.nav=this.app.getRootNavById('n4')
      this.nav.setRoot(Tab1Page)
    });

    this.platform.registerBackButtonAction(() => { 
      this.nav=this.app.getRootNavById('n4')
      this.nav.setRoot(Tab1Page)
    });
    //this.edt.nativeElement.setSelectionRange(1,1)
  }

  

  chat(){
  	this.navCtrl.setRoot(ChatdocumentPage)
  }

  log(){
    this.navCtrl.setRoot(LogPage);
  }

  back(){
    this.nav = this.app.getRootNavById('n4');
    this.nav.setRoot(Tab1Page)
  }

  public options: Object = {
    heightMin: 300,
    heightMax: 600,
    toolbarButtons:   [ 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
                         'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|',
                          'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-',
                           'embedly', 'insertTable', '|',
                            'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', '|',
                             'print', 'html', '|', 'undo', 'redo','getPDF'],
    toolbarButtonsXS: [ 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
                         'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|',
                          'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-',
                           'embedly', 'insertTable', '|',
                            'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', '|',
                             'print', 'html', '|', 'undo', 'redo'],
    toolbarButtonsSM: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
                         'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|',
                          'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-',
                           'embedly', 'insertTable', '|',
                            'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', '|',
                             'print', 'html', '|', 'undo', 'redo'],
    toolbarButtonsMD: [ 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|',
                         'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '|',
                          'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote',
                           '-',
                       'embedly', 'insertTable', '|','emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', '|','print', 'html', '|', 'undo', 'redo'],
    events : {
        'froalaEditor.click':(e, editor)=>{
          this.result_timer=(this.timer1)
          let data = (editor.html.get());
          console.log(this.user.userLogin)
          this.socket.emit('sendTextDocument',{data:data,title:this.title,sender:this.user.userLogin})
          
        },
        'froalaEditor.keyup':(e, editor)=>{
          this.result_timer=(this.timer1)
          console.log(this.user.userLogin)
          let data = (editor.html.get());
          this.socket.emit('sendTextDocument',{data:data,title:this.title,sender:this.user.userLogin})

        }
      }
    };
  
   /*get(test){
        console.log(test)
        var range = window.getSelection().getRangeAt(0);
        var preCaretRange = range.cloneRange();
        preCaretRange.selectNodeContents(test);
        preCaretRange.setEnd(range.endContainer, range.endOffset);
        this.position = preCaretRange.toString().length;
        test.setSelectionRange(this.position,this.position)
   }*/

    /*setCursor(positionStart,positionEnd){
      //this.canvas.focus()
      //$(this.edt.nativeElement).froalaEditor('selection.setAtStart', positionStart);
      this.edt.nativeElement.selectRange(positionEnd, positionStart);
    }*/
}
