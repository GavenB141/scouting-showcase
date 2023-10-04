<script>
    import {teamScore, gridLayout} from "./statistics";
    import StarRating from "$lib/components/StarRating.svelte";
    import cube from "$lib/assets/scout/cube.png";
    import cone from "$lib/assets/scout/cone.png";
    import logo from "$lib/assets/logo.png";

    export let data;
</script>

<div class="header w-full text-3xl grid grid-cols-4 p-4 font-extrabold">
    <div class="col-span-3 flex flex-row">
        <img src={logo} width=36px alt="1710" class="mr-3"/> Scouting
    </div>
</div>

<center class="pt-5">
    <div class="bg-cyan-200/50 p-1 rounded-lg max-w-sm m-2">
        <p>In the real thing, your data would now be logged to our database, and could later be used to display the following summary of the robot's performance:</p>
    </div>
    <middle class="box m-6 max-w-sm">
        <h2 class="font-bold text-lg pb-2">Team {data.team} in Match {data.match}:</h2>
        <p>Scouted by <span class="font-bold">{data.scout}</span></p>
        <p>Approx. Scouted score: {teamScore(data)}</p>
        <div class="w-fit flex flex-row items-center gap-1"><p>Overall:</p><StarRating rating={data.postgame.rating}/></div>
        {#if data.postgame?.driverSkill}
            <div class="w-fit flex flex-row items-center gap-1"><p>Driving: </p><StarRating rating={data.postgame.driverSkill}/></div>
        {/if}
        {#if data.postgame.thoughts}<p>Scout thoughts: {data.postgame.thoughts}</p>{/if}
        <div class="flex flex-row items-middle gap-2">
            <div class="grid grid-cols-9">
                {#each gridLayout(data) as row, i}{#if i < 3}
                    {#each row as node}
                        <div class="w-8 h-8 border-white border">
                            {#if node?.type==="cube"}
                                <img src={cube}/>
                            {:else if node?.type==="cone"}
                                <img src={cone}/>
                            {/if}
                        </div>
                    {/each}
                {/if}{/each}
            </div>
        </div>
    </middle>
    <div class="bg-cyan-200/50 p-1 rounded-lg max-w-sm m-2">
        <p>To see what's possible when data is collected on a whole competition,
            you can view real data collected on our championship division <a class="text-blue-800 underline hover:text-white" href="https://team1710scouting.vercel.app/data/2023dal">here</a>.</p>
    </div>
    <a href="/"><button class="my-2">Go back</button></a>
</center>

