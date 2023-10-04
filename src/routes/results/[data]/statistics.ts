export function teamScore(e:any){
    let count = 0;
    let grid = gridLayout(e);
    grid[0].forEach((a:any)=>{
        if(!a)return;
        count+=5;
        if(a.supercharged != "none") count+=3;
        if(a.auto) count++;
    });
    grid[1].forEach((a:any)=>{
        if(!a)return;
        count+=3;
        if(a.supercharged != "none") count+=3;
        if(a.auto) count++;
    });
    grid[2].forEach((a:any)=>{
        if(!a)return;
        count+=2;
        if(a.supercharged != "none") count+=3;
        if(a.auto) count++;
    });
        
    if(e.game.untimed.dockedAuto){
        count += 8;
        if(e.game.untimed.engageAuto) count += 4;
    }
    if(e.game.untimed.dockedMatch){
        count += 6;
        if(e.game.untimed.engageMatch) count += 4;
    }
    if(e.game.untimed.parked) count += 2;

    return(count);
}

export function gridLayout(e:any){
    let out = [Array(9),Array(9),Array(9),Array(9)]
    e.game.actions.forEach((a:any)=>{
        if(a.action === "place"){
            if(out[a.node.y] && !out[a.node.y][a.node.x]) out[a.node.y][a.node.x] = {
                auto: (a.time - e.game.start <= 18000),
                type:a.type,
                supercharged:"none",
            };
            else if(out[a.node.y] && out[a.node.y][a.node.x] && out[a.node.y][a.node.x]) out[a.node.y][a.node.x].supercharged = a.type;
        }
        if(a.action === "intake" && typeof a.location == "object" && out[a.location.y][a.location.x]?.supercharged=="none"){ //if taken from grid and not supercharged
            out[a.location.y][a.location.x]=undefined;
        }
        if(a.action === "intake" && typeof a.location == "object" && out[a.location.y][a.location.x]?.supercharged!="none" && out[a.location.y][a.location.x]){ //if taken from grid and supercharged
            out[a.location.y][a.location.x].supercharged="none";
        }
    });

    return out;
}