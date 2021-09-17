<template>
    <div class="row">
        <div class="col-10 col-sm-6 mx-auto">
            <div class="card" v-if="Object.entries(infoCard).length > 0">
                <div class="card-body" style="text-align:center;">
                    <h5 class="card-title"><strong>{{ $route.name }}:</strong> {{ infoCard.name}}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li 
                        class="list-group-item"
                        v-for="(value, attr) in infoCard"
                        v-bind:key="value">
                        <div v-if="Array.isArray(value)" class="enlaces"> 
                            <strong>{{$t(attr)}}:</strong>
                            <router-link 
                                v-for="(v, i) in value"
                                v-bind:key="i"
                                :to="`/${v.split('/')[4]}/${GetId(v)}`">
                                {{v.split('/')[4] + ' ' + (i + 1)}}
                            </router-link>                                            
                        </div>
                        <div v-else>
                            <strong>{{$t(attr)}}: </strong>{{value}}
                        </div>
                    </li>
                </ul>        
                <div class="card-body">
                    <a @click="$router.go(-1)" class="card-link">Back</a>
                </div>
            </div>
            <Loading v-if="isLoading === true"></Loading>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Api from '../api/api'
import Utils from '../utils/utils'
import Loading from '../components/Loading.vue'

export default defineComponent({
    name: 'InfoCard',
    components:{
        Loading
    },
    data(){
        return {
            isLoading: false,
            infoCard: {},
            utils: new Utils(),
            api: new Api()
        }
    },
    created () {
        let url: Array<string> = this.$route.path.split('/');
        this.GetById(url[1], url[2]);
    },
    methods:{
        GetById(type: string, id: string){
            this.isLoading = true;
            this.api.GetById(type, id)
            .then((res) => {
                this.infoCard = this.FormatInfo(res.data);
                this.isLoading = false;
            })
            .catch((error) =>{
                this.isLoading = false;
            });
        },
        GetName(type: string, id: string){
            this.api.GetById(type, id)
            .then((res) => {
                return res.data.name;
            })
            .catch((error) =>{
            });
        },
        GetId(url: string){
            return this.utils.getId(url);
        },
        FormatInfo(info: object){            
            let tmpInfo:any = {}
            let config = require('../utils/items-attributes.json');
            let type = this.$route.path.split('/')[1] as keyof typeof config;
            Object.entries(info).forEach(attr => {
                if(config[type].includes(attr[0])){
                    tmpInfo[attr[0]] = attr[1];
                }
            });
            return tmpInfo;
        }
    },
    watch: {
        '$route.name': {
            immediate: true,
            deep: true,
            handler(newVal, oldVal){
                if(Object.keys(newVal).length > 0 && this.$route.name !== null && this.$route.name !== undefined){
                    let type: string = this.$route.fullPath.split('/')[1].toLowerCase();
                    let id: string = this.$route.fullPath.split('/')[2];
                    this.GetById(type, id)
                }
            }
        }
    }
});
</script>

<style scoped>
.enlaces:not(first-child) a{
    margin-left: 5px;
}
a{
    color: #007bff !important;
    cursor: pointer;
}
</style>