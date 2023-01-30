function handleSubmit(e) {
    e.preventDefault()
    console.log(document.getElementById("userinput").submit())
    console.log("hello! :D")
  }

function onSubmit(e) {
    e.preventDefault()
    return false
}