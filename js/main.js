const bar = document.querySelector('.fa-bars')
const navbar = document.querySelector('.navbarList')
const menus = document.querySelector('.navbarList')
const bars = document.querySelector('.fa-bars')

bar.addEventListener('click',function(){
    bar.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

menus.addEventListener('click', function(){
  navbar.classList.remove('active')
  bars.classList.remove('fa-times')
})


let navList = document.querySelector('.navbarList')
let navListA = document.querySelectorAll('.navbarList a')

navList.addEventListener('click',function(e){

  navListA.forEach(function(a){
    a.className = "menus";
  })

  if(e.target.classList.contains('menus')){
    e.target.classList.add('putih')
  }

})

const dark = document.querySelector('.fa-moon')
const body = document.querySelector('body')

dark.addEventListener('click', function(e){
     e.preventDefault()
     dark.classList.toggle('fa-sun')
     body.classList.toggle('dark')
})



window.addEventListener('scroll', function(){
  const popular = document.querySelector('.popular')
  const header = document.querySelector('header')
  const navbarList = document.querySelector('.navbarList a')
  const burger = document.querySelector('.fa-burger')
  const bulan = document.querySelector('.fa-moon')
  const bars = document.querySelector('.fa-bars')
  const tinggi = 150;
  const jarakElement = popular.getBoundingClientRect().top
  const top = this.innerHeight

  if(jarakElement < top - tinggi){
    header.classList.add('active')
    burger.style.color ='#ffff'
    bars.style.color ='rgb(244, 123, 24)'
    bulan.style.backgroundColor ='#eee'
    bars.style.backgroundColor ='#eee'
    bulan.style.color ='rgb(244, 123, 24)'
  } else {
    header.classList.remove('active')
    burger.style.color= 'rgb(244, 123, 24)'
    bars.style.backgroundColor= 'rgb(244, 123, 24)'
    bulan.style.color ='#000'
    bars.style.color ='#000'
    bulan.style.backgroundColor ='rgb(244, 123, 24)'
  }
})

menu = document.querySelector('.menu')
food = document.querySelector('.food')
drink = document.querySelector('.drink')
dessert = document.querySelector('.dessert')
title = document.querySelector('.title h2')
row = document.querySelector('.fullMenu .showAll .row')

menu.addEventListener('click', function(){
    const menus = menu.innerHTML;
    title.innerHTML = menus;
    food.classList.remove('showAktif')
    drink.classList.remove('showAktif')
    dessert.classList.remove('showAktif')
    menu.classList.add('showAktif')
    row.innerHTML = ` <div class="row">
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/burger.jpg">
        </div>
        <div class="text">
          <h1>Burger</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/chicken.jpg">
        </div>
        <div class="text">
          <h1>Fried Chicken</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/pizza_lain.jpg">
        </div>
        <div class="text">
          <h1>Pizza</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/potatos.jpg">
        </div>
        <div class="text">
          <h1>Fried Potatos</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/sald.jpg">
        </div>
        <div class="text">
          <h1>Fresh Sald</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/spageti.jpg">
        </div>
        <div class="text">
          <h1>Spagetti</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>

    <!-- minuman started -->
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/bluberis.jpg">
        </div>
        <div class="text">
          <h1>Juice Bluberis</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/estea.jpg">
        </div>
        <div class="text">
          <h1>Es Tea</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/manggo.jpg">
        </div>
        <div class="text">
          <h1>Juice Manggo</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/watermellon.jpg">
        </div>
        <div class="text">
          <h1>Juice Watermellon</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/orange.jpg">
        </div>
        <div class="text">
          <h1>Juice Orange</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/strawberies.jpg">
        </div>
        <div class="text">
          <h1>Juice strawberies</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>
    <!-- minuman finished-->

    <!-- dessert started -->
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/belgium_waffles.jpg">
        </div>
        <div class="text">
          <h1>belgium Waffles</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/cupcake_pork.jpg">
        </div>
        <div class="text">
          <h1>Cupcake Pork</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/tiramisu.jpg">
        </div>
        <div class="text">
          <h1>Tiramisu Cake</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>
    
    <!-- dessert finished-->
   </div>`
})
food.addEventListener('click', function(){
    const foods = food.innerHTML;
    title.innerHTML = foods;
    food.classList.add('showAktif')
    drink.classList.remove('showAktif')
    dessert.classList.remove('showAktif')
    menu.classList.remove('showAktif')
    row.innerHTML = ` <div class="row">
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/burger.jpg">
        </div>
        <div class="text">
          <h1>Burger</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/chicken.jpg">
        </div>
        <div class="text">
          <h1>Fried Chicken</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/pizza_lain.jpg">
        </div>
        <div class="text">
          <h1>Pizza</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/potatos.jpg">
        </div>
        <div class="text">
          <h1>Fried Potatos</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/sald.jpg">
        </div>
        <div class="text">
          <h1>Fresh Sald</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card">
        <div class="gambar">
          <img src="images/spageti.jpg">
        </div>
        <div class="text">
          <h1>Spagetti</h1>
        <div class="star">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
        <div class="under">
            <div class="dolar">
                <i class="fa-solid fa-dollar-sign"></i> 18.00
            </div>
            <div class="btnShow">
              <a href="">Add To Card</a>
            </div>
        </div>
        </div>
      </div>
    </div>
   </div>`
})
drink.addEventListener('click', function(){
    const drinks = drink.innerHTML;
    title.innerHTML = drinks;
    food.classList.remove('showAktif')
    drink.classList.add('showAktif')
    dessert.classList.remove('showAktif')
    menu.classList.remove('showAktif')
    row.innerHTML = ` <div class="row">
    <div class="col">
    <div class="card">
      <div class="gambar">
        <img src="images/bluberis.jpg">
      </div>
      <div class="text">
        <h1>Juice Bluberis</h1>
      <div class="star">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
      <div class="under">
          <div class="dolar">
              <i class="fa-solid fa-dollar-sign"></i> 18.00
          </div>
          <div class="btnShow">
            <a href="">Add To Card</a>
          </div>
      </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="gambar">
        <img src="images/estea.jpg">
      </div>
      <div class="text">
        <h1>Es Tea</h1>
      <div class="star">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
      <div class="under">
          <div class="dolar">
              <i class="fa-solid fa-dollar-sign"></i> 18.00
          </div>
          <div class="btnShow">
            <a href="">Add To Card</a>
          </div>
      </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="gambar">
        <img src="images/manggo.jpg">
      </div>
      <div class="text">
        <h1>Juice Manggo</h1>
      <div class="star">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
      <div class="under">
          <div class="dolar">
              <i class="fa-solid fa-dollar-sign"></i> 18.00
          </div>
          <div class="btnShow">
            <a href="">Add To Card</a>
          </div>
      </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="gambar">
        <img src="images/watermellon.jpg">
      </div>
      <div class="text">
        <h1>Juice Watermellon</h1>
      <div class="star">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
      <div class="under">
          <div class="dolar">
              <i class="fa-solid fa-dollar-sign"></i> 18.00
          </div>
          <div class="btnShow">
            <a href="">Add To Card</a>
          </div>
      </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="gambar">
        <img src="images/orange.jpg">
      </div>
      <div class="text">
        <h1>Juice Orange</h1>
      <div class="star">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
      <div class="under">
          <div class="dolar">
              <i class="fa-solid fa-dollar-sign"></i> 18.00
          </div>
          <div class="btnShow">
            <a href="">Add To Card</a>
          </div>
      </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <div class="gambar">
        <img src="images/strawberies.jpg">
      </div>
      <div class="text">
        <h1>Juice strawberies</h1>
      <div class="star">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half-stroke"></i>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
      <div class="under">
          <div class="dolar">
              <i class="fa-solid fa-dollar-sign"></i> 18.00
          </div>
          <div class="btnShow">
            <a href="">Add To Card</a>
          </div>
      </div>
      </div>
      </div>
    </div>
  </div>`
})
dessert.addEventListener('click', function(){
    const desserts = dessert.innerHTML;
    title.innerHTML = desserts
    food.classList.remove('showAktif')
    drink.classList.remove('showAktif')
    dessert.classList.add('showAktif')
    menu.classList.remove('showAktif')
    row.innerHTML = `<div class="row">
    <div class="col">
        <div class="card">
          <div class="gambar">
            <img src="images/belgium_waffles.jpg">
          </div>
          <div class="text">
            <h1>belgium Waffles</h1>
          <div class="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
          <div class="under">
              <div class="dolar">
                  <i class="fa-solid fa-dollar-sign"></i> 18.00
              </div>
              <div class="btnShow">
                <a href="">Add To Card</a>
              </div>
          </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <div class="gambar">
            <img src="images/cupcake_pork.jpg">
          </div>
          <div class="text">
            <h1>Cupcake Pork</h1>
          <div class="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
          <div class="under">
              <div class="dolar">
                  <i class="fa-solid fa-dollar-sign"></i> 18.00
              </div>
              <div class="btnShow">
                <a href="">Add To Card</a>
              </div>
          </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <div class="gambar">
            <img src="images/tiramisu.jpg">
          </div>
          <div class="text">
            <h1>Tiramisu Cake</h1>
          <div class="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus praesentium, odit officiis exercitationem ipsam, aliquam dolorum ad eius fuga molestias sed cum ab saepe assumenda.</p>
          <div class="under">
              <div class="dolar">
                  <i class="fa-solid fa-dollar-sign"></i> 18.00
              </div>
              <div class="btnShow">
                <a href="">Add To Card</a>
              </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    `
})