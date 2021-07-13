<template>
    <nav>
        <div class="nav-wrapper green">
            <div class="container">
                <router-link :to="{name: 'dashboard'}" class="brand-logo">Employee Manager</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name:"navbar"
}
</script>