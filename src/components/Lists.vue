<template>
  <div class="row justify-content-md-center">
    <div class="col col-md-6">
      <div class="list-group" style="text-align: left;">
        <router-link 
          v-for="(element, i) in elements" :key="i"
          class="list-group-item list-group-item-action"
          :to="`/${$route.name.toLowerCase()}/${GetId(element.url)}`">{{element.name}}</router-link>
      </div>
      <Pagination :page="pages" :currentPage="currentPage" @change="ChangePage"></Pagination>
      <Loading v-if="isLoading === true"></Loading>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Api from '../api/api'
import Utils from '../utils/utils'
import Pagination from '../components/Pagination.vue'
import Loading from '../components/Loading.vue'

export default defineComponent({
  name: 'Lists',
  components:{
    Pagination,
    Loading
  },
  data(){
    return {
      isLoading: false,
      currentPage: 0,
      pages: 0,
      elements: [],
      utils: new Utils(),
      api: new Api()
    }
  },
  created () {
    this.currentPage = this.$route.query.page == null ? 1 : parseInt(this.$route.query.page.toString());
    let list = this.$route.name !== undefined ? this.$route.name : ""
    if(this.$route.name !== null && this.$route.name !== undefined){
      this.GetAll(this.$route.name.toString().toLowerCase(), this.currentPage)
    }
  },
  methods:{
    GetId(url: string){
      return this.utils.getId(url);
    },
    GetAll(type: string, page: number){
      this.isLoading = true;

      this.api.GetAll(type, page)
      .then((res: any) => {
        this.isLoading = false;
        this.elements = res.data.results;
        this.pages = Math.ceil(res.data.count / 10);
      })
      .catch((error) =>{
        this.isLoading = false;
      });
    },
    ChangePage(page: number){
      let type = this.$route.path.split('/')[1].toLowerCase();
      this.$router.push(`/${type}?page=${page}`)
    }
  },
  watch: {
    '$route.query': {
      immediate: true,
      handler(newVal, oldVal){
        if(Object.keys(newVal).length > 0 && this.$route.name !== null && this.$route.name !== undefined){
          this.GetAll(this.$route.name.toString().toLowerCase(), newVal.page)
        }
      }
    }
  }
});
</script>
