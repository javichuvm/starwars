<template>
    <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden"></span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Loading'
});
</script>