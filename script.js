let filter_btnBrand = document.getElementsByClassName("f_by_b_nam3");
let filter_btnDelivery = document.getElementsByClassName("f_by_d");
let sort_btn = document.getElementsByClassName("s_item_order");
let filter_productByName = document.querySelectorAll('.box');
let filter_productByPrice = document.querySelectorAll(".price_tag");
let filter_productByRating = document.querySelectorAll(".random_rating")
let filter_productByDelivery = document.querySelectorAll('.delivery');
count = 0;

// Ham Menu
function pop() {
    document.getElementById("ham_nav").style.height = "200px"
}
function close_nav() {
    document.getElementById("ham_nav").style.height = "0px"
}

// For Filter
function expand_filter() {
    let filter_menu = document.getElementById('Filter').value;

    if (filter_menu == "brand") {
        document.getElementById("f_bb_name").style.display = 'flex'
    }
    else if (filter_menu == "Price") {
        document.getElementById("f_bp").style.display = 'flex'
    }
    else if(filter_menu == 'Star Rating'){
        document.getElementById("f_br").style.display = 'flex'
    }
    else {
        document.getElementById('f_bd').style.display = 'flex'
    }
}

function expand_sort(){
    let sort_menu = document.getElementById("sort").value;

    if((sort_menu == 'brand') || (sort_menu == 'price') || (sort_menu == 'rating')){
        document.getElementById("s_item").style.display = 'flex'
    }
}

// quantity counter for all
document.getElementById('qty').innerText = filter_productByName.length

// logic for filter by brand name
for (i=0; i<filter_btnBrand.length; i++){
    filter_btnBrand[i].addEventListener('click', (e) =>{
        e.preventDefault()
        document.getElementById("f_bb_name").style.display = 'none'

        const filter_by_brand = e.target.value;
        filter_productByName.forEach((brand_div)=>{
            if(brand_div.innerText.includes(filter_by_brand)){
                brand_div.style.display = 'flex';
                count+=1
                document.getElementById("qty").innerText = count;
            }
            else{
                brand_div.style.display = 'none';
            }
        })
    })
}

// logic for filter by price
function filter_price(a, b){
    document.getElementById("f_bp").style.display = 'none'
    filter_productByPrice.forEach((price_div) =>{
        let converted_price = parseInt(price_div.innerText)
         if((converted_price > a) && (converted_price <= b)){
            price_div.parentElement.parentElement.parentElement.style.display = 'flex'
            count+=1
            document.getElementById("qty").innerText = count;
        }
         else{
            price_div.parentElement.parentElement.parentElement.style.display = 'none'
        }
    })
}

// logic for Filter By Rating
function filter_rating(a){
    document.getElementById("f_br").style.display = 'none'
    filter_productByRating.forEach((rating_div) => {
        let converted_rating = parseInt(rating_div.innerText)
        if (a >= 3){
            if ((converted_rating == a) || (converted_rating > a)){
                rating_div.parentElement.parentElement.parentElement.parentElement.style.display = 'flex'
                count+=1
                document.getElementById("qty").innerText = count;
            }
            else{
                rating_div.parentElement.parentElement.parentElement.parentElement.style.display = 'none'
            }
        }
        else{
            if((converted_rating < a)){
                rating_div.parentElement.parentElement.parentElement.parentElement.style.display = 'flex'
                count+=1
                document.getElementById("qty").innerText = count;
            }
            else{
                rating_div.parentElement.parentElement.parentElement.parentElement.style.display = 'none'
            }
        }        
    })
}

// logic for filter product by delivery date
for(i=0; i<filter_btnDelivery.length; i++){
    filter_btnDelivery[i].addEventListener('click', (e) =>{
        e.preventDefault()
        document.getElementById('f_bd').style.display = 'none'

        const filter_product_by_deliver = e.target.value;
        filter_productByDelivery.forEach((delivery_div) =>{
            if(filter_product_by_deliver == delivery_div.innerText){
                delivery_div.parentElement.parentElement.parentElement.style.display = 'flex'
                count+=1
                document.getElementById("qty").innerText = count;
            }
            else{
                delivery_div.parentElement.parentElement.parentElement.style.display = 'none'
            }
        })
    })
}

// For Rating color
filter_productByRating.forEach((rating_box_color) =>{
    let x = parseFloat(rating_box_color.innerText)
    if(x > 4){
        rating_box_color.parentElement.style.backgroundColor = 'lightgreen'
    }
    else if(x < 2){
        rating_box_color.parentElement.style.backgroundColor = 'red'
        rating_box_color.parentElement.style.color = 'white'
    }
})

// Sorting function  
let sort_product_by_brand = document.getElementsByClassName('brand');
let sort_product_by_price = document.getElementsByClassName('price_tag');
let sort_product_by_rating = document.getElementsByClassName('random_rating')

for(i=0; i<sort_btn.length; i++){
    sort_btn[i].addEventListener('click', (e) =>{
        document.getElementById("s_item").style.display = 'none'
        let sort_menu = document.getElementById("sort").value;
        const sort_order = e.target.value

        if (sort_menu == 'brand'){
            let unsorted_brand = []
            for( j=0; j< sort_product_by_brand.length; j++){
                unsorted_brand.push(sort_product_by_brand[j].innerText)
            }
            sorted_array=unsorted_brand.sort();
            sort_by_brand(sorted_array, sort_order);
        }
        else if(sort_menu == 'price'){
            let unsorted_price = []
            for(j=0; j<sort_product_by_price.length; j++){
                unsorted_price.push(sort_product_by_price[j].innerText);
            }
            sorted_price = unsorted_price.sort();
            sort_by_price(sorted_price, sort_order);
        }
        else{
            let unsorted_rating = []
            for(j=0; j<sort_product_by_rating.length; j++){
                unsorted_rating.push(sort_product_by_rating[j].innerText);
            }
            sorted_rating = unsorted_rating.sort()
            sort_by_rating(sorted_rating, sort_order)
        }
    })
}

function sort_by_brand(x, y){
    let div_brand_array = []
    if(y == 'increasing'){
        for(i=0; i<x.length; i++){
            for(j=0; j<sort_product_by_brand.length; j++){
                if(x[i] == (sort_product_by_brand[j].innerText)){
                    div_brand_array.push(sort_product_by_brand[j])
                } 
            }
        }      
        for(i=0; i<div_brand_array.length; i++){
            let c = div_brand_array[i].parentElement.parentElement.parentElement.parentElement;
            let element = document.getElementById('catalog');
            element.appendChild(c);
        }      
    }
    else{
        let rev_x = x.reverse()
        for(i=0; i<rev_x.length; i++){
            for(j=0; j<sort_product_by_brand.length; j++){
                if(rev_x[i] == (sort_product_by_brand[j].innerText)){
                    div_brand_array.push(sort_product_by_brand[j])
                }
            }
        }
        for(i=0; i<div_brand_array.length; i++){
            let c = div_brand_array[i].parentElement.parentElement.parentElement.parentElement;
            let element = document.getElementById('catalog');
            element.appendChild(c);
        }
    }
}

function sort_by_price(x, y){
    let div_price_array = []
    if(y == 'increasing'){
        for(i=0; i<x.length; i++){
            for(j=0; j<sort_product_by_price.length; j++){
                if(x[i] == (sort_product_by_price[j].innerText)){
                    div_price_array.push(sort_product_by_price[j])
                }
            }
        }
        for(i=0; i<div_price_array.length; i++){
            let c = div_price_array[i].parentElement.parentElement.parentElement;
            let element = document.getElementById('catalog');
            element.appendChild(c);
        }
    }
    else{
        let rev_x = x.reverse()
        for(i=0; i<rev_x.length; i++){
            for(j=0; j<sort_product_by_price.length; j++){
                if(rev_x[i] == (sort_product_by_price[j].innerText)){
                    div_price_array.push(sort_product_by_price[j])
                }
            }
        }
        for(i=0; i<div_price_array.length; i++){
            let c = div_price_array[i].parentElement.parentElement.parentElement;
            let element = document.getElementById('catalog');
            element.appendChild(c);
        }
    }
}

function sort_by_rating(x, y){
    let div_rating_array = []
    if(y == 'increasing'){
        for(i=0; i<x.length; i++){
            for(j=0; j<sort_product_by_rating.length; j++){
                if(x[i] == (sort_product_by_rating[j].innerText)){
                    div_rating_array.push(sort_product_by_rating[j])
                }
            }
        }
        for(i=0; i<div_rating_array.length; i++){
            let c = div_rating_array[i].parentElement.parentElement.parentElement.parentElement;
            let element = document.getElementById('catalog');
            element.appendChild(c);
        }
    }
    else{
        let rev_x = x.reverse()
        for(i=0; i<rev_x.length; i++){
            for(j=0; j<sort_product_by_rating.length; j++){
                if(rev_x[i] == (sort_product_by_rating[j].innerText)){
                    div_rating_array.push(sort_product_by_rating[j])
                }
            }
        }
        for(i=0; i<div_rating_array.length; i++){
            let c = div_rating_array[i].parentElement.parentElement.parentElement.parentElement;
            let element = document.getElementById('catalog');
            element.appendChild(c);
        }
    }
}