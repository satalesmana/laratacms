<template>
    <div>
        <header id="header" class="fixed-top">
            <div class="container">
                <div class="logo float-left">
                    <a href="#intro" class="scrollto"><img src="images/logo.png" alt="" class="img-fluid"></a>
                </div>

                <nav class="main-nav float-right d-none d-lg-block">
                    <ul>
                        <li  :class="{ active : active_el == 1 }"><a href="#" v-scroll-to="'#intro'" @click="activate(1)" >Home</a></li>
                        <li  :class="{ active : active_el == 2 }"><a href="#" v-scroll-to="'#about'" @click="activate(2)" >Features</a></li>
                        <li  :class="{ active : active_el == 3 }"><a href="#" v-scroll-to="'#testimonials'" @click="activate(3)" >Testimonials</a></li>            
                        <li  :class="{ active : active_el == 4 }"><a href="#" v-scroll-to="'#contact'" @click="activate(4)" >Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <main id="main">
            <!-- Component For First Area -->
            <component :is="content.area_one" ></component>

            <!-- Component For Second Area -->
            <component :is="content.area_two" ></component>

            <!-- Component For Third Area -->
            <component :is="content.area_thre" ></component>

            <!-- Component For Fourth Area -->
            <component :is="content.area_four" ></component>
        </main>

        <footer id="footer">
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 footer-info">
                            <h3>Legal Complience System</h3>
                            <h4>Benefit Using LCS</h4>
                            <p>- Centralize data.</p>
                            <p>- Easy to manage / Create Contract.</p>
                            <p>- Reduce cost up to 50% by reducing Space, time, tools and effort.</p>
                            <p>- Reporting and Sharing document.</p>
                        </div>

                        <div class="col-lg-2 col-md-6 footer-links">
                            <h4>Usefull Links</h4>
                            <ul>
                            <li><a href="#" v-scroll-to="'#intro'" @click="activate(1)">Home</a></li>
                            <li><a href="#" v-scroll-to="'#about'" @click="activate(2)" >Features</a></li>
                            <li><a href="#" v-scroll-to="'#testimonials'" @click="activate(3)" >Testimonials</a></li>
                            <li><a href="#" v-scroll-to="'#contact'" @click="activate(4)" >Contact Us</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-contact">
                            <h4>Contact Us</h4>
                            <p>
                                Graha Mustika Ratu 4th Floor <br>
                                Jl. Jend. Gatot Subroto No.Kav 74-75 Menteng Dalam Tebet Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12870 Indonesia <br>
                            <strong>Phone:</strong> 021-8306647<br>
                            <strong>Email:</strong> info@lamsolusi.com<br>
                            </p>
                        </div>

                        <div class="col-lg-3 col-md-6 footer-newsletter">
                            <h4>Our Social Links</h4>
                            <div class="social-links">
                                <a href="https://www.facebook.com/lamsolusi/" target="_blank" class="facebook"><i class="fa fa-facebook"></i></a>
                                <a href="https://www.instagram.com/lamsolusi/" target="_blank" class="instagram"><i class="fa fa-instagram"></i></a>
                                <a href="https://id.linkedin.com/company/lamsolusi/" target="_blank" class="linkedin"><i class="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="copyright">
                    &copy; Copyright <strong>Lamjaya Global Solusi</strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    </div>
</template>


<script>
import NewbizHome from './component/newbiz/IntroComponent'
import NewbizFitur from './component/newbiz/FiturComponent'
import NewbizTestimoni from './component/newbiz/TestimoniComponent'
import NewbizContact from './component/newbiz/ContactComponent'

import EmptyComponent from './EmptyComponent'
export default {
    components:{
        NewbizHome,
        NewbizFitur,
        NewbizTestimoni,
        NewbizContact
    },
    data() {
        return {
            active_el:1,
            content:{
                area_one:EmptyComponent,
                area_two:EmptyComponent,
                area_thre:EmptyComponent,
                area_four:EmptyComponent
            }
        };
    },
    methods:{
        activate:function(el){
            this.active_el = el;
        },
        loadContent(){
            axios.get(BASE_URL+'/component')
            .then(r=>{
                for(let i = 0; i<r.data.length; i++){
                    if(r.data[i].themes=='newbiz' &&  r.data[i].location== '1' ){
                        let apc = this.newbizContent(r.data[i].component)
                        if(apc)
                            this.content.area_one = apc
                    }

                    if(r.data[i].themes=='newbiz' &&  r.data[i].location== '2' ){
                        let apc = this.newbizContent(r.data[i].component)
                        if(apc)
                            this.content.area_two = apc
                    }

                    if(r.data[i].themes=='newbiz' &&  r.data[i].location== '3' ){
                        let apc = this.newbizContent(r.data[i].component)
                        if(apc)
                            this.content.area_thre = apc
                    }

                    if(r.data[i].themes=='newbiz' &&  r.data[i].location== '4' ){
                        let apc = this.newbizContent(r.data[i].component)
                        if(apc)
                            this.content.area_four = apc
                    }

                }
            })
        },
        newbizContent:function(component){
            if(component=='intro')
                return NewbizHome
            else if(component == 'fitur')
                return NewbizFitur
            else if(component == 'testimoni')
                return NewbizTestimoni
            else if(component == 'contact')
                return NewbizContact
            else
                return false
        }
    },
    mounted(){
        this.loadContent()
    }
};
</script>

<style scoped>
    @import '../../templates/newbiz/lib/bootstrap/css/bootstrap.min.css';
    @import '../../templates/newbiz/lib/ionicons/css/ionicons.min.css';
    @import '../../templates/newbiz/lib/font-awesome/css/font-awesome.min.css';
    @import '../../templates/newbiz/css/style.css';
    @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700");
</style>