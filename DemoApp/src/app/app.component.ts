import { Component } from '@angular/core'; 
import { default as studentsData } from "./data.json";



interface Student {  
  id: Number;  
  name: String;  
  email: String;  
  gender: String;  
}  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoApp';
  students: Student[] = studentsData;  
}




