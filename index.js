
function onSubmit(e) {
    e.preventDefault()
    console.log("Hi :)")
    
    let Pgenome = document.querySelector("#pgenome").value
    let Mgenome = document.querySelector("#mgenome").value
    Pgenome = Pgenome.split("")
    Mgenome = Mgenome.split("")
    
    if (document.querySelector("#Autosomal").checked == true) {
        console.log("checked!")
    } else if (document.querySelector("#Autosomal").checked == false) {
        console.log("not checked!")
    } 

    
    return false
}