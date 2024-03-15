/*function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result
    convertedValue = String(input);

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
   
    let start = 'pet_';
    let date = null;
 
    let output = documet.querySelector('result');
    document.getElementById('result').innerText = result;

    if (input.slice(0,3) === start) {
      result = 'Valid syntax';
       
   
  
    } else{
        result = 'Invalid syntax';
        
       
    }
}*/

/*function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
         document.getElementById('result').innerText = result;
         const pet = "pet_"
         let alphanumericRegex =  /^[a-zA-Z0-9]+$/ ;
         let name = pet + toString(alphanumericRegex);






          

          if (input === name){
            document.getElementById('result').textContent = 'Valid Syntax';
          }else {
            document.getElementById('result').textContent= 'Invalid Syntax';
          }

          

}*/
  /*if (alphanumericRegex.test(input)) {
                document.getElementById('errorMsg').style.display = 'none';
                // Input is valid, you can proceed with further actions
            } else {
                document.getElementById('errorMsg').style.display = 'block';
                // Input is invalid
            }*/

            function validateSyntax() {
                let input = document.getElementById('petInput').value;
                // Validation logic goes here
                let result = ''; // Placeholder for validation result
            
                // Regular expression to match input starting with 'pet_' followed by alphanumeric characters
                const petRegex = /^pet_[a-zA-Z0-9]+$/;
            
                if (petRegex.test(input)) {
                    result = 'Valid Syntax';
                } else {
                    result = 'Invalid Syntax';
                }
            
                // Set the result in the DOM
                document.getElementById('result').textContent = result;
            }


