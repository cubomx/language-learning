<style>
    .Main {
      display: grid;
      grid-template-columns: minmax(auto, 936px);
      justify-content: center;
      background-color: #fafafa;
    }
    .Main-container {
      display: grid;
      padding: 2em 0;
    }
  </style>


<div class="Main">
    <div class="Main-container">
        <slot />
    </div>
</div>