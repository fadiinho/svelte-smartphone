<script lang="ts">
  import NotificationArea from "./NotificationArea.svelte";
  import HomeButtons from "./HomeButtons.svelte";
  import Home from "./Home.svelte";
</script>

<div id="mainframe" class="flex flex-col max-w-lg max-h-lg sm:w-full h-full bg-[url('/src/assets/wallpaper3.jpg')] bg-no-repeat bg-cover">
  <NotificationArea />
  <Home />
  <HomeButtons />
</div>
