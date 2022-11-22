function myTodo() 
{
    var checkBox = document.getElementById("todoCheck");
    var div = document.getElementById("todo");
    if (checkBox.checked == true)
    {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

fetch("to-do.json")

.then(function(response){
    console.log(response);
    return response.json();
})

.then(function(task){
    console.log(task)
    const html = task.map((data)=> `<div class="card">
                                        <ul>
                                            <li>${data.id}</li>
                                            <li>${data.name}</li>
                                            <li>${data.submitted}</li>
                                            <li>${data.completed}</li>
                                        </ul>
                                    </div>`
    );
    
    document.getElementById("todo").innerHTML = html;

})