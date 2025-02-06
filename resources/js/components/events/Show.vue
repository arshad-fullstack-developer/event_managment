 <template>
     <div>

     <h3 class="text-2xl mb-4">View Event</h3>

     <form class="space-y-6">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                 <div class="mt-1">
                    <p>{{  event.title }}</p>
                </div>
            </div>

            <div>
                <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                <div class="mt-1">
                    <p>{{  event.description }}</p>
                </div>
            </div>

            <div>
                <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
                <div class="mt-1">
                    <p>{{  event.date }}</p>
                </div>
            </div>

            <div>
                <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                <div class="mt-1">
                    <p>{{  event.location }}</p>
                </div>
            </div>
            <div>
                <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
                <div class="mt-1">
                    <p>{{  event.status }}</p>
                </div>
            </div>
        </div>
    </form>
 </div>
 </template>
 <script>

 import { onMounted } from 'vue'
 import useEvents from '../../composables/events'

 export default {

    props: {
        id: {
            required: true,
            type: String
        }
    },
     setup(props) {
        const { getEvent, event } = useEvents()
        onMounted(() => getEvent(props.id))
        return {
            event
        }
     }
 }
 </script>
