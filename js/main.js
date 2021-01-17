const app = Vue.createApp({
    data(){
        return{
            cart:[],
            premium: true
        }
    },
    methods:{
        updateCart(id){
            this.cart.push(id)
            console.log(this.cart)
        },
        removeCart(id){
            let index = this.cart.indexOf(id)
            console.log(id)
            if(this.cart.length !=0 && 
                this.cart.indexOf(id) != -1){
                this.cart.splice(index, 1)
                console.log(this.cart)
            }
        }
        
    },
})
