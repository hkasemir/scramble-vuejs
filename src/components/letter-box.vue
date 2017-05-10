<template>
  <li class="letter">
    {{ letter }}
  </li>
</template>

<script>
export default {
  name: 'letter-box',
  props: ['letter'],
};
</script>

<style>
.letter {
  size: 2em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  border: 1px solid purple;
}

.victory {
  border: 1px solid green;
}
</style>

