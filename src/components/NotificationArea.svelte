<script>
  import { Icon, VolumeUp, VolumeOff } from "svelte-hero-icons";
  import { onDestroy } from "svelte";
  import { getDate } from "../lib/getDate"
  
  let date = getDate();
  let volumeOn = true;

  const interval = setInterval(() => {
    date = getDate();
  }, 1000);

  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="flex justify-between px-2 w-full h-6 bg-opacity-50 bg-gradient-to-b  from-purple-600 to-transparent">
  <span id="time" class="">{date}</span>

  <div id="volume">
    {#if volumeOn}
      <Icon src={VolumeUp} size="20"/>
    {:else}
      <Icon src={VolumeOff} size="20"/>
    {/if}
  </div>
</div>
