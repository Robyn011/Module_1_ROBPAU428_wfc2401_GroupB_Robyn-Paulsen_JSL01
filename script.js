


//Final Product
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


