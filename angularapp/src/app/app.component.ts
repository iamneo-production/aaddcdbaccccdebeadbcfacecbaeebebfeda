
import { Component ,OnInit} from '@angular/core';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    for(const element of this.total)
    {
      this.totalCal += (element.count * element.calory)
    }
  }
  title = 'calorietracker';
  hide:boolean = false;
  foods = [{name:"Apple",calory:81,image:"https://subzfresh.com/wp-content/uploads/2022/04/apple_158989157.jpg"},{name:"Banana",calory:105,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/800px-Banana-Single.jpg"},{name:"Dates",calory:228,image:"https://media.istockphoto.com/id/1211281586/photo/dates-fruts.jpg?s=612x612&w=0&k=20&c=1mxFE2ws9o_fhqphWMZeZ7ik3z0FROWA5bxL45zzWkw="},{name:"Grapes(1 cup)",calory:114,image:"https://media.istockphoto.com/id/905173600/photo/grapes-in-a-bowl-isolated-on-white-background-green-grapes-kish-mish-vegetarian-or-healthy.jpg?s=612x612&w=0&k=20&c=9bhXNDygCn_PxU2RyMmQTGEez5ZE0PI3Hs5CWymnUiQ="},{name:"Biscuit",calory:103,image:"data:image/jpeg;base64,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"},
  {name:"Strawberries",calory:45,image:"https://media.istockphoto.com/id/1157946861/photo/red-berry-strawberry-isolated.jpg?s=612x612&w=0&k=20&c=HyxZMbI_e-vDJbrzZkTz5zWCAo1mBEzWbvVlyigbi-E="}]
  total = [{name:"Apple",calory:81,count:1},{name:"Banana",calory:105,count:2},{name:"Dates",calory:228,count:3},{name:"Grapes(1 cup)",calory:114,count:3},{name:"Biscuit",calory:103,count:5},{name:"Strawberries",calory:45,count:6}];
  totalCal:number = 0;

  set(e:any)
  {
    e.preventDefault()
    this.hide = true;

  }
  addFood(e:any,name:string,calory:string,image:string)
  {
    e.preventDefault();
    this.foods.push({name:name,calory:parseInt(calory),image:image})
    console.log(this.foods)
    this.hide=false
  }

  add(name:string,calory:number,count:string)
  {
    if(count !='')
    {
      for(let i=0;i<this.total.length;i++)
      {
        if(this.total[i].name == (name))
        {
          this.total[i].count += parseInt(count)
          console.log(this.total)
          this.sum(calory,count)
          return
        }
      }

      this.total.push({name:name,calory:calory,count:parseInt(count)})
      this.sum(calory,count)
      console.log(this.total)
    }
  }

  sum(calory:number,count:string)
  {
    this.totalCal += (parseInt(count) * calory)
    console.log(this.totalCal)
  }
}

