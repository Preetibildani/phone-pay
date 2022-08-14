function server(){
    return true;
   }
   // console.log(stack)
   let payment = new Promise(function(resolve,reject){
       let pin=server();

       setTimeout(function() {
           if(pin){
               resolve("Payment Successfull !");
           }
           else{
               reject("Please try again Later !");
           }
       }, 3000);
   })

   let image=document.getElementById("img_ins");
   let print=document.getElementById("print");
   async function content(){
      try{
       let res = await payment;
       image.src="https://www.thaagam.org/donate/assets/img/success.gif";
       print.innerText="Payment Successfull !";
      }
      catch(err){
       console.log(err);
       image.src="https://quicksavaari.com/payment_failed.gif";
       print.innerText="Please try again Later !";
      }
   }
  function pay(){
   let x=document.getElementById("inp");
   x.value=null;
   


   image.src="https://iibf.esdsconnect.com/assets/images/loading.gif";
   print.innerText="Sending...."
   setTimeout(function(){
       content();
   },3000);
  }
  