app.component('cart-list', {
    template:
    /*html*/
    `
    <div class="mr-new">

      <header>
        <p>Cart List</p>
      </header>
      <section id="user-goal">
        <p class="red" v-if="(cartList.length == 0)">
          No item has been added yet
        </p>
        <ul v-else>
          <li v-for="(cart, index) in cartList" :key="index" :style="{backgroundColor: cart.color}">
            {{cart.varientname}}
          </li>
        </ul>
      </section>
    </div>
`,
    props:{
        cartList: {
        type: Array,
        }
    },
    data(){
        return{

        }
    },
    methods:{
        // getCart(){

        // }
    
    }
  })