const userFoodChoice = {
    spicy:[
        {
            name: 'Khao San Road',
            price:'$$$'
        },
        {
            name:'Papa Spicy',
            price:'$$'
        },
        {
            name:'Saffron spice Kitchen',
            price:'$'
        }
    ],
    savory:[
        {
            name:'Planta',
            price:'$$$'
        },
        {
            name:'Hogtown Vegan',
            price:'$$'
        },
        {
            name:'Greens Vegetarian',
            price:'$'
        }
    ],
    sweet:[
        {
            name: 'Bunners',
            price:'$$$'
        },
        {
            name:'Sweet Oklenkas',
            price:'$$'
        },
        {
            name:'Through Being Cool',
            price:'$'

        }
    ]
};

// js scripts below 
$(function(){
    // this is a array that we made so we can store the data from the values the user has given through the 
    //inputs 
    
    $('form').on('submit',function(event){
        event.preventDefault();
        // this is collecting the value from the input that the user has selected 
        // we have made it into a variable
        let selectedFood = $('input[name=food]:checked').val();
        //console.log(selectedFood);
        
        // this is collecting the value from the input that the the user had selected
        // we have made it into a variable 
        let selectedPrice = $('input[name=price]:checked').val();
        // console.log(selectedPrice);
        
        // these methods are pushing the values that we have gotten from user and put into variables
        // into our new array userMeal, so that we are able to access them
        // define this array in the form submission the make the scope smaller 
        let userMeal = [];
        userMeal.push(selectedFood);
        userMeal.push(selectedPrice);
        console.log(userMeal);
        

        // this variable is to get the data from new array userMeal that is selected from userFoodChoices
        const foodOptions = userFoodChoice[userMeal[0]];
       // console.log(foodOptions);

       // this variable is equal to the function of filter that we are now filtering out data from inputs from
       // we will get the item that had the same values from the array as the user selected 
        const filteredChoices = foodOptions.filter(item => item.price === userMeal[1]);
       // console.log(filteredChoices);
        
        // this variable so we are able to get the answer from the filterdChoics, which filters the values
        // from the user with the same value
        let answer = filteredChoices[0].name;
        console.log(answer);
        
        $('.answer').text(answer);
        userMeal.splice();

    });
    
    
    








});


   //let userPrice = userFoodChoice.
       // let userMeal = "";

      // const userMeal = userFoodChoice.filter((price)=>{
           // return userFoodChoice.price;
       // })

      //  for(var item = 0; item < userChoice; item++){
          //  const choice = userChoice[item];

           // if(choice.price === price)
              //  userChoice.push(choice);
       // }

        //let userMeal = userFoodChoice[food] && userFoodChoice[price];
       // console.log(userChoice);