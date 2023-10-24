let container1 = document.getElementById("container1");
// container1.addEventListener('mouseover', handleMouseOver);
// below - referring to a named function
// container1.onmouseover = handleMouseOver;
// below - using an anonymous function
// container1.onmouseover = function (event){
//     event.target.style.backgroundColor = '#000000';
// }
// below - using arrow function - modern JavaScript!
// container1.onmouseover = (event)=>{
//     event.target.style.backgroundColor = '#000000';
// }



let selectedIndex = -1;
let containers = document.getElementsByClassName("container")
// console.log(containers)
// console.log(containers[0])

// loop through all containers
for(let i = 0; i < containers.length; i++){
    // add a mouse-over listener to each container
    containers[i].onmouseover = (event)=>{
       // we change the style as long as this item is not currently selected
        if(selectedIndex != returnCurrentIndex(containers, event.target)){
            event.target.style.backgroundColor='mistyrose'
            event.target.style.width="200px"
            event.target.style.border="none"
        }
        event.target.style.backgroundColor='thistle';
        event.target.style.width="300px"
        event.target.style.border="dashed 3px white"
    }
    // add a mouse-out listener to each
    containers[i].onmouseout = (event)=>{
        // find the index of the container that the mouse just came off
        let currentIndex = returnCurrentIndex(containers, event.target)
        // change the style as long as this is not currently selected
        if(selectedIndex !== currentIndex){
            event.target.style.backgroundColor='mistyrose';
            event.target.style.width="200px"
            event.target.style.border="none"
        }
    }
    
    // add a mouse-down listener to each
    containers[i].onmousedown = (event)=>{
        // if we have a valid selection (initially there is no selection = -1)
        if(selectedIndex > -1){
            // get a reference to the previously selected container
            let previousSelectedItem = containers[selectedIndex];
            // apply styling for mouseout
            // note - we need to rationalise this aspect of the program to avoid duplication
            previousSelectedItem.style.backgroundColor='mistyrose'
            previousSelectedItem.style.width="200px"
            previousSelectedItem.style.border="none"
        }
        // now style the current item as a selected item
        event.target.style.backgroundColor='olive'
        event.target.style.border="dashed 3px thistle"
        event.target.style.width="300px"
        // set the selectedIndex to match the new selection
        selectedIndex = returnCurrentIndex(containers, event.target)
    }
}

//use this to find the index of a given item in a given collection / list / array
function returnCurrentIndex(collection, currentItem){
    // loop through the collection
    for(let i = 0; i < collection.length; i++){
        // if the item at the current index equals the item we are looking for, bingo!
        if(currentItem == collection[i]){
            // we have found the matching index, pass this back as a return value
        return i;
        // if return is called, the function now ends
        }
    }
    // this line will only execute if currentItem is not found
    console.error("currentItem not found")
}

// named functions can be placed anywhere in the code
function handleMouseOver(event){
    event.target.style.backgroundColor = '#000000';
}