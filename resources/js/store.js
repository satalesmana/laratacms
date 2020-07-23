import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        loading: false,
        testimonials:[],
    },
    mutations: {
        getTestimonials(state) {
            axios.get('/testimoni').then(r => {
                for(let x = 0; x<r.data.length; x++){
                    let item ='<div class="testimonial-item">'
                        item +='<img src="'+r.data[x].foto+'" class="testimonial-img" alt="">'
                        item +='<h3>'+r.data[x].name+'</h3>'
                        item +='<h4>'+r.data[x].jabatan+'</h4>'
                        item +='<p>'+r.data[x].testimonials+'</p>'
                        item +='</div>'
                    state.testimonials.push(item);
                }
            })
        },
    }
})
