
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



   






    function GenarateRGB() {
            const red=Math.floor(Math.random() * 255)
            const green=Math.floor(Math.random() * 255)
            const blue=Math.floor(Math.random() * 255)

            return `rgb(${red},${green},${blue})`
    }
    function GenarateHEX() {
            const red=Math.floor(Math.random() * 255)
            const green=Math.floor(Math.random() * 255)
            const blue=Math.floor(Math.random() * 255)

            
           
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




