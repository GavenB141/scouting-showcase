<script>
    import { JsonView } from "@zerodevx/svelte-json-view";

    export let data;
</script>


<div class="w-fit mx-auto my-10">
    <h1 class="text-3xl font-bold">Results</h1>
</div>

<div class="box mx-auto overflow-y-scroll" style="height:632px">
    <JsonView json={data}/>
</div>

<div class="w-11/12 sm:w-5/6 md:w-3/4 lg:w-1/2 mx-auto mt-10">
    <p class="indent-8">
        In the real thing, this data would now be uploaded to <a class="text-cyan-500 hover:text-white underline" href="https://mongodb.com">MongoDB</a>.
        Notice the "actions" array. Each time the scout indicates an action, behind the scenes it is logged here along with a timestamp.
        Of course, the human scouts aren't perfect, so the times won't be exact, but when averaged out over the course of a competition,
        these timestamps can be used to reveal information that isn't obvious otherwise, such as which robots score at the fastest rate.
    </p>
    <center class="mt-3">
        <a href="/" class="font-bold" data-sveltekit-preload-data=off data-sveltekit-reload>
            <button>Return</button>
        </a>
    </center>
</div>