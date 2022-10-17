<script lang="ts">
  import { Icon } from "svelte-hero-icons";
  import type { IconSource } from "svelte-hero-icons";

  export let icon: IconSource = undefined;
  export let appName: string = undefined;
  export let className: string = undefined;
</script>

<div class={`text-sm ${className ? className : ""}`}>
  <Icon src={icon} size="48" /> 
  <span>{appName}</span>
</div>
