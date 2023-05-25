<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard"
        sub="Base de Conhecimento"/>
    </div>
</template>

<script>
import PageTitle from '@/components/template/PageTitle.vue'
import Stat from './Stat.vue'
import axios from 'axios'
import {baseApiUrl} from '@/global'

export default {
    name: 'Home',
    components: {PageTitle, Stat},
    data: function() {
        return {
            stat: {}
        }
    },
    methods: {
        getStats() {
            axios.get(`${baseApiUrl}/stats`)
        }
    }
}
</script>

<style>

</style>