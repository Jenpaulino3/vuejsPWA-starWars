<template>
    <div>
        <h2>People</h2>
        <div v-if="people === null">
            <p>{{ displayText }}</p>
        </div>
        <div v-if="people !== null">
            <p v-for="(value, key) in people">
                {{ value.name }}
            </p>
        </div>
        <!-- <button v-if="people !== null && person === null" v-on:click="getRandomPerson">
            Select to randomize a Star Wars person details
        </button>
        <button v-if="person !== null" v-on:click="getRandomPerson">
            Let's do it again
        </button>
        <div v-if="person !== null">
            <div v-for="(value, key) in person">
                <p>
                    {{ key.charAt(0).toUpperCase() + key.slice(1) }}: {{ value }}
                </p>
            </div>
        </div> -->
        <GoBack/>
    </div>
</template>

<script>
import GoBack from '@/components/GoBack'
import axios from 'axios'
export default {
    name: 'People',
    components: {
        GoBack
    },
    data () {
        return {
            people: null,
            person: null,
            displayText: null
        }
    },
    created: async function () {
        let people = await axios.get('https://swapi.co/api/people/')
        this.people = people.data.results
    },
    mounted: function () {
        this.people === null ? 'A list of people will not display' : ''
    },
    methods: {
        async getRandomPerson () {
            let range = 10
            let id = Math.floor(Math.random() * Math.floor(range))
            let person = await axios.get(`https://swapi.co/api/people/${id}/`)
            this.person = person.data
        }
    }
    
}
</script>

<style>
</style>