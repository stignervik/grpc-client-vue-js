<template>
  <main>
    <h1> gRPC </h1>
    <button @click="createUnit"> Create unit </button>
  </main>
</template>


<script setup lang="ts">
  import { defineComponent, inject, onMounted } from "vue";
  import { createPromiseClient } from "@connectrpc/connect";
  import type { PromiseClient, Transport } from "@connectrpc/connect";
  import { Unit } from "../gen/unit_connect";
  import { CreateUnitRequest, CreateUnitReply } from "../gen/unit_pb";
  // import { transportKey} from "../keys";
import { createGrpcWebTransport } from "@connectrpc/connect-web";

  interface UnitData {
    client: PromiseClient<typeof Unit> | undefined;
  }

  // const transport = inject<Transport>(transportKey);

  async function createUnit() {
    console.log("create unit...");
    try {
      const transport = createGrpcWebTransport({ baseUrl: 'http://127.0.0.1:50051',});
      const client = createPromiseClient(Unit, transport);
      const request = new CreateUnitRequest();
      request.name = "Unit 1";
      request.unitClass = "Input";
      request.unitFunction = "Input";
      request.functionBlock = "Input";

      const response = await client.createUnit(request);
      console.log("Response from server: {}", response)

      } catch (e) {
        console.log(e);
    }
  }

</script>
