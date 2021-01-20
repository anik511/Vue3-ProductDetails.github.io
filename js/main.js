const app = Vue.createApp({
    data(){
        return{
            cart:[],
            premium: true
        }
    },
    methods:{
        updateCart(paylod){
            this.cart.push(paylod)
            console.log(paylod.varientId)
        },
        removeCart(id){
            let index = this.cart.findIndex(x => x.varientId === id)
            console.log("index:",index)
            if(this.cart.length !=0 && index != -1){
                this.cart.splice(index, 1)
                console.log(this.cart)
                console.log("Finished");
            }
        }
        
    },
})
