app.component('review-tab', {
    
    template:
    /*html*/
    `
    <div>
        <span class="tab" :class="{activeTab: selectedTab === tab}"
        v-for="(tab, index) in tabs" :key="index"
        @click="selectedTab = tab">{{tab}}</span>
        <div class="review" v-show="selectedTab === 'Reviews'">
            <p v-if="!reviews.length">No Review yet.</p>
            <ul v-else>
                <li v-for="(review, index) in reviews" :key="index">
                    {{ review.name }}: gave this {{ review.rating }} stars
                    <br/>
                    "{{ review.review }}"
                    <br/>
                </li>
            </ul>
        </div>
        <review-from v-show="selectedTab === 'Make a Review'" @sendReview="getReview"></review-from>
    </div>`,

    data(){
        return{
            tabs:['Reviews', 'Make a Review'],
            selectedTab: 'Reviews',
            reviews:[]
        }
    },
    methods:{
        getReview(review){
            this.reviews.push(review)
          }
    }
  })