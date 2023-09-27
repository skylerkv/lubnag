let allDownArrow = document.getElementsByClassName("down-arrow")
let allUpArrow = document.getElementsByClassName("up-arrow")

for (let q of allDownArrow) {
    const qNum = q.id.substring(2)
    q.addEventListener("click", () => {
        const ansElement = document.getElementById("a" + qNum)
        const downArrowContainer = document.getElementById(q.id + "-container")
        const upArrowContainer = document.getElementById("qu" + qNum + "-container")

        ansElement.style.display = "block"
        downArrowContainer.style.display = "none"
        upArrowContainer.style.display = "block"
    })
}

for (let q of allUpArrow) {
    const qNum = q.id.substring(2)
    q.addEventListener("click", () => {
        const ansElement = document.getElementById("a" + qNum)
        const upArrowContainer = document.getElementById(q.id + "-container")
        const downArrowContainer = document.getElementById("qd" + qNum + "-container")

        ansElement.style.display = "none"
        upArrowContainer.style.display = "none"
        downArrowContainer.style.display = "block"
    })
}
