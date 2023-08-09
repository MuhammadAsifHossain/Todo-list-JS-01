const input = document.getElementById("input") //form input 
const todolist = document.getElementById("todolist") //ul to show todoitem
const todoform = document.getElementById("todoform") //form

//creating eventlistener on submit through button
todoform.addEventListener("submit", function(e) {
    e.preventDefault()
    if (input.value.trim() !== "")
    // Checking if the input value is not blank after trimming
    {
        // creating a new todo
        const newtodo = document.createElement("li")
        const todoinput = document.createElement("span")
        todoinput.innerHTML = input.value //putting the input value
        newtodo.appendChild(todoinput) //appending span to li
        input.value = ""
        todolist.appendChild(newtodo) //appending the new todo on ul tag

        //creating remove button
        const removebutton = document.createElement("button")
        removebutton.innerHTML = "Remove it"
        newtodo.appendChild(removebutton)

        //creating complete button
        const completebutton = document.createElement("button")
        completebutton.innerHTML = "Task Completed"
        newtodo.appendChild(completebutton)

        // creating edit option
        //edit input
        const editinput = document.createElement("input")
        editinput.value = input.value
        editinput.style.display="none" //Hidong edit input initially
        newtodo.appendChild(editinput)
        //edit button
        const editbutton = document.createElement("button")
        editbutton.innerHTML = "Edit"
        newtodo.appendChild(editbutton)

        completebutton.addEventListener("click",function (e){
            newtodo.style.textDecoration = "line-through"
            editbutton.style.display = "none"
            editinput.style.display = "none"
            completebutton.style.display = "none"
           
        })
        removebutton.addEventListener("click",function (e){
            newtodo.remove()
        })
        editbutton.addEventListener("click", function (e) {
            todoinput.style.display = "none"
            editinput.style.display = "inline"
            
        })
        editinput.addEventListener("blur",function (e){ 
            todoinput.style.display = "inline"
            //console.log(editinput)
            editinput.style.display = "none"
            todoinput.innerHTML = editinput.value
             
           // console.log(editinput)
    
            
        })



    }
})
    