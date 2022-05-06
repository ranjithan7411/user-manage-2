import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodserviceService } from '../foodservice.service';



@Component({
  selector: 'app-food',
  templateUrl: './food2.component.html',
  styleUrls: ['./food2.component.css']
})
export class Food2Component implements OnInit {

  
  foods: any
  constructor(private foodService: FoodserviceService,
    private router: Router) { }

  ngOnInit(): void {
    this.getFood()
  }
   public getFood()
  {
    this.foodService.getFoodList().subscribe(data => {
      this.foods = data;
    })
    
  }
  
updateFood(id: number){
  this.router.navigate(['/foodupdate',id]);
}
// deleteStudent(id:number){
//   this.studentService.deleteStudent(id).subscribe(data => {
//     console.log(data);
//     this.getStudent();
//   })
//}


}
