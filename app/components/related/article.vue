<template>
    <div>
        <div class="item features-image col-12 col-md-6 col-lg-4">
            <div class="item-wrapper">
                <div class="item-img">
                    <img :src="`${$directus?.url}assets/${article?.image?.filename_disk}`" :alt="article?.name">
                </div>
                <div class="item-content">
                    <h6 class="item-subtitle mbr-fonts-style mt-1 display-4">
                        <strong>{{ article?.name }}</strong>
                    </h6>
                    <h5 class="item-title mbr-fonts-style display-7"><strong>{{ article?.excerpt }}&nbsp;</strong></h5>

                    <NuxtLink class="mbr-text mbr-fonts-style mt-3 display-4" :to="`/article/${article?.slug}`">Read More</NuxtLink>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        article: {
            type: Object,
            required: true,
        },
    });
</script>