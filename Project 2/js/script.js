
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

//Globals
let toast=null


//Step 1 Create Onload Handler

window.onload=()=>{
    main()
}



function main(){

    const root=document.getElementById('root')
    const btnChange=document.getElementById('change')
    const output=document.getElementById('output')
    const copy=document.getElementById('copy')
    
    output.addEventListener('keyup', function (e) {
        const color=e.target.value
        if (color) {
            output.value=e.target.value.toUpperCase()

            if(isValidHex(color)){
                root.style.backgroundColor = `#${color}`;
            }
			
		}



		// const color = e.target.value.toUpperCase()
		// if (color && isValidHex(color)) {
		// 	root.style.backgroundColor = `#${color}`;
		// }
	});

    btnChange.addEventListener('click',function(){

        let rgbColor=genarateRGB()
        let hexColor=genarateHEX()
        root.style.backgroundColor=hexColor
        output.value=hexColor.toUpperCase().substring(1)
        

        copy.addEventListener('click',function(){
            navigator.clipboard.writeText(`#${output.value}`)

           


            if(toast!==null){
                toast.remove()
                toast=null
            }

            genarateMsg(`#${output.value} Copied`)

        })


    })

   

   

}


// step 2 - random color generator function 

function genarateRGB(){
    const red=Math.floor(Math.random() * 255)
    const green=Math.floor(Math.random() * 255)
    const blue=Math.floor(Math.random() * 255)

    return `rgb(${red},${green},${blue})`
    
}
function genarateHEX(){
    const red=Math.floor(Math.random() * 255)
    const green=Math.floor(Math.random() * 255)
    const blue=Math.floor(Math.random() * 255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    
}

function genarateMsg(msg){
    toast=document.createElement('div')
    toast.innerText=msg
    console.log(msg)
    toast.className='msg toast show toast-slide-in success'

   
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
 * @param {string} color : ;
 */
 function isValidHex(color) {
	if (color.length !== 6) return false;
	
	return /^[0-9A-Fa-f]{6}$/i.test(color);

    
}


// step 3 - collect all necessary references

// step 4 - handle the click event

// step 5 - handle the copy button click event

// Step 6 - activate toast message

// Step 7 - create a dynamic toast message

// step 8 - clear toast message

// Step 9 - Create isHexValid Function 

// Step 10 - implement cange handler on input field

// Step 11 - prevent coping if hex code is invalid



