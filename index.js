const task=[];


function addTask(){

    const blur = document.getElementById("bG").style.filter = "blur(0px)"

    const noItem = document.getElementById("noItem").style.visibility = "hidden"

    const clk = document.getElementById("newList").style.visibility = "hidden"

    const name = document.getElementById("name").value



const tempObj = {
    taskName: name
}

task.push(tempObj);

addTaskOnScreen()

}


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function goBack()  {
  const h1 = document.getElementById("Heading").style.visibility = "visible";

  const h2 = document.getElementById("Heading2").style.visibility = "visible"

  const h6 = document.getElementById("parent").style.display = "block"

  const h3 = document.getElementById("sub").style.visibility = "hidden"

  const h4 =  document.getElementById("left").style.visibility = "hidden"

  const h5 =  document.getElementById("back").style.visibility = "hidden"


}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function addTaskOnScreen() {
    
    const element = document.createElement("div")
    element.setAttribute("id", "child")
    

    element.innerText = task[task.length-1].taskName;

    const eee = document.createElement("div")
    eee.setAttribute("id", "ee")
    element.appendChild(eee);

    eee.onclick = function() {
        enter()
    };

    function enter() {

        const h1 = document.getElementById("Heading").style.visibility = "hidden"
        
        const h2 = document.getElementById("Heading2").style.visibility = "hidden"

        const h6 = document.getElementById("parent").style.display = "block"

     

        const h7 = document.getElementById("body").style.overflowY = "hidden"
        // element.style.margin = "96px 609px"

        const h3 = document.getElementById("sub")
        h3.innerText = task[task.length-1].taskName;
        h3.style.display = "inline-block"

        const h4 =  document.getElementById("left").style.visibility = "visible"
        const h5 =  document.getElementById("back").style.visibility = "visible"

       

     }
 

    const parent = document.getElementById("parent")
    parent.appendChild(element);
    

    const hr11 = document.createElement("hr");
    hr11.setAttribute("class", "hr1");
    element.appendChild(hr11);


    const image = document.createElement('img');
    image.setAttribute("class", "img");
    image.src = "./Images/add.png";
    element.appendChild(image)
    

    const image1 = document.createElement('img');
    image1.setAttribute("class", "img1");
    image1.src = "./Images/delete.png";
    element.appendChild(image1);
 

    image1.onclick = function() {
        deleteCard()
    };

    function deleteCard() {
        element.remove();
     }


    image.onclick = function() {
        clickForItem()
    };

 
    function clickForItem() {
        const clk = document.getElementById("newItem").style.visibility = "visible";
  
        const blur = document.getElementById("bG").style.filter = "blur(4px)";
     }
 
     
 

}



//----------------------------------------------------------------------------------------------------------------------------------------------------------------------



const task1=[];

function addItem() {
    const item_ = document.getElementById("item1").value
    const itemObj = {
        itemName: item_

    }  
    task1.push(itemObj);
    addItemsOnScreen()  

}
function  addItemsOnScreen() {
     
        
    const get = document.createElement("div")
    get.setAttribute("id", "child1")

    get.innerText = task1[task1.length-1].itemName;
    


    const element = document.getElementById("child")
    element.appendChild(get)  
    const parent = document.getElementById("parent")
    parent.appendChild(element);
   
   

   

}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const h4 =  document.getElementById("left").style.visibility = "hidden"
const h5 =  document.getElementById("back").style.visibility = "hidden"




function clickToAdd(){
 
 const clk = document.getElementById("newList").style.visibility = "visible";
  
 const blur = document.getElementById("bG").style.filter = "blur(4px)";

}


function closer1() {
    const clk = document.getElementById("newList").style.visibility = "hidden"
    const blur = document.getElementById("bG").style.filter = "blur(0px)"

}


function closer2() {
    const clk = document.getElementById("newItem").style.visibility = "hidden"
    const blur = document.getElementById("bG").style.filter = "blur(0px)"

}
//==============================================================================================

