/* Project requirements
    * - Change the background Color by genarateing random color by clicking button
*/


window.onload=()=>{
    main()
}

//globa;

let toast=null


function main(){
    
    const root=document.getElementById('root')
    const btnChange=document.getElementById('change')
    const copy=document.getElementById('copy')
    const output=document.getElementById('output')
    
    btnChange.addEventListener('click',function(){
        let RGBColor=generateRGBcolor().toUpperCase()
        let HexColor=generateHEXcolor().toUpperCase()

            root.style.backgroundColor=HexColor
            output.value=HexColor
            
            

        
    })




    copy.addEventListener('click',function(){
        
        messageGenarator(`${output.value} Copied`)

        
         })
         
   














         function generateRGBcolor(){
            const red=Math.floor(Math.random() * 255)
            const green=Math.floor(Math.random() * 255)
            const blue=Math.floor(Math.random() * 255)
        
            return `rgb(${red},${green},${blue})`
        }
        function generateHEXcolor(){
            const red=Math.floor(Math.random() * 255)
            const green=Math.floor(Math.random() * 255)
            const blue=Math.floor(Math.random() * 255)
        
            return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
        }
        
        function messageGenarator(msg){
              
            
                toast=document.createElement('div')
           
            toast.className='msg toast show success toast-slide-in'
            toast.innerText=msg
            document.body.appendChild(toast)
        
        
            toast.addEventListener('click',function(){
                toast.classList.add('toast-slide-out')
            })
            
        
        
        
            
        
        
        
        
           
        
        }












    }




