app.component('product-display',{
  
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img :src="image" alt="socks">
          </div>
          <div class="product-info">
            <h1>{{ product }}</h1>
            <p v-if="inStock" class="stockColor">In stock</p>
            <p v-else class="stockColor" :style="{color: color}" :class="{outOfStock:!inStock}">
            Out of stock (Check other color)</p>
            <p>{{shipping}}</p>
            <ul>
              <li v-for="detail in details">{{detail}}</li>
            </ul>
            <div class="color-circle" @mouseover="updateProduct(index)" 
            :style="{backgroundColor: varient.color}"
            v-for="(varient, index) in varients" :key="index">
            </div>
            <button @click="addToCart" :disable="!inStock" 
            class="button"
            :class="{'disabledButton': !inStock}">Add to Cart</button>
            <button v-if="cart.length !=0 && cart.findIndex(x => x.varientId === varients[selector].varientId) != -1" 
            @click="removeCart"
            class="button-remove">Remove Cart</button>
          </div>
        </div>
        <cart-list :cartList="listofcart"></cart-list>
        <review-tab></review-tab>
        
      </div>`,

  props:{
    cart:{
      type: Array,
    },
    premium: {
      type: Boolean,
      required: true
    }
  },
  data(){
    return{
        product: 'Socks',
        color: 'red',
        details: ['50% cootton', '30% wool', '20% polyester'],
        varients:[
            {varientId:20, varientname:'Berilo', color: '#3aa06b',variantImage: './img/socks_green.jpg',
            stock: 3},
            {varientId:10, varientname:'Bluebell', color: '#35435e', variantImage: './img/socks_blue.jpg',
            stock:2}
        ],
        selector: 0,
        listofcart: this.cart,
    }
},
methods:{
    updateProduct(index){
        this.selector = index
        console.log(index)
    },
    addToCart(){
        if(this.varients[this.selector].stock!=0){
            // this.cart.push(this.varients[this.selector].varientId)
            this.$emit('add-to-cart', this.varients[this.selector])
            console.log(this.varients[this.selector].varientId)
            this.varients[this.selector].stock -= 1
        }
    },
    removeCart(){
        if(this.cart.length !=0 && 
            this.cart.findIndex(x => x.varientId === this.varients[this.selector].varientId) != -1){
              this.$emit('remove-to-cart', this.varients[this.selector].varientId)
            this.varients[this.selector].stock += 1
            console.log("Finished");
        }
    },

},
computed:{
    image(){
        return this.varients[this.selector].variantImage
    },
    inStock(){
        return this.varients[this.selector].stock
    },
    shipping(){
      if(this.premium){
        return 'Free For you'
      }
      return '2.99$'
    }
}
})