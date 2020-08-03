<template>
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
</template>

<script>
export default {
    data(){
        return{
            loading:false,
            formErrors: {},
            contact_us:{
                name:'',
                email:'',
                subject:'',
                messages:'',
            },
        }
    },
    methods:{
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
    }
}
</script>