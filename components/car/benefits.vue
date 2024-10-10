<template>
  <ul class="benefits">
    <li>
      No Accidents
    </li>
    <li>
      Low KM
    </li>
    <li>
      Vehicle Detailed
    </li>
    <li>
      Leather Interior
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .benefits {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 0px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    font-family: sans-serif;

    li {
      display: flex;
      align-items: center;
      letter-spacing: 0.1px;
      gap: 10px;

      &:before {
        content: " ";
        display: block;
        height: 4px;
        width: 4px;
        background: rgba(0, 0, 0, 0.7);
      }
    }
  }
</style>
