import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import axios from 'axios';
import * as proxy from 'https-proxy-agent';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private readonly http: HttpClient) {
    // console.log(environment.production)
    const agent = new proxy.HttpsProxyAgent('http://proxy.dev:8080');
    axios.create({
      httpsAgent: agent,
      httpAgent: agent
    }).get('https://jsonplaceholder.typicode.com/todos')
      .then(({ data }) => console.log(data))
      .catch(console.error)
    this.http.get('https://jsonplaceholder.typicode.com/todos/1', {
    }).subscribe(console.info)
  }

  title = 'my-appng17';
}
