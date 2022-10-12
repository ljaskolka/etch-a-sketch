const resetButton = document.querySelector('.reset')
const container = document.querySelector('.container')
const sizeOfGrid = prompt("Enter size of grid:")

const rgbButton = document.querySelector('.rgb')
const blackButton = document.querySelector('.black')
const fadeButton = document.querySelector('.fade')

 

function createRGB() {
     const r = Math.floor(Math.random() * 256)
     const g = Math.floor(Math.random() * 256)
     const b = Math.floor(Math.random() * 256)

     return{r, g, b}
}

// const currentColor = "black"

// rgbButton.addEventListener("click", () => {
//     currentColor = createRGB
//     console.log(createRGB())
// })


const createGrid = (amtOfGrids) => {
    for (let i = 0; i < amtOfGrids; i++) {
        const row = document.createElement("div")
        row.classList.add("grid-row")

        for (let j = 0; j < amtOfGrids; j++) {

            //
            const { r, g, b } = createRGB()

            // size of grid
            const widthAndHeight = 960 / sizeOfGrid


            // grid box alert
            if(sizeOfGrid > 100) {
                alert("Grid can't be bigger than 100")
                document.location.reload(true)
            }

            // creating grid box
            const gridBox = document.createElement("div")
            gridBox.classList.add("grid-box")
            gridBox.style.width = `${widthAndHeight}px`
            gridBox.style.height = `${widthAndHeight}px`

            let bgColor = ""
            // rgb

            rgbButton.addEventListener("click", () => {
                bgColor = "rgb(" + r + "," + g + "," + b + ")";
               
            })

            blackButton.addEventListener("click", () => {
                bgColor = "rgb(0, 0, 0)";
               
            })

            fadeButton.addEventListener("click", () => {
                bgColor = "rgb(1, 1, 1)";
                
            })

            gridBox.addEventListener("mouseenter", () => {
                const currentOpacity = gridBox.style.opacity
                gridBox.style.background = bgColor  
                    if(bgColor === "rgb(1, 1, 1)"){
                        gridBox.style.opacity = Number(currentOpacity) + .1
                    }  
                
            })
            
    
            

            row.appendChild(gridBox)
        }
        container.appendChild(row)
    }
}



// gridBox.addEventListener("mouseenter", () => {
//     const currentOpacity = gridBox.style.opacity
//     //const bgColor = "rgb(" + r + "," + g + "," + b + ")";
//     gridBox.style.background = `rgb(0, 0, 0`
//     if (currentOpacity) {
//         gridBox.style.opacity = Number(currentOpacity) + .1
//     } else {
//         gridBox.style.opacity = .1
//     }
//     })




createGrid(sizeOfGrid)
