<template>
    <div class="row justify-content-md-center">
        <div class="col col-md-6">
            <nav>
                <ul class="pagination">
                    <li class="page-item" @click="PreviousNext(-1)" :class="{disabled: isFirst }">
                        <a class="page-link" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item" :class="{active : current == p }"
                        v-for="(p, i) in page" :key="i"
                        @click="ChangePage(p)"
                    >
                        <a class="page-link" >{{p}}</a>
                    </li>
                    <li class="page-item" @click="PreviousNext(1)" :class="{disabled: isLast }">
                        <a class="page-link" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Pagination',
    emits:["change"],
    props:{
        page: Number,
        currentPage: {
            type: Number,
            required: true
        }
    },
    data(){
        return{
            current: 1
        }
    },
    created(){
        this.current = this.currentPage;
    },
    computed:{
        isFirst(): boolean{
            return this.current == 1;
        },
        isLast(): boolean{
            return this.current == this.page
        }
    },
    methods:{
        ChangePage(page: number){
            this.current = page;
            this.$emit("change", page);
        },
        PreviousNext(newPage: number){
            if((newPage < 0 && this.current > 1) || (newPage > 0 && this.current < this.page!)){
                this.current += newPage;
                this.ChangePage(this.current);
            }
        }
    }
});
</script>