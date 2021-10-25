const mainContainer = document.querySelector("main")


for(i=0;i<16;i++)
{
    const column = document.createElement("div")
    mainContainer.appendChild(column)
    for(j=0;j<16;j++)
    {
        const row = document.createElement("div")
        // row.style.backgroundColor = "blue"
        row.style.borderStyle="solid"
        row.style.borderColor="black"
        row.style.height="25px"
        row.style.width="25px"
        row.addEventListener("mouseover",function(event)
        {
            event.target.style.
        })
        column.appendChild(row)
    }


    
    //grid.style.float="right"
    // mainContainer.appendChild(grid)
    
}


























