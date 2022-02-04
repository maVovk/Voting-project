<template>
  <button class="button">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style>
    .button {
        align-self: flex-end;
        padding: 10px 15px;
        background: #474747;
        color: white;
        margin: 10px;
        border: 0px;
        border-radius: 5px;
    }
    .button:hover{
        background: #878787;
        color: black;
    }
</style>