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
            output.value=HexColor.substring(1)
            
            

        
    })




    copy.addEventListener('click',function(){
        const data=navigator.clipboard.writeText(`#${output.value}`)

        if(data){
            console.log(output.value)
            messageGenarator(`#${output.value} Copied`)
         }else{
            messageGenarator(`Invalid Color Code `)
         }
        
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
              
            copy.addEventListener('click',function(){
                toast=document.createElement('div')
            toast.setAttribute('id','msg')
            toast.className='toast show success toast-slide-in'
            toast.innerText=msg
            document.body.appendChild(toast)
        
        
            toast.addEventListener('click',function(){
                toast.classList.add('toast-slide-out')
            })
            toast.addEventListener('click',function(){
                toast.classList.add('toast-slide-out')
            })
        
        
        
            })
        
        
        
        
           
        
        }












    }




