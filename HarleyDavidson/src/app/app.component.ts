import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '7.HarleyDavidson';
  motosApp: any[]=[
    {
      img: "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-street-bob-114/2022-street-bob-114-f56/2022-street-bob-114-f56-motorcycle.jpg?impolicy=myresize&rw=500",
      name: "Street bob",
      price: 18700,
      colors: [
        {name: "Dark panic", color: "#1c1c1c"},
        {name: "Universe grey", color: "#444348"},
        {name: "Devil red", color: "#b40007"},
        {name: "Cosmic blue",color: "#076aa1"},
      ]
    },
    {
      img: "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-softail-standard/2022-softail-standard-010/2022-softail-standard-010-motorcycle.jpg?impolicy=myresize&rw=500",
      name: "Softail standard",
      price: 17500,
      colors: [
        {name: "Dark panic", color: "#1c1c1c"},
      ]
    },
    {
      img: "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-breakout-114/2022-breakout-114-f59/2022-breakout-114-f59-motorcycle.jpg?impolicy=myresize&rw=500",
      name: "Vreakout",
      price: 27400,
      colors: [
        {name: "Dark panic", color: "#1c1c1c"},
        {name: "Universe grey", color: "#444348"},
        {name: "Militar green", color: "#6e6b39"},
      ]
    }
  ]

removeUlt(){
  this.motosApp.pop();
}

addMoto(element:{}){
// this.motosApp=[...this.motosApp, element];
this.motosApp.push(element)
}


}
