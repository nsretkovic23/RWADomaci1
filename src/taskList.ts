import{task} from './task';


export class taskList{
    
    public cards:number;
    public tiles:HTMLElement[]=[];
    public container:HTMLElement;
    public tasks:task[]=[];

    constructor(panel:HTMLElement)
    {
        this.container=panel;
    }


    
    drawTile(_task:task)
    {
        let sameDay:boolean=false;
        //if two or more tasks are at the same day, draw inside one tile for that day
        if(this.tasks.length!==0)
        {
            for(let i=0; i<this.tasks.length; ++i)
            {
                if(this.tasks[i].date===_task.date)
                {
                    this.tasks.push(_task);
                    _task.drawTask(this.tasks[i].containter);
                    sameDay=true;
                    break;
                }
            
            }
        }
            if(sameDay==false)
            {
                let tiles=document.createElement("div");
                tiles.classList.add("tile");
                this.container.appendChild(tiles);

                this.tasks.push(_task);
                _task.drawTask(tiles);
            }
        
            
    }

    drawAllTasks()
    {
        if(this.tasks.length===0)
        {
            alert("No tasks added");
            return;
        }
        
        this.tasks.forEach((el)=>{
            let tiles=document.createElement("div");
            tiles.classList.add("tile");
            this.container.appendChild(tiles);

            el.drawTask(tiles);
        })
    }


}