<script lang="ts">
  import App from "./App.svelte";
  import { Cog, Camera, Phone, ShoppingCart, InformationCircle } from "svelte-hero-icons";
  import type { TApp } from "../types/Apps";

  const apps: TApp[] = [{
    appName: "Config",
    icon: Cog
  }, {
    appName: "Camera",
    icon: Camera,
  }, {
    appName: "Phone",
    icon: Phone,
  }, {
    appName: "Shopping",
    icon: ShoppingCart
  }, {
    appName: "Info",
    icon: InformationCircle
  }]
</script>

<div class="grid grid-cols-5 grid-rows-[repeat(5,_minmax(0,_1fr))] justify-items-center p-2 flex-grow items-center">
  <div class="w-full grid grid-cols-5 grid-rows-1 row-[-1_/_-2] row-end col-span-full justify-items-center items-center">
    {#each apps as app}
      <App
        appName={app.appName}
        icon={app.icon}
        className={app.className} />
    {/each}
  </div>
</div>
