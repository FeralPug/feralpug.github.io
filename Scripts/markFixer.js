// JavaScript source code
const additions = document.querySelectorAll("code .addition");

let marks = [];

for (let i = 0; i < additions.length; i++) {
    marks = [];
    addition = additions[i];

    FixLine(addition.textContent);

    addition.textContent = "";

    while (marks.length > 0) {
        let mark = marks.shift();

        if (mark.isMark) {
            let markElement = document.createElement("mark");
            markElement.textContent = mark.text;
            markElement.setAttribute("class", "highlight");
            addition.appendChild(markElement);
        }
        else {
            let spanElement = document.createElement("span");
            spanElement.textContent = mark.text;
            addition.appendChild(spanElement);
        }     
    }
}


function FixLine(additionText) {

    let startRegex = /\S/;
    let endRegex = /\n/;

    let firstIndex = additionText.search(startRegex);
    let lastIndex = additionText.search(endRegex);

    //if we dont find a new line we have reached the end of the element and the end of the new mark will be the end of the element
    if (lastIndex < 0) {
        //if we find a new character then create the new string otherwise just end
        if (firstIndex >= 0) {
            let markText = additionText.slice(0, additionText.length);
            let mark = new Mark(markText, true);
            marks.push(mark);
        }       
    }
    //if we find a new line character we will use that index
    else if (lastIndex >= 0) {
        //check to see if we have found a non white space character and that it is before the new line character
        //if so make the string out of that
        if (firstIndex < lastIndex && firstIndex >= 0) {
            let markText = additionText.slice(firstIndex, lastIndex);
            let mark = new Mark(markText, true);
            marks.push(mark);

            //then call this function with new start and end numbers
            //we have to add one because the lastIndex will be the new line and we want to start just after it
            newText = additionText.slice(lastIndex, additionText.length);
            FixLine(newText);
        }
        //we have to add all the in between stuff
        else if(firstIndex >= 0) {
            //since we found a new line character we will have to add that into the content
            let newLine = additionText.slice(lastIndex, firstIndex);
            let notMark = new Mark(newLine, false);
            marks.push(notMark);

            //then call this function with new start and end numbers
            //we have to add one because the lastIndex will be the new line and we want to start just after it
            newText = additionText.slice(firstIndex, additionText.length);
            FixLine(newText);
        }
    }    
}

function Mark(text, isMark) {
    this.text = text;
    this.isMark = isMark;
}



