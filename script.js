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

    $('form').on('submit',function(event){
        event.preventDefault();
        const food = $('input[name=food]:checked').val();
        const price = $('input[name=price]:checked').val();

       // let userChoice = userFoodChoice[food];
        let userPrice = userFoodChoice.food.price;
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
        console.log(userPrice);

    });

    
    








});