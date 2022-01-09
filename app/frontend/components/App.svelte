<script>
  import { planService } from "../services/planService";
  import Updater from "@components/Updater/Updater.svelte";

  import axios from "axios";
  axios.defaults.baseURL = "http://localhost:1337";
  planService.getAll().then(plans => {
    console.log(plans);
  })
</script>

<div class="content">
  <Updater />
</div>