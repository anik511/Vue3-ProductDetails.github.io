app.component('product-display',{
  props:{
    cart:{
      type: Array,
    },
    premium: {
      type: Boolean,
      required: true
    }
  },
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
            <button v-if="cart.length !=0 && cart.indexOf(varients[selector].varientId) != -1" 
            @click="removeCart"
            class="button-remove">Remove Cart</button>
          </div>
        </div>
        <review-tab></review-tab>
        
      </div>`,


  data(){
    return{
        product: 'Socks',
        color: 'red',
        details: ['50% cootton', '30% wool', '20% polyester'],
        varients:[
            {varientId:20, color: 'Green',variantImage: './img/socks_green.jpg',
            stock: 3},
            {varientId:10, color: 'Blue', variantImage: './img/socks_blue.jpg',
            stock:2}
        ],
        selector: 0,
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
            this.$emit('add-to-cart', this.varients[this.selector].varientId)
            console.log(this.varients[this.selector].varientId)
            this.varients[this.selector].stock -= 1
        }
    },
    removeCart(){
        if(this.cart.length !=0 && 
            this.cart.indexOf(this.varients[this.selector].varientId) != -1){
              this.$emit('remove-to-cart', this.varients[this.selector].varientId)
            this.varients[this.selector].stock += 1
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