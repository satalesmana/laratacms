<template>
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
</template>

<script>
export default {
    mounted: function() {
        this.$store.commit("getTestimonials");

    }
}
</script>