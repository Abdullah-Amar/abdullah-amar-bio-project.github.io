
function onSubmit(e) {
    e.preventDefault()
    
    let result = ""
    let heteroNum = 0
    let homoDomNum = 0
    let homoRecNum = 0


    let pGenome = document.querySelector("#pgenome").value
    let mGenome = document.querySelector("#mgenome").value
    pGenome = pGenome.split("")
    mGenome = mGenome.split("")
    
    if (document.querySelector("#Autosomal").checked == true) {
        let child1 = pGenome[0] + mGenome[0]
        let child2 = pGenome[0] + mGenome[1]
        let child3 = pGenome[1] + mGenome[0]
        let child4 = pGenome[1] + mGenome[1]

        let allOffspring = [child1, child2, child3, child4]

        for (let i = 0; i < allOffspring.length; i++) {
            if (allOffspring[i] == "aA") {
                allOffspring[i] = "Aa"
                result+="\nGenome: Aa - Genotype: heterozygous - Phenotype: Dominant"
                heteroNum++
            } else if (allOffspring[i] == "Aa") {
                result+="\nGenome: Aa - Genotype: heterozygous - Phenotype: Dominant"
                heteroNum++
            } else if (allOffspring[i] == "AA") {
                result+="\nGenome: AA - Genotype: homozygous dominant - Phenotype: Dominant" 
                homoDomNum++
            } else if (allOffspring[i] == "aa") {
                result+="\nGenome: aa - Genotype: homozygous recessive - Phenotype: Recessive"
                homoRecNum++
            }
        }        
    } else if (document.querySelector("#Autosomal").checked == false) {
        let child1 = pGenome[0] + mGenome[0]
        let child2 = pGenome[0] + mGenome[1]
        let child3 = mGenome[0]
        let child4 = mGenome[1]

        let Alloffspring = [child1, child2, child3, child4]

        for (let i = 0; i < Alloffspring.length; i++) {
            if (Alloffspring[i] == "aA") {
                Alloffspring[i] = "Aa"
                result+="\nGenome: XAXa - Genotype: heterozygous - Phenotype: Dominant - Sex: Female"
                heteroNum++
            } else if (Alloffspring[i] == "Aa") {
                result+="\nGenome: XAXa - Genotype: heterozygous - Phenotype: Dominant - Sex: Female"
                heteroNum++
            } else if (Alloffspring[i] == "AA") {
                result+="\nGenome: XAXA - Genotype: homozygous dominant - Phenotype: Dominant - Sex: Female"
                homoDomNum++
            } else if (Alloffspring[i] == "aa") {
                result+="\nGenome: XaXa - Genotype: homozygous recessive - Phenotype: Recessive - Sex: Female"
                homoRecNum++
            } else if (Alloffspring[i] == "A") {
                result+="\nGenome: XAY - Genotype: dominant - Phenotype: Dominant - Sex: Male"
            } else if (Alloffspring[i] == "a") {
                result+="\nGenome:XaY - Genotype: recessive - Phenotype: Recessive - Sex: Male"
            }
        }
    }

    result += "\nHeterozygous: " + ((heteroNum / 4) * 100) + "%"
    result += "\nHomozygous Dominant: " + ((homoDomNum / 4) * 100) + "%"
    result += "\nHomozygous Recessive: " + ((homoRecNum / 4) * 100) + "%"
    document.querySelector("#result").innerText = result
    return false
}