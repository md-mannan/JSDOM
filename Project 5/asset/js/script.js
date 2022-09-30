
/**
 *  Project Requirements
 *  - Change the Background By Clicking a Button
 *  - Also Display the Hex Code to a Disabled Input Field
 *  - Add a button to copy color code
 *  - Add a Toast when copied
 *  - User Can Type there Hex Code too
 * 
 * /Steps
 * 
 * 
 *  
 * 
 */



let toast=null




window.onload=()=>{
    main()
}


function main(){
    const root=document.getElementById('root')
    const btnChange=document.getElementById('btnChange')
    const output=document.getElementById('output')
    const btnCopy=document.getElementById('btnCopy')



    output.addEventListener('keyup',function(e){
        const color=e.target.value
        
        if(color){
           output.value=e.target.value.toUpperCase()
           if(isValidColor(color)){
            root.style.backgroundColor=`#${color}`
           }

            
        }
    })




    //Change Background Color


    btnChange.addEventListener('click',function(){
        let rgbBG=GenarateRGB()
        let hexBG=GenarateHEX()
        root.style.backgroundColor=hexBG
        output.value=hexBG.toUpperCase().substring(1)


        //copy onclick copy button

       


        
        

    })
    btnCopy.addEventListener('click',function(){
        navigator.clipboard.writeText(`#${output.value}`)


        if(toast!==null){
            toast.remove()
            toast=null
            
           }

         
             toastMessage(`#${output.value} Copied`)
        
          
        //    toastMessage(`#${output.value} Copied`)
        
    })



   



/**
 * 
 * Genarate All Type Color Code 
 */


    function GenarateRGB() {
            const red=Math.floor(Math.random() * 255)
            const green=Math.floor(Math.random() * 255)
            const blue=Math.floor(Math.random() * 255)

            return `rgb(${red},${green},${blue})`
    }
    function GenarateHEX() {
           

            
           
            return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    }

/**
 * Function 1 -Genarate three random decimal number for red ,green,blue 
 * Return As a Object
 */
function genarateColorDecimal(){
            const red=Math.floor(Math.random() * 255)
            const green=Math.floor(Math.random() * 255)
            const blue=Math.floor(Math.random() * 255)


            return {
                red,
                green,
                blue
            }
}
// - Genarate Hex Color Code
function GenarateHEX() {
         const {red,green,blue}=genarateColorDecimal()  




            
           
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}







    /**
     * @param {string} toast
     */
    function toastMessage(msg) {

        
        toast=document.createElement('div')
        toast.innerText=msg
        toast.className='toast show toast-slide-in'

      
       toast.addEventListener('click',function(){
        toast.classList.remove('toast-slide-in')
        toast.classList.add('toast-slide-out')

        toast.addEventListener('animationend',function(){
            
                toast.remove()
                toast=null
                
              
        })
    })

       


        document.body.appendChild(toast)



        
        
    }





/**
 * 
 * @param {string} color 
 */

function isValidColor(color){
    if(color.length!==6) return false

    return /^[0-9A-Fa-f]{6}$/i.test(color)

}


















}



//Step 1 Create Onload Handler

// step 2 - random color generator function 

// step 3 - collect all necessary references

// step 4 - handle the click event

// step 5 - handle the copy button click event

// Step 6 - activate toast message

// Step 7 - create a dynamic toast message

// step 8 - clear toast message

// Step 9 - Create isHexValid Function 

// Step 10 - implement cange handler on input field

// Step 11 - prevent coping if hex code is invalid
// Step 12 -refactor the color genarator function
// Step 13 -Update color Code to Display RGB Color Code