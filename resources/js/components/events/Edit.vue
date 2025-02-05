 <template>
     <div>

     <h3 class="text-2xl mb-4">Edit event</h3>

     <form class="space-y-6" @submit.prevent="editEvent" method="POST">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                <div class="mt-1">
                    <input type="text" name="title" id="title"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="event.title">
                </div>
                <div
                  class="font-medium ml-3 text-red-700"
                  v-if="errors && errors.title"
                >
                {{errors.title[0]}}
                </div>
            </div>

            <div>
                <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                <div class="mt-1">
                    <textarea type="text" name="description" id="description"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="event.description"></textarea>
                </div>

                <div
                  class="font-medium ml-3 text-red-700"
                  v-if="errors && errors.description"
                >
                {{errors.description[0]}}
                </div>
            </div>

            <div>
                <label for="date" class="block text-sm font-medium text-gray-700">Date</label>
                <div class="mt-1">
                    <input type="date" name="date" id="date"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="event.date">
                </div>
                <div
                  class="font-medium ml-3 text-red-700"
                  v-if="errors && errors.date"
                >
                {{errors.date[0]}}
                </div>
            </div>

            <div>
                <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
                <div class="mt-1">
                    <input type="text" name="location" id="location"
                           class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                           v-model="event.location">
                </div>
                <div
                  class="font-medium ml-3 text-red-700"
                  v-if="errors && errors.location"
                >
                {{errors.location[0]}}
                </div>
            </div>

            <div>
                <label for="status" class="block text-sm font-medium text-gray-700">Status</label>
                <div class="mt-1">
                    <select id="status" v-model="event.status" required class="block mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        >
                        <option value="upcoming">Upcoming</option>
                        <option value="ongoing">Ongoing</option>
                        <option value="completed">Completed</option>
                        </select>
                </div>
                <div
                  class="font-medium ml-3 text-red-700"
                  v-if="errors && errors.status"
                >
                {{errors.status[0]}}
                </div>
            </div>

        </div>

        <div class="flex place-content-end mb-4">
        <button type="submit"
                class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-blue-800 rounded-md border border-transparent ring-blue-300 transition duration-150 ease-in-out hover:bg-blue-700 active:bg-blue-900 focus:outline-none focus:border-blue-900 focus:ring disabled:opacity-25">
            Create
        </button>
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

        const { errors, getEvent, event, updateEvent } = useEvents()

        onMounted(() => getEvent(props.id))

        const editEvent = async () => {
               await updateEvent(props.id)
        }

        return {
            event,
            errors,
            editEvent
        }
     }
 }
 </script>
