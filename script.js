function appendValue(val){
            let display=document.getElementById("display");
            let sy=['/','+',"-",'%','*']
           
            let nums=display.textContent
            let lastVal=nums.charAt(nums.length -1)
          
       
            if (display.textContent==='0'){
                display.textContent=val;
            }
            else{
                if (sy.includes(lastVal) && sy.includes(val)){
                    //
                }
                else{
                display.textContent+=val;
                }
            }
           }
        
        function calculate(){
            let dispaly=document.getElementById("display");
            try{
                display.textContent=eval(dispaly.textContent);
            }
            catch{
                display.textContent='error';
            }
        }
        function clearDisplay(){
            document.getElementById("display").textContent='0';
        }
        function backspace(){
            let d=document.getElementById("display");
            d.textContent=d.textContent.slice(0,-1);
            if (d.textContent===''){
                d.textContent='0'
            }
        }
        
      function theme(){
        let d1=document.getElementById("darkm")
        let d2=document.getElementById("darkb")
        d1.classList.toggle("light");
        if (d1.classList.contains("light")){
            d2.textContent="Dark Theme";
        }
        else{
            d2.textContent='Light Theme'
        }
      }