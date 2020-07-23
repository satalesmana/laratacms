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
                        <li  :class="{ active : active_el == 2 }"><a href="#" v-scroll-to="'#about'" @click="activate(2)" >Fitur</a></li>
                        <li  :class="{ active : active_el == 3 }"><a href="#" v-scroll-to="'#testimonials'" @click="activate(3)" >Testinomi</a></li>            
                        <li  :class="{ active : active_el == 4 }"><a href="#" v-scroll-to="'#contact'" @click="activate(4)" >Contact Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <section id="intro" class="clearfix">
            <div class="container">
                <div class="intro-img">
                    <img src="images/intro-img.svg" alt="" class="img-fluid">
                </div>

                <div class="intro-info">
                    <h2>Legal Complience<br><span>System</span></h2>
                    <div>
                        <a href="javascript:void(0)" class="btn-get-started scrollto" v-scroll-to="'#contact'" @click="activate(4)" >Request Demo</a>
                    </div>
                </div>
            </div>
        </section>

        <main id="main">
            <section id="about"><br><br><br><br>
                <div class="container">
                    <header class="section-header">
                        <h3>Application Features</h3>
                        <p>Find all the features you need to get up and running fast.</p>
                    </header>

                    <div class="row about-container">
                        <div class="col-lg-6 content order-lg-1 order-2">
                            <!-- <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p> -->

                            <div class="icon-box wow fadeInUp">
                                <div class="icon"><i class="fa fa-shopping-bag"></i></div>
                                <h4 class="title"><a href="">Legal</a></h4>
                                <p class="description">
                                    Aggrement Review, Scanned Agreement Request, L&C Advice, Product Review, Corporeate Document, Agreement,
                                    Partner's Corporate Document, Agreement Template
                                </p>
                            </div>
                            
                            <div class="icon-box wow fadeInUp" data-wow-delay="0.2s">
                                <div class="icon"><i class="fa fa-photo"></i></div>
                                <h4 class="title"><a href="">Complience</a></h4>
                                <p class="description">
                                    Annual Attestation, COC Anual Declaration COI Adhoc Declaration, Declaration for bidding, Event Approval,
                                    Gift/Invitation Acceptance, Gift/Intitation Granting, Vendor Integrity Screening,
                                    Corporate Document Request, Anti-Money Laundring and Economic Sanctions, Gap Analysis (Regulatory Complience)
                                </p>
                            </div>

                            <div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
                                <div class="icon"><i class="fa fa-bar-chart"></i></div>
                                <h4 class="title"><a href="">Corporate Secretary</a></h4>
                                <p class="description">
                                    Exporting Expatriate Working Permit, Fit & Proper Test Request, New Experiate Working Permit,
                                    Power of Attorney Request, Govermment Correspondence Request, Corporate Document (Document Archive),
                                    Regulatory Reporting (Regulatory Complience).
                                </p>
                            </div>
                        </div>

                        <div class="col-lg-6 background order-lg-2 order-1 wow fadeInUp">
                            <img src="images/about-img.svg" class="img-fluid" alt="">
                        </div>
                    </div>
                </div>
            </section>

            <section id="testimonials" class="section-bg"><br><br>
                <div class="container">

                    <header class="section-header">
                        <h3>Testimonials</h3>
                    </header>

                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <carousel :data="$store.state.testimonials"></carousel>
                        </div>
                    </div>
                </div><br><br><br><br>
            </section>

            <section id="contact"><br><br><br>
                <div class="container-fluid">

                    <div class="section-header">
                        <h3>Contact Us</h3>
                        <p>If you need our services or initial discussion, do contact us </p>
                    </div>

                    <div class="row wow fadeInUp">

                    <div class="col-lg-6">
                        <div class="map mb-4 mb-lg-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1643424773238!2d106.84004611409846!3d-6.242060295481669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3bf4d9ba483%3A0xd7437dddb6523c21!2sPT+Lamjaya+Global+Solusi!5e0!3m2!1sen!2sid!4v1542865080420" frameborder="0" style="border:0; width: 100%; height: 412px;" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-md-7 info">
                                <i class="ion-ios-location-outline"></i>
                                <p>Graha Mustika Ratu 4th Floor Jl. Jend. Gatot Subroto No.Kav 74-75 Menteng Dalam Tebet Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12870 Indonesia</p>
                            </div>
                            <div class="col-md-5 info">
                                <i class="ion-ios-email-outline"></i>
                                <p>info@lamsolusi.com</p>

                                <i class="ion-ios-telephone-outline"></i>
                                <p>021-8306647</p>
                            </div>
                        </div>

                        <div class="form">
                            <el-form label-width="150px" label-position="right">

                                <el-form-item label="Name" :class="formErrors.name ? 'is-error' : ''">
                                    <el-input type="text" placeholder="Name" v-model="contact_us.name"></el-input>
                                    <div class="el-form-item__error" v-if="formErrors.name">{{formErrors.name[0]}}</div>
                                </el-form-item>

                                <el-form-item label="Email" :class="formErrors.email ? 'is-error' : ''">
                                    <el-input type="text" placeholder="Email" v-model="contact_us.email"></el-input>
                                    <div class="el-form-item__error" v-if="formErrors.email">{{formErrors.email[0]}}</div>
                                </el-form-item>

                                <el-form-item label="Subject" :class="formErrors.subject ? 'is-error' : ''">
                                    <el-input type="text" placeholder="Subject" v-model="contact_us.subject"></el-input>
                                    <div class="el-form-item__error" v-if="formErrors.subject">{{formErrors.subject[0]}}</div>
                                </el-form-item>

                                <el-form-item label="Messages" :class="formErrors.messages ? 'is-error' : ''">
                                    <el-input type="textarea" :rows="2" placeholder="Messages" v-model="contact_us.messages"></el-input>
                                    <div class="el-form-item__error" v-if="formErrors.messages">{{formErrors.messages[0]}}</div>
                                </el-form-item>

                                <div class="text-center">
                                    <el-button
                                        type="primary"
                                        @click="onSendMessages"
                                        v-loading.fullscreen.lock="loading">
                                            Send Message
                                    </el-button>
                                </div>
                            </el-form>
                        </div>
                    </div>

                    </div>

                </div>
            </section>
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
                            <h4>Useful Links</h4>
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
export default {
    data() {
        return {
            loading:false,
            formErrors: {},
            contact_us:{
                name:'',
                email:'',
                subject:'',
                messages:'',
            },
            active_el:1
        };
    },
    methods:{
        activate:function(el){
            this.active_el = el;
        },
        onSendMessages(){
            this.loading = true;
            axios
            .post("send_messages", this.contact_us).then(r => {
                this.$message({
                    message: r.data.message,
                    type: "success",
                    showClose: true
                });
                this.formErrors={}
                this.contact_us.name=''
                this.contact_us.email=''
                this.contact_us.subject=''
                this.contact_us.messages=''

            }).catch(e => {
                if (e.response.status == 422) {
                    this.formErrors = e.response.data.errors;
                }

                if (e.response.status == 500) {
                    this.formErrors = {};
                    this.$message({
                        message: e.response.data.message,
                        type: "error",
                        showClose: true
                    });
                }
            }).finally(() => {
                this.loading = false;
            });
        }
    },
    mounted: function() {
        this.$store.commit("getTestimonials");

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