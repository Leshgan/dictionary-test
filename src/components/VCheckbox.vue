<template>
  <div class="v-checkbox-wrapper">
    <input
      type="checkbox"
      class="v-checkbox-wrapper-checkbox"
      :checked="value"
      :value="value"
    >
    <label
      class="v-checkbox-wrapper-label"
      @click="$emit('input', !value)"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'VCheckbox',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
  @import "src/styles/constants";

  .v-checkbox-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;

    &-label {
      display: inline-flex;
      position: relative;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    &-checkbox {
      height: 0;
      width: 0;

      &+label {
        display: inline-flex;
        align-items: center;
        user-select: none;

        &:before {
          content: '';
          display: inline-block;
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          flex-grow: 0;
          border: 1px solid #adb5bd;
          border-radius: 0.25em;
          margin-right: 0.5em;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: 50% 50%;
          background-color: white;
        }
      }

      &:checked+label::before {
        background-color: $main-blue;
      }
    }
  }
</style>
