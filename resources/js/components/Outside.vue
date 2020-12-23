<template>
    <div>
        <router-view 
            :username=username 
            :password=password>
        </router-view>
    </div>
</template>

<script>
    export default {
        props: [
            'username',
            'password'
        ]
    }
</script>
