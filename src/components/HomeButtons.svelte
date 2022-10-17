<script lang="ts">
  import { Icon, Home, ArrowLeft, ViewList } from "svelte-hero-icons";
</script>
<div class="flex pb-1 justify-evenly bg-opacity-50 bg-gradient-to-b from-transparent to-purple-600 ">
    <button alt="Back button">
      <Icon src={ArrowLeft} size="32"/>
    </button>
    <button alt="Home button">
      <Icon src={Home} size="32"/>
    </button>
    <button on:click={() => document.documentElement.requestFullscreen()} alt="Apps button">
      <Icon src={ViewList} size="32"/>
    </button>
</div>
