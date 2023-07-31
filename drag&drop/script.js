

let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for(list of lists){
    
    list.addEventListener("dragstart", function(e){
        let selected = e.target;

        // drag the element into right box

        rightBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        rightBox.addEventListener("drop", function(e){
            rightBox.appendChild(selected);
            selected = null;
        });

            //  drag the element into left box
        
        leftBox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        leftBox.addEventListener("drop", function(e){
            leftBox.appendChild(selected);
            selected = null;
        });
    })
}
