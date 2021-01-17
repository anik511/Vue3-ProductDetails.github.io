app.component('review-from', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <p class="error" v-if="errors.length">
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </p>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        <input class="button" type="submit" value="Submit">  
    </form>`,
    data(){
        return{
            name: null,
            review: null,
            rating: null,
            errors: []
        }
    },
    methods:{
        onSubmit(){
          this.errors = []
          if(this.name && this.review && this.rating) {
            let productReview = {
              name: this.name,
              review: this.review,
              rating: this.rating,
            }
            console.log(productReview)
            this.$emit('sendReview', productReview)
            this.name = null
            this.review = null
            this.rating = null
          } else {
            if(!this.name) this.errors.push("Name required.")
            if(!this.review) this.errors.push("Review required.")
            if(!this.rating) this.errors.push("Rating required.")
          }
        }
      }
})