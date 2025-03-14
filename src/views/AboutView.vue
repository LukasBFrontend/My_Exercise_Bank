<script setup>
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'

defineProps({
  msg: String,
})

const count = ref(0)
const items = [
  {
    title: '#1 Vision',
    value: 1,
  },
  {
    title: '#2 Mission',
    value: 2,
  },
  {
    title: '#3 Goal',
    value: 3,
  },
]
</script>

<template>
  <article>
    <h2>About</h2>
    <p>
      I created Exercise Bank to allow exercise enthusiasts to browse from a
      vast array of exercises. The website provides an interface between the
      user and Exercises API (provided by API-ninja).
    </p>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae voluptas
      impedit nesciunt sint dignissimos eveniet, a iure vel nemo repellat nam
      cum ullam debitis, accusantium architecto culpa nobis libero aut delectus.
      Aspernatur assumenda blanditiis similique nemo sint fugit, aliquam amet?
      Similique quas tempora quis explicabo maiores? Ipsa, maxime! Illo
      obcaecati aperiam sequi animi distinctio, labore soluta. Doloribus iure
      quasi asperiores odit mollitia beatae quod, dolorem perspiciatis minus
      dolore earum recusandae minima cumque illum dignissimos at ex obcaecati
      consequatur ducimus. Sequi molestias voluptas culpa, aliquid nisi tempora
      totam nostrum sint deleniti beatae natus neque rerum? Magnam recusandae
      nulla dolore autem amet assumenda corporis, ad culpa cumque animi, fugiat
      illum molestias ducimus facere itaque, at beatae laudantium provident quo
      quae nemo ab nisi ratione architecto. Temporibus laudantium dolor mollitia
      ad facilis consequuntur quis, iste vero accusamus possimus, quae suscipit
      maxime harum eligendi rem similique autem quasi atque! Dignissimos
      quisquam incidunt error delectus laborum dolore? Adipisci animi sed alias
      quod minus debitis et incidunt itaque laudantium praesentium labore
      quisquam aliquam ex aspernatur quam delectus tenetur, non possimus
      perspiciatis ad eum? Repellendus, quibusdam magnam sunt temporibus itaque
      veniam pariatur similique architecto impedit provident earum laudantium
      adipisci porro. Facilis dolores architecto voluptatibus dolorum? Alias,
      accusantium.
    </p>
    <v-img
      id="image"
      :width="650"
      :aspect-ratio="1.7"
      cover
      src="/equipment.jpg"
      alt="a pair of dumbells"
    >
      <div class="fill-height gradient"></div>
    </v-img>
    <h2>Mission, vision and goal</h2>
    <v-list :items="items"></v-list>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed facilis
      voluptates neque velit quos tempora quo voluptas magnam earum libero hic
      minus, possimus cum rerum, eveniet mollitia! Totam magni vitae officiis
      autem est quis eius in maiores eligendi consequatur dicta earum modi
      neque, dolor maxime temporibus quaerat possimus, corporis vel rerum quam.
      Tenetur, impedit omnis. Quibusdam deserunt quos eos perspiciatis veniam
      sunt at exercitationem impedit numquam, nobis distinctio laboriosam cum
      sint temporibus est nam veritatis quis hic? Corrupti nemo eligendi
      deleniti quae, odio sint, deserunt repellendus similique est possimus
      placeat sequi doloremque sapiente quibusdam! Quibusdam fuga doloribus
      velit nostrum reprehenderit?
    </p>
  </article>
</template>

<style scoped>
article {
  background: white;
  color: black;
  padding: 1rem;
}
p {
  text-align: left;
  padding: 1rem 10rem;
}
</style>
