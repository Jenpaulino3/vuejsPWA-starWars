<template>
    <div>
        <a @click="$router.go(-1)">
            <img :src="backIcon" />
        </a>
    </div>
</template>

<script>
export default {
    name: 'GoBack',
    data () {
        return {
            backIcon: require('../assets/back-icon.png')
        }
    }
}
</script>

<style>
    img {
        margin: 25px auto;
        cursor: pointer;
    }
</style>