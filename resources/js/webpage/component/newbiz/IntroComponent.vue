<template>
    <section id="intro" class="clearfix">
        <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true">
            <div>
                <div class="container">
                    <div class="intro-img">
                        <img src="images/intro-img.svg" alt="" class="img-fluid">
                    </div>

                    <div class="intro-info">
                        <h2>LCS <span>Application</span></h2>
                        <p>
                            The right solution for managing business documents with the convenience of features and report cards. Together with LCS, create a better business document management system.
                        </p>
                        <div>
                            <a href="javascript:void(0)" class="btn-get-started scrollto" v-scroll-to="'#contact'" @click="activate(4)" >Request Demo</a>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class="container">
                    <div class="intro-img">
                        <img src="images/img-secretary.png" alt="" class="img-fluid">
                    </div>
                    <div class="intro-info">
                        <h2>Legal Compliance <br><span>Corporate Secretary System</span></h2>
                        <div>
                            <a href="javascript:void(0)" class="btn-get-started scrollto" v-scroll-to="'#contact'" @click="activate(4)" >Request Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </VueSlickCarousel>
     </section>
</template>

<script>
    import VueSlickCarousel from 'vue-slick-carousel'
    import 'vue-slick-carousel/dist/vue-slick-carousel.css'
    // optional style for arrows & dots
    import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

    export default {
        name: 'MyComponent',
        components: { VueSlickCarousel },
    }
</script>

<style scoped>
    p {
        color: white;
    }
</style>