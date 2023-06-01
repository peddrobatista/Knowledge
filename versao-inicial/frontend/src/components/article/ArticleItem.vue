<template>
    <div class="article-item">
        <router-link :to="{name: 'articleById', params: {id: article.id}}">
            <div class="article-item-image d-none d-sm-block">
                <img v-if="article.imageUrl"
                :src="article.imageUrl"
                height="150" width="150" alt="Article"/>
                <img v-else src="@/assets/article.png"
                height="150" width="150"
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'ArticleItem',
    props: ['article']
}
</script>

<style>

</style>