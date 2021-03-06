import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TutorialService } from './services/geotab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'Realizar Peticion';
  public currentEuroRates: any = null;
  public resultData: any;

  public demo = {
    title: 'Uno',
    description: 'Dos',
    published: false
  };
  public submitted = true;

  private urlapi = 'https://attcflotilla236.geotab.com/apiv1';
  private result = new Date().toISOString();

  constructor(
    private tutorialService: TutorialService,
    private httpClient: HttpClient 
  ) {}

  ngOnInit() {
    // this.getCurrentEuroRates();
  }

  public saveTutorial(): void {
    const data = {
      title: this.demo.title,
      description: this.demo.description
    };

    this.tutorialService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  public getCurrentEuroRates() {
    const payloadObject = {
      'method':'ExecuteMultiCall',
      'params':{
          'calls':[{
              'method':'GetFeed',
              'params':{
                  'typeName':'LogRecord',
                  'fromVersion':null,
                  'search':{
                      'fromDate':this.result
                  }
              }
          }],
          'credentials':{
              'database':'municipio_de_xalapa_ver',
              'sessionId':'A0Gqk7ewxsz7Su3yKWSTIQ',
              'userName':'gobiernoelectronico.xalapa@gmail.com'
          }
      }
    }
    // for (let i = 1; i > 0; i++) {
      // this.httpClient.get(url).subscribe(apiData => (this.currentEuroRates = apiData));
    setInterval(() => {
      this.httpClient.post(this.urlapi, payloadObject).subscribe(
        data => this.resultData = data['result'][0]['data']
      );
      const data = {
        title: this.demo.title,
        description: this.resultData
      };
  
      this.tutorialService.create(data)
        .subscribe(
          response => {
            console.log(response);
            this.submitted = true;
          },
          error => {
            console.log(error);
          });
      console.log(this.resultData);
    }, 20000)
    // }
  }
}
