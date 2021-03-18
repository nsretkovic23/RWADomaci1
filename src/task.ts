export class task
{
    public description:string;
    public date:string;
    public containter:HTMLElement;

    constructor(desc:string, date:string)
    {
       
        this.description=desc;
        this.date=date;
    }

    drawTask(panel:HTMLElement)
    {
        this.containter=panel;
        const eventDiv=document.createElement("div");
        eventDiv.classList.add("task");
        this.containter.appendChild(eventDiv);

        const dateLbl=document.createElement("label");
        dateLbl.innerHTML=this.date;
        eventDiv.appendChild(dateLbl);

        const desc=document.createElement("label");
        desc.innerHTML=this.description;
        eventDiv.appendChild(desc);

    }


}