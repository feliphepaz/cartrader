<template>
  <div class="search">
    <input type="text" placeholder="Search by city..." />
    <button type="submit">Search</button>
  </div>
</template>

<style lang="scss" scoped>
  .search {
    display: flex;
    width: 100%;
    max-width: 600px;
    margin-top: 40px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    input {
      width: 100%;
      border: none;
      border-radius: 20px 0px 0px 20px;
      padding: 14px 20px;
      font-family: serif;
      font-size: 24px;
      outline: none;
    }

    button {
      color: white;
      background: #0EA5E9;
      border: none;
      font-family: serif;
      border-radius: 0px 20px 20px 0px;
      padding: 14px 20px;
      font-size: 24px;
      cursor: pointer;
    }
  }
</style>
