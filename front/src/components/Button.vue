<template>
    <div>
        <button v-on:click="generateExcuse">Nouvelle excuse</button>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: 'Button',
        data: function() {
            return {
                excusesList: []
            }
        },
        props: {
            excuse: String
        },
        mounted() {
            axios.get("/api/list")
                .then(response => {
                    console.log(response.data)
                    this.excusesList = response.data 
                })
                .catch(error => console.log(error));
        },
        methods: {
            generateExcuse() {
                try {
                    if( this.excusesList.length <= 1 ) { throw("Aucune nouvelle excuse disponible") }
                    else {
                        this.pickExcuse()
                    }
                } catch(error) {
                    console.log(error)
                }
            },
            pickExcuse() {
                var index = Math.floor(Math.random() * this.excusesList.length);
                if (this.excusesList[index] != this.excuse) {
                    console.log(this.excusesList[index])
                    this.$emit('changeExcuse', this.excusesList[index])
                }
                else {
                    return this.pickExcuse()
                }
            }
        }
    }
</script>
