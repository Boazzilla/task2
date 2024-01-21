function Productlist(){
    var Entry_Greeting = "Hello And Welcome to Pearly Gates Online Store!\nBelow are a list of Our Products"

    var FemaleBags = "Click 1 forFemale Bags"
    var UnisexBags = "Click 3 for Unisex Bags"
    var MaleBags = "Click 2 for Male Bags"
    var FemaleShoes = "Click 4 for Female Shoes"
    var MaleShoes = "Click 5 for Male Shoes"
    var UnisexShoes = "Click 6 for Unisex Shoes"
    var FemaleJewelries = "Click 7 for Female Jewelires"
    var Male_Jewelries = "Click 8 for Male Jewelries"
    console.log(Entry_Greeting,"\n",
        FemaleBags,"\n",
        MaleBags,"\n",
        UnisexBags,"\n",
        FemaleShoes,"\n",
        MaleShoes,"\n",
        UnisexShoes,"\n",
        FemaleJewelries,"\n",
        Male_Jewelries)


    

    




}

function ProductPrice(){
    const prompt = require("prompt-sync")({sigint : true});

    const config = {promptMessage:"Make Your Choice"};
    const c = prompt(config.promptMessage)
    console.log("You have Selected","\n",c)
    var Female_Bags = "Female Bags\nLouis Vuiton  $300\nChanel $250\nChanel $200\nFendi 150$"
    var Male_Bags = "\n\nMale Bags\nMulberry  $300\nCoach  $250\nLoewe  $200\nCarl Fredrick  $220\nPrada  $230"
    var Unisex_Bags = "\n\nUnisex Bags\nAdidas $210\nArticle One  $320\nDickies  $400\nEllesse  $500\nBillini  $500"
    var Female_Shoes = "\n\nFemale Shoes\nAcorn $200\nAdrienne Vittadini  $500\nAera  $400\nAlias Mae  $1000\nAldo  $600"
    var Male_Shoes = "\n\nMale Shoes\nClarks  $400\nConverse  #500\nGucci  $2000\nAlden  $300\nBally  $600"
    var Unisex_Shoes = "\n\nUnisex Shoes\nNike  $500\nConcord  $600\nPuma  $300\nVans  $700\nReebok  $10000"
    var Female_Jewelries = "\n\nFemale Jewelries\nMejuri  $4000\nCompleted Works  $5000\nMissoma  $3000"
    var Male_Jewelries = "\n\nMale Jewelries\nDavid Yurman  $5000\nJohn Hardy $6000\nMiansai  $4000"
    
    if (c == "1"){
        console.log(Female_Bags)

    }else if(c == "2"){
        console.log(Male_Bags)
    }else if(c == "3"){
        console.log(Unisex_Bags)

        
    }else if(c == "4"){
        console.log(Female_Shoes)
    }else if(c == "5"){
        console.log(Male_Shoes)
    }else if(c == "6"){
        console.log(Unisex_Shoes)

    }else if(c == "7"){
        console.log(Female_Jewelries)
    }else if(c == "8"){
        console.log(Male_Jewelries)
    }else{
        console.log("You have made an invalid selection")
        ProductPrice()

    }

    const config2 = {promptMessage:"Type In Item name from above list"};
    const c2 = prompt(config2.promptMessage)
    console.log("You have Selected","\n",c2)
    console.log(c2," Has Been added to cart")
    const config3 = {promptMessage:"Continue to payment and shipping? (Yes/No)"};
    const c3 = prompt(config3.promptMessage)
    if (c3 == "Yes"){
        console.log("Choose Payment Method\n\nClick 1 Bank Transfers\nClick 2 for Digital Wallets\nClick 3 for Master Card\nClick 4 for Paypal")
        const config4 = {promptMessage:"Choose An Item"};
        const c4 = prompt(config4.promptMessage)
        if (c4 == "1"){
            console.log("You Have Selected Bank Transfers")
        }else if(c4 == "2"){
            console.log("You Have Selected Digital Wallets")

        }else if(c4 == "3"){
            console.log("You Have Selected Master Card")

        }else if(c4 == "4"){
            console.log("You Have Selected Paypal")
        }else{
            console.log("You have made an invalid Selection")
            Productlist()
            ProductPrice()
        }   
        //console.log("You have Selected","\n",c4)
        console.log("Payment Has been made")
        console.log("Shipping will take 5 to 7 working days ")
        console.log("Thank You For Shopping With Us")

    }else if(c3 == "No"){
        console.log("Thanks For checking us out")

    }
    


    

}

    
Productlist()
//ProductID()
ProductPrice()

