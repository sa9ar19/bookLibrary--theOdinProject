const myBooks = []

const container = document.getElementById("container")

const dialog = document.getElementById("formDialog")
const addBtn = document.getElementById("addBtn")
const submitBtn = document.getElementById("submitBtn")

const form = document.getElementById("form")

form.addEventListener("submit", (event)=>{
    event.preventDefault()

    const nameValue = document.getElementById("book").value
    const authorValue = document.getElementById("author").value
    const pagesValue = document.getElementById("pages").value
    const readStatus = document.getElementById("read")
    let readValue

    if(readStatus.checked){
        readValue = true
    }
    else{
        readValue = false
    }
    
    const newData = {
        name: nameValue,
        author: authorValue,
        pages: pagesValue,
        read: readValue
    }

    myBooks.push(newData)

    dialog.close()

    displayBooks()
})

addBtn.addEventListener("click", ()=>{
    dialog.showModal()
})

// submitBtn.addEventListener("click", (event)=>{
//     event.preventDefault()
//     dialog.close()
// })

function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {

}

function displayBooks(){
    container.innerHTML = ""

    myBooks.forEach((book, index) => {
        const card = document.createElement('div')
        card.classList.add("card")
        container.appendChild(card) 
        const displayName = document.createElement('h2')
        card.appendChild(displayName)
        displayName.innerHTML = `"${book.name}"`
        const displayAuthor = document.createElement('h2')
        card.appendChild(displayAuthor)
        displayAuthor.innerHTML = `by ${book.author}`
        const displayPages = document.createElement('h2')
        card.appendChild(displayPages)
        displayPages.innerHTML = `Pages : ${book.pages}`
        const readBtn = document.createElement('button')
        readBtn.classList.add("readBtn")
        card.appendChild(readBtn)
        if(book.read == true){
            readBtn.innerHTML = "Read"
            readBtn.style.backgroundColor = "#65d4e5"
        }
        else{
            readBtn.innerHTML= "Not Read"
            readBtn.style.backgroundColor = "#23aa7d"
        }
        readBtn.addEventListener("click", ()=>{
            toggleReadStatus(index)
        })
        const removeBtn = document.createElement("button")
        removeBtn.classList.add("removeBtn")
        card.appendChild(removeBtn)
        removeBtn.innerHTML = "Remove"

        removeBtn.addEventListener("click", ()=>{
            myBooks.splice(index, 1)
            displayBooks()
        })

    });
    console.log(myBooks)
}

function toggleReadStatus(index){
    myBooks[index].read = !myBooks[index].read
    displayBooks()
}

displayBooks()