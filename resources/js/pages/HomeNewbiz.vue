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
                        <a href="#about" class="btn-get-started scrollto">Request Demo</a>
                    </div>
                </div>
            </div>
        </section>

        <main id="main">
            <section id="about"><br><br><br><br>
                <div class="container">
                    <header class="section-header">
                        <h3>Application Features</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </header>

                    <div class="row about-container">
                        <div class="col-lg-6 content order-lg-1 order-2">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>

                            <div class="icon-box wow fadeInUp">
                                <div class="icon"><i class="fa fa-shopping-bag"></i></div>
                                <h4 class="title"><a href="">Legal</a></h4>
                                <p class="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                            </div>
                            
                            <div class="icon-box wow fadeInUp" data-wow-delay="0.2s">
                                <div class="icon"><i class="fa fa-photo"></i></div>
                                <h4 class="title"><a href="">Complience</a></h4>
                                <p class="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>

                            <div class="icon-box wow fadeInUp" data-wow-delay="0.4s">
                                <div class="icon"><i class="fa fa-bar-chart"></i></div>
                                <h4 class="title"><a href="">Corporate Secretary</a></h4>
                                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
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
                            <carousel :data="testimoni"></carousel>
                            
                        </div>
                    </div>
                </div><br><br><br><br>
            </section>

            <section id="contact"><br><br><br>
                <div class="container-fluid">

                    <div class="section-header">
                    <h3>Contact Us</h3>
                    </div>

                    <div class="row wow fadeInUp">

                    <div class="col-lg-6">
                        <div class="map mb-4 mb-lg-0">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 312px;" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="row">
                        <div class="col-md-5 info">
                            <i class="ion-ios-location-outline"></i>
                            <p>A108 Adam Street, NY 535022</p>
                        </div>
                        <div class="col-md-4 info">
                            <i class="ion-ios-email-outline"></i>
                            <p>info@example.com</p>
                        </div>
                        <div class="col-md-3 info">
                            <i class="ion-ios-telephone-outline"></i>
                            <p>+1 5589 55488 55</p>
                        </div>
                        </div>

                        <div class="form">
                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                        <div id="errormessage"></div>
                        <form action="" method="post" role="form" class="contactForm">
                            <div class="form-row">
                            <div class="form-group col-lg-6">
                                <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div class="validation"></div>
                            </div>
                            <div class="form-group col-lg-6">
                                <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div class="validation"></div>
                            </div>
                            </div>
                            <div class="form-group">
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div class="validation"></div>
                            </div>
                            <div class="form-group">
                            <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                            <div class="validation"></div>
                            </div>
                            <div class="text-center"><button type="submit" title="Send Message">Send Message</button></div>
                        </form>
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
                    <h3>NewBiz</h3>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
                </div>

                <div class="col-lg-2 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Terms of service</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 footer-contact">
                    <h4>Contact Us</h4>
                    <p>
                    A108 Adam Street <br>
                    New York, NY 535022<br>
                    United States <br>
                    <strong>Phone:</strong> +1 5589 55488 55<br>
                    <strong>Email:</strong> info@example.com<br>
                    </p>

                    <div class="social-links">
                    <a href="#" class="twitter"><i class="fa fa-twitter"></i></a>
                    <a href="#" class="facebook"><i class="fa fa-facebook"></i></a>
                    <a href="#" class="instagram"><i class="fa fa-instagram"></i></a>
                    <a href="#" class="google-plus"><i class="fa fa-google-plus"></i></a>
                    <a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a>
                    </div>

                </div>

                <div class="col-lg-3 col-md-6 footer-newsletter">
                    <h4>Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna veniam enim veniam illum dolore legam minim quorum culpa amet magna export quem marada parida nodela caramase seza.</p>
                    <form action="" method="post">
                    <input type="email" name="email"><input type="submit"  value="Subscribe">
                    </form>
                </div>

                </div>
            </div>
            </div>
            <div class="container">
            <div class="copyright">
                &copy; Copyright <strong>NewBiz</strong>. All Rights Reserved
            </div>
            <div class="credits">
                <!--
                All the links in the footer should remain intact.
                You can delete the links only if you purchased the pro version.
                Licensing information: https://bootstrapmade.com/license/
                Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=NewBiz
                -->
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
            </div>
        </footer>
        
    </div>
</template>


<script>
export default {
    data() {
        return {
            active_el:1,
            testimoni: [
                '<div class="testimonial-item"><img src="img/testimonial-1.jpg" class="testimonial-img" alt=""><h3>Saul Goodman</h3><h4>Ceo &amp; Founder</h4><p>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</p></div>',
                '<div class="testimonial-item"><img src="img/testimonial-1.jpg" class="testimonial-img" alt=""><h3>Saul Goodman</h3><h4>Ceo &amp; Founder</h4><p>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</p></div>',
                '<div class="testimonial-item"><img src="img/testimonial-1.jpg" class="testimonial-img" alt=""><h3>Saul Goodman</h3><h4>Ceo &amp; Founder</h4><p>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</p></div>',
                '<div class="testimonial-item"><img src="img/testimonial-1.jpg" class="testimonial-img" alt=""><h3>Saul Goodman</h3><h4>Ceo &amp; Founder</h4><p>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</p></div>',
            ],
        };
    },
    methods:{
        activate:function(el){
            this.active_el = el;
        }
    }
};
</script>

<style scoped>
    @import '../../templates/newbiz/lib/bootstrap/css/bootstrap.min.css';
    @import '../../templates/newbiz/lib/font-awesome/css/font-awesome.min.css';
    @import '../../templates/newbiz/css/style.css';
    @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700");
</style>