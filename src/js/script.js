function adicionarTarefa() {

    let task = document.querySelector("input").value


    let li = document.createElement("li")
    li.innerHTML = task + '<i class="bi bi-x-circle-fill" onclick = "deletarTarefa(this)"></i>'


    document.querySelector("ul").appendChild(li)

    document.querySelector("input").value = ""
}

function deletarTarefa(li) {

    li.parentElement.remove()
}