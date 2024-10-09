<template>
  <div class="filter">
    <div class="filter__item">
      <h4>Location</h4>
      <span>Ottawa</span>
      <div class="filter__item__tool">
        <input type="text" placeholder="Search by city...">
        <button type="submit">Apply</button>
      </div>
    </div>
    <div class="filter__item">
      <h4>Make</h4>
      <span>Any</span>
    </div>
    <div class="filter__item">
      <h4>Price</h4>
      <span>Any</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .filter {
    width: 25%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
    align-self: flex-start;

    &__item {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-between;
      padding: 30px 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      font-family: sans-serif;

      h4 {
        font-weight: bold;
      }

      span {
        color: #0EA5E9;
      }

      &__tool {
        display: none;
        flex-direction: column;
        gap: 5px;
        padding: 20px;
        background: white;
        border: 1px solid rgba(0, 0, 0, 0.1);
        box-shadow: rgba(100, 100, 111, 0.4) 0px 7px 29px 0px;
        width: 300px;
        position: absolute;
        top: 0;
        left: 250px;
        z-index: 99;

        input {
          width: 100%;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          padding: 10px;
          font-family: sans-serif;
          font-size: 16px;
          outline: none;
        }

        button {
          color: white;
          background: #0EA5E9;
          border: none;
          font-family: sans-serif;
          border-radius: 10px;
          padding: 10px;
          font-size: 16px;
          cursor: pointer;
        }
      }
    }
  }
</style>
