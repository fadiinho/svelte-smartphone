<script lang="ts">
  import NotificationArea from "./NotificationArea.svelte";
  import HomeButtons from "./HomeButtons.svelte";
  import Main from "./Main.svelte";
</script>

<div id="mainframe" class="flex flex-col w-full h-full bg-[url('/src/assets/wallpaper3.jpg')] bg-no-repeat bg-cover">
  <NotificationArea />
  <Main />
  <HomeButtons />
</div>
