import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useevents() {

    const event = ref([])
    const events = ref([])
    const errors = ref('')

    const router = useRouter()

    const getEvents = async () => {

        const response = await axios.get('/api/events');

        events.value = response.data.data;
    }

    const getEvent = async (id) => {

        const response = await axios.get(`/api/events/${id}`);

        event.value = response.data.data
    }

    const storeEvent = async (data) => {

        try {

            await axios.post('/api/events', data)
            await router.push({ name: 'events.index' })

        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    }

    const updateEvent = async (id) => {

        try {

            await axios.put(`/api/events/${id}`, event.value)
            await router.push({ name: 'events.index' })

        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors;
            }
        }
    }

    const destroyEvent = async (id) => {
        await axios.delete(`/api/events/${id}`)
    }

    return {
        getEvents,
        getEvent,
        events,
        event,
        storeEvent,
        updateEvent,
        destroyEvent,
        errors
    }
}
