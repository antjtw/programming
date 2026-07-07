/* ============================================================
   data.js — programme content (single source of truth)
   Exposes APP.PROGRAMME, APP.WARM, APP.mesoBy(), APP.yt()
   ============================================================ */
(function(){
  const APP = (window.APP = window.APP || {});

const yt = q => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
function M(n,v,s,r,k,nt,q,flag){return {n,v,s,r,k,nt,yt:q?yt(q):null,flag};}

/* ----- shared interim sessions (Meso 0) ----- */
const WARM = "Warm-up / Activation";
const m0 = {
  mon:{jp:"月",name:"Hip & Glute",focus:"Glute med, hip ER, MLA control",blocks:[
    {t:WARM,items:[
      M("90/90 hip switches",null,"2×8/side",null,null,"Slow, controlled. Posterior hip, not lumbar. Towel under R-knee if needed.","90/90 hip switch mobility"),
      M("Banded clamshells",null,"3×15/side",null,null,"Heavy band, slow eccentric. Glute med focus, L-side first.","banded clamshell exercise"),
    ]},
    {t:"Main",items:[
      M("Side-lying hip abduction","ER bias","3×12/side",null,null,"Toe slightly DOWN — glute med over TFL. Pillow between knees for R-knee.","side lying hip abduction glute medius"),
      M("Single-leg balance + reach",null,"3×30s/side",null,null,"Reach forward/side/back. Proprioceptive load on MLA. Compare L vs R.","single leg balance reach"),
      M("Copenhagen plank","short lever","3×20s/side","RPE 5-6",null,"Top knee on bench. Eccentric adductor protector — most important addition.","copenhagen plank short lever"),
      M("Posterior knee desensitization",null,"5 min",null,null,"Sub-threshold pressure (awareness, not pain). Pain ≤3/10 — track threshold weekly.","tennis ball self massage calf knee","R-knee"),
    ]},
    {t:"Finish",items:[ M("Slow nasal breathing",null,"10 min","5-6 brpm",null,"In 5s nose, out 5-6s. Vagal tone + HRV.","slow nasal breathing 5 breaths") ]},
  ]},
  tue:{jp:"火",name:"Ankle & T-Spine",focus:"Dorsiflexion, thoracic ext, foot intrinsics",blocks:[
    {t:WARM,items:[
      M("Banded ankle distraction",null,"2×10/side",null,null,"Band around ankle, pull joint back, knee to wall.","banded ankle joint distraction"),
      M("Copenhagen plank","short lever","3×20s/side","RPE 5-6",null,"Top knee on bench. Build hold time gradually.","copenhagen plank short lever"),
    ]},
    {t:"Main",items:[
      M("Weighted knee-to-wall",null,"3×10/side",null,null,"Light DB. Heel stays down throughout.","weighted knee to wall ankle"),
      M("Calf stretch","rear foot IN","2×30s/side",null,null,"Toe slightly inward — addresses ER compensation.","calf stretch wall internal rotation"),
      M("Foam roller t-spine ext",null,"3×10",null,null,"Pause 2s at end range.","foam roller thoracic extension"),
      M("Quadruped t-spine rotation",null,"2×8/side",null,null,"Hand behind head, rotate, look up.","quadruped thoracic rotation"),
      M("Wall slides",null,"2×10",null,null,"Scap-friendly. Front delt stabilisation patterning.","wall slide shoulder"),
      M("Short-foot drill",null,"3×30s/side",null,null,"Raise arch without curling toes. Foundational MLA pattern.","short foot drill arch"),
    ]},
    {t:"Finish",items:[ M("Slow nasal breathing",null,"10 min","5-6 brpm",null,"Downregulate. Pre-sleep ideal.","slow nasal breathing 5 breaths") ]},
  ]},
  wed:{jp:"水",name:"R-Leg & Knee",focus:"Asymmetry, R-side strength, knee ROM",blocks:[
    {t:WARM,items:[
      M("Copenhagen plank","short lever","3×20s/side","RPE 5-6",null,"Adductor protector.","copenhagen plank short lever"),
    ]},
    {t:"Main",items:[
      M("Split squat","R-leg front","2×8, 3s ecc.","RPE 5-6",null,"BW only. Pain-free knee range. Closing L/R asymmetry is the long-game fix.","split squat slow eccentric"),
      M("Single-leg glute bridge","R only","2×10","RPE 5-6",null,"R-foot planted, L-leg up. Targets weak R-glute. Match L to compare.","single leg glute bridge"),
      M("Posterior knee desensitization",null,"5 min",null,null,"Sub-threshold only. Track tolerance week to week.","tennis ball self massage calf knee","R-knee"),
      M("Supine heel slides",null,"2×10/side",null,null,"Slide heel to glute through PAIN-FREE range only. ROM expands gradually.","supine heel slide knee flexion","R-knee"),
    ]},
    {t:"Finish",items:[ M("Slow nasal breathing",null,"10 min","5-6 brpm",null,"Vagal tone.","slow nasal breathing 5 breaths") ]},
  ]},
  thu:{jp:"木",name:"Hip Mobility (R-bias)",focus:"R-hip internal rotation & flexion",blocks:[
    {t:WARM,items:[
      M("Copenhagen plank","short lever","3×20s/side","RPE 5-6",null,"Adductor protector.","copenhagen plank short lever"),
    ]},
    {t:"Main",items:[
      M("R-hip 90/90 IR/ER drill","R-focus","2×8/side",null,null,"Focus R-hip internal rotation. Restricted R-hip overloads L-adductor — upstream cause.","90/90 hip internal rotation"),
      M("R-hip flexion CARs",null,"2×5 circles",null,null,"Controlled articular rotations. Owned ROM beats forced ROM.","hip CARs controlled articular rotations"),
      M("Hip airplane","assisted","2×8/side",null,null,"Hand on wall. Stance leg slightly bent, never locked.","hip airplane exercise"),
      M("Banded crab walks",null,"3×10 each way",null,null,"Stay low, knees track out.","banded crab walk glute medius"),
    ]},
    {t:"Finish",items:[ M("Slow nasal breathing",null,"10 min","5-6 brpm",null,"Downregulate.","slow nasal breathing 5 breaths") ]},
  ]},
  fri:{jp:"金",name:"Tendon Iso & Foot",focus:"Tendon stiffness, load tolerance",blocks:[
    {t:WARM,items:[
      M("Copenhagen plank","short lever","3×20s/side","RPE 5-6",null,"Adductor protector.","copenhagen plank short lever"),
    ]},
    {t:"Main",items:[
      M("Spanish squat hold",null,"4×45s","RPE 5-6",null,"Band around knees, sit in. Exhale through hold. R-knee: shallow — switch to TKE if posterior pressure.","spanish squat tendon isometric","R-knee"),
      M("Seated calf isometric",null,"3×45s","RPE 5-6",null,"Plates on knees, heels driven down. No breath-holding past 1-2s.","seated calf isometric hold"),
      M("Wall sit",null,"2×45s","RPE 5",null,"Knee at 90°, do not drift past. Skip if any chest sensation.","wall sit hold"),
      M("Short-foot drill",null,"3×30s/side",null,null,"Arch without toe curl.","short foot drill arch"),
      M("Posterior knee desensitization",null,"5 min",null,null,"Sub-threshold.","tennis ball self massage calf knee","R-knee"),
    ]},
    {t:"Finish",items:[ M("Slow nasal breathing",null,"10 min","5-6 brpm",null,"Vagal tone.","slow nasal breathing 5 breaths") ]},
  ]},
  sat:{jp:"土",name:"Combined (longer)",focus:"Integration day, ~60 min",blocks:[
    {t:WARM,items:[
      M("Copenhagen plank","long lever","2×15s/side","RPE 6-7",null,"Top ankle on bench. Only when short lever feels easy at 30s+.","copenhagen plank long lever"),
      M("90/90 hip switches",null,"2×8/side",null,null,"Mobility primer.","90/90 hip switch mobility"),
    ]},
    {t:"Main",items:[
      M("R-hip 90/90 IR/ER drill","R-focus","2×8/side",null,null,"R internal rotation focus.","90/90 hip internal rotation"),
      M("Side-lying hip abduction","ER bias","3×12/side",null,null,"Glute med.","side lying hip abduction glute medius"),
      M("Cossack squat","shallow","2×6/side","RPE 5",null,"SHALLOW only — adductor control through assisted range. Never deep.","cossack squat shallow","L-adductor"),
      M("Split squat","R-leg front","2×8, 3s ecc.","RPE 5-6",null,"R-side asymmetry work.","split squat slow eccentric"),
      M("Posterior knee desensitization",null,"5 min",null,null,"Sub-threshold.","tennis ball self massage calf knee","R-knee"),
      M("Gastroc medial head pin-stretch",null,"2×60s",null,null,"Pin upper inner R-calf (light), point/flex foot.","gastrocnemius medial head pin stretch","R-knee"),
      M("Prone heel-to-glute","gravity only","2×60s/R",null,null,"Face-down, R-heel drifts to glute under gravity. Stretch NOT pressure.","prone passive knee flexion","R-knee"),
    ]},
    {t:"Finish",items:[ M("Slow nasal breathing",null,"10 min","5-6 brpm",null,"Downregulate.","slow nasal breathing 5 breaths") ]},
  ]},
  sun:{jp:"日",name:"Active Recovery",focus:"~25 min, easy",blocks:[
    {t:"Main",items:[
      M("Frog stretch","gentle","2×60s",null,null,"Knees wide, hips back. Gentle pressure only — not range-pushing.","frog stretch hip mobility gentle"),
      M("Gentle full-body stretch",null,"10 min",null,null,"Anything that feels good. Sleep-prep.","gentle full body stretch routine"),
    ]},
    {t:"Finish",items:[ M("Slow nasal breathing",null,"10 min","5-6 brpm",null,"Vagal tone.","slow nasal breathing 5 breaths") ]},
  ]},
};
const m0order = ["mon","tue","wed","thu","fri","sat","sun"];
const m0walks = {mon:"30 min",tue:"30 min",wed:"30 min",thu:"35 min",fri:"30 min",sat:"45 min",sun:"20 min (opt)"};
// build 7 day-sessions, prepend the day's walk
function m0Sessions(){
  return m0order.map((k,i)=>{
    const d=m0[k];
    const walk = M("Walk — Zone 2",null,m0walks[k],"RPE 3-4",null,"Conversational pace, nose-breathe if you can. Stop on any chest symptom.",null);
    const blocks = [{t:"Cardio",items:[walk]}, ...d.blocks];
    return {id:k,jp:d.jp,name:d.name,focus:d.focus,blocks};
  });
}

/* ----- Meso 1 Week 1 (full) ----- */
const m1w1 = [
  {id:"lower",jp:"下半身",name:"Lower",focus:"Wake glutes, graded L-adductor, knee/ankle IR for stacking",blocks:[
    {t:WARM,items:[
      M("Supine 90/90 breathing",null,"2×5",null,null,"Ribs down, feel obliques. Resets pelvic position.","supine 90 90 breathing"),
      M("Glute bridge","banded, 3s hold","2×10",null,null,"Band above knees, drive knees out. No lumbar extension.","banded glute bridge"),
      M("Side-lying clam","banded","2×12/side",null,null,"L-side first. Glute med, not hip flexor.","banded clamshell exercise"),
      M("Copenhagen plank","short lever","2×20s/side","RPE 5",null,"Monitor L-side tolerance. Building adductor resilience.","copenhagen plank short lever","L-adductor"),
      M("90/90 hip switches",null,"2×6/side",null,null,"Hip IR/ER. Don't force end range.","90/90 hip switch mobility"),
      M("Goblet squat","elevated heel, 3s pause","2×6","RPE 4","16","Knees track over toes. Feel glutes in the hole. Cue stacking.","goblet squat heel elevated"),
    ]},
    {t:"Main",items:[
      M("Squat","SSB or high-bar, 3-0-2","3×8","50% / RPE 5","100","Controlled bracing. Spread the floor, drive knees out. Above pain-free depth, no deep low-bar.","high bar squat tempo"),
      M("Romanian deadlift","conv, 3-0-1","3×8","45% / RPE 5","100","Hinge, don't pull. Feel hamstrings load. Off-floor — protects lower back.","romanian deadlift form"),
      M("Walking lunge",null,"3×10/leg","RPE 5","12.5","DBs. Front-leg glute does the work.","dumbbell walking lunge"),
      M("Leg curl",null,"3×12",null,"35","Full ROM.","lying leg curl"),
      M("Single-leg calf raise",null,"2×15",null,"BW","2s pause at top.","single leg calf raise"),
    ]},
  ]},
  {id:"upper",jp:"上半身",name:"Upper",focus:"Rear delt + scap stability to protect front delt",blocks:[
    {t:WARM,items:[
      M("Prone Y-T-W raises",null,"2×6/letter",null,null,"Face down on bench. Slow, feel scap retractors.","prone ytw raises"),
      M("Serratus wall slides","foam roller","2×8",null,null,"Upward rotation patterning.","serratus wall slide"),
      M("Banded external rotation",null,"2×12",null,null,"Tuck elbow, 90° abduction. Don't crank — own the range.","banded external rotation shoulder"),
      M("Band pull-aparts",null,"2×15",null,null,"Rear delt focus. Squeeze at end range 1s.","band pull apart"),
      M("Face pull","light","1×15",null,"10","Ext-rotate at top. Priming rear delts before pressing.","face pull"),
    ]},
    {t:"Main",items:[
      M("Bench press","2-1-1","3×8","50% / RPE 5","70","Shoulder blades pinned, rear delts into bench. Controlled.","bench press setup"),
      M("DB incline press",null,"3×10","RPE 5","20","Full stretch at bottom. Not front-delt dominant.","dumbbell incline press"),
      M("Chest-supported row",null,"3×10","RPE 5","30","Hold peak 1s. Rear delt + mid-trap emphasis.","chest supported row"),
      M("DB shoulder press","seated","3×10","RPE 5","15","Slight incline if front delt irritable.","seated dumbbell shoulder press","front-delt"),
      M("Face pull",null,"2×15",null,"15","Structural work, not fluff.","face pull"),
      M("Tricep pushdown",null,"2×15",null,null,"Pump work.","tricep pushdown"),
    ]},
  ]},
  {id:"full",jp:"全身",name:"Full Body",focus:"Re-pattern hinge + squat, low fatigue, movement quality",blocks:[
    {t:WARM,items:[
      M("90/90 breathing",null,"2×5",null,null,"Reset.","supine 90 90 breathing"),
      M("Copenhagen plank","short lever","2×20s/side","RPE 5",null,"Adductor.","copenhagen plank short lever","L-adductor"),
      M("Banded crab walks",null,"2×10 each way",null,null,"Glute med, knees out.","banded crab walk"),
    ]},
    {t:"Main",items:[
      M("Trap-bar deadlift","from blocks","3×6","RPE 5","120","High handles. Hinge pattern without floor demand on lower back.","trap bar deadlift"),
      M("Landmine press",null,"3×8/side","RPE 5","20","Closed-chain, scap-friendly. Front-delt safe.","landmine press","front-delt"),
      M("Goblet squat","3s pause","3×8","RPE 5","20","Own the bottom. Knees out.","goblet squat"),
      M("Single-arm row",null,"3×10/side",null,"30","Full stretch and squeeze.","single arm dumbbell row"),
      M("Pallof press","tempo 5-3-5","3×10/side",null,null,"Anti-rotation core. Red band.","pallof press"),
      M("Bicep curl","incline","3×12",null,"7.5","Alternating.","incline dumbbell curl"),
    ]},
  ]},
];

/* ----- Representative weeks for Meso 2-5 (templates) ----- */
const m2w1 = [
  {id:"lower-a",jp:"下A",name:"Lower A — Squat focus",focus:"Paused comp squat, hypertrophy volume",blocks:[
    {t:WARM,items:[M("Copenhagen plank","short","2×25s/side","RPE 6",null,"Adductor.","copenhagen plank short lever","L-adductor"),M("90/90 + hip airplane",null,"2 rounds",null,null,"Mobility primer.","hip airplane")]},
    {t:"Main",items:[
      M("Competition squat","paused","4×6","RPE 6-7","150","Comp stance returns. Pause builds control through L-adductor range.","paused squat"),
      M("Hack squat",null,"3×10","RPE 7","—","Quad volume.","hack squat"),
      M("RDL",null,"3×8","RPE 7","120","Hamstring/posterior.","romanian deadlift"),
      M("Leg press","feet high","3×12","RPE 7","—","Glute/ham bias.","leg press"),
      M("Single-leg glute bridge","R bias","2×12","RPE 6",null,"Asymmetry.","single leg glute bridge"),
    ]},
  ]},
  {id:"upper-a",jp:"上A",name:"Upper A — Bench focus",focus:"Flat bench, pressing volume, rear delt",blocks:[
    {t:WARM,items:[M("Y-T-W + band pull-apart",null,"2 rounds",null,null,"Scap prime.","prone ytw"),M("Banded ext rotation",null,"2×12",null,null,"Cuff.","banded external rotation")]},
    {t:"Main",items:[
      M("Bench press","comp grip","4×6","RPE 6-7","85","Flat barbell standard now.","bench press"),
      M("Incline DB press",null,"3×10","RPE 7","24","Upper chest.","incline dumbbell press"),
      M("Chest-supported row",null,"4×10","RPE 7","35","Back volume.","chest supported row"),
      M("DB shoulder press",null,"3×10","RPE 7","18","Slight incline if needed.","seated dumbbell shoulder press","front-delt"),
      M("Face pull + curls",null,"3×15",null,null,"Structural + arms.","face pull"),
    ]},
  ]},
  {id:"lower-b",jp:"下B",name:"Lower B — Pull focus",focus:"Conventional pull reintroduced, posterior",blocks:[
    {t:WARM,items:[M("Copenhagen + crab walk",null,"2 rounds",null,null,"Adductor + glute med.","copenhagen plank")]},
    {t:"Main",items:[
      M("Conventional deadlift","from floor","3×5","RPE 6-7","180","Floor pull returns if back is quiet. Otherwise block pull.","conventional deadlift"),
      M("Front squat","heel elevated","3×8","RPE 7","90","Vertical torso, less adductor demand.","front squat"),
      M("Pendulum / hack squat",null,"3×12","RPE 7","—","Quad.","pendulum squat"),
      M("Nordic / leg curl",null,"3×8","RPE 7","—","Hamstring eccentric.","nordic hamstring curl"),
      M("Plyo: pogo hops","wk7-8","2×20",null,null,"Low amplitude. Tendon stiffness primer.","pogo hops plyometric"),
    ]},
  ]},
  {id:"upper-b",jp:"上B",name:"Upper B — Volume",focus:"Hypertrophy accessories, paused bench",blocks:[
    {t:WARM,items:[M("Scap + cuff prime",null,"2 rounds",null,null,"Shoulder health.","band pull apart")]},
    {t:"Main",items:[
      M("Paused bench",null,"3×6","RPE 7","80","Control off chest.","paused bench press"),
      M("Overhead press",null,"3×8","RPE 7","45","Vertical press.","overhead press"),
      M("Lat pulldown",null,"3×12","RPE 7","—","Width.","lat pulldown"),
      M("Cable row",null,"3×12","RPE 7","—","Mid-back.","seated cable row"),
      M("Lateral raise + triceps",null,"3×15",null,null,"Delts + arms.","lateral raise"),
      M("Dips (bodyweight)","optional","2×8-10","RPE 7",null,"Tolerance test ONLY if front delt is quiet. Stop above parallel — don't sink into the bottom. Skip entirely if any shoulder complaint, no loss.","parallel bar dips form","front-delt"),
    ]},
  ]},
];
const m3w1 = [
  {id:"sq",jp:"スク",name:"Squat Day",focus:"Top double RPE7-8 + fatigue back-offs",blocks:[
    {t:WARM,items:[M("Comp warm-up ramp",null,"to openers",null,null,"Build to top set. Brief Valsalva now permitted (1-2s).","squat warm up")]},
    {t:"Main",items:[
      M("Competition squat","top double","1×2 + 4×3","RPE 7-8 / 8% drop","190","Top double, then 4 triples at fatigue %.","competition squat"),
      M("Paused squat","secondary","3×4","RPE 6-7","160","Eccentric ownership through bottom range.","paused squat"),
      M("Bulgarian split squat",null,"3×8","RPE 7","—","Unilateral, R-bias check.","bulgarian split squat"),
      M("Leg curl + calf",null,"3×12",null,null,"Accessory.","leg curl"),
    ]},
  ]},
  {id:"bp",jp:"ベン",name:"Bench Day",focus:"Top double + back-offs",blocks:[
    {t:WARM,items:[M("Bench ramp + cuff",null,"to openers",null,null,"Build to top set.","bench warm up")]},
    {t:"Main",items:[
      M("Competition bench","top double","1×2 + 4×3","RPE 7-8 / 6% drop","105","Top double then triples.","competition bench"),
      M("Close-grip bench","secondary","3×6","RPE 7","85","Triceps + lockout.","close grip bench press"),
      M("Larsen press","feet up","3×6","RPE 6-7","75","No leg drive — exposes stabilisers and removes the L-leg-drive asymmetry. Quietly corrective for the shoulder. Run in 3-4 wk blocks.","larsen press bench"),
      M("Chest-supported row",null,"4×10","RPE 7","—","Back volume.","chest supported row"),
      M("Delts + triceps",null,"3×15",null,null,"Accessory.","lateral raise"),
    ]},
  ]},
  {id:"dl",jp:"デッ",name:"Deadlift Day",focus:"Heavy single/double, lowest CV-risk frequency",blocks:[
    {t:WARM,items:[M("Hinge prime + ramp",null,"to openers",null,null,"Build carefully. Deadlift is most CV-taxing — respect it.","deadlift warm up")]},
    {t:"Main",items:[
      M("Competition deadlift","top double","1×2 + 3×3","RPE 7-8 / 8% drop","210","Top double then triples.","competition deadlift"),
      M("Deficit deadlift","2-3cm only","3×3","RPE 6-7","180","Small deficit — not aggressive, protects lower back.","deficit deadlift"),
      M("Front squat",null,"3×6","RPE 7","—","Quad + torso.","front squat"),
      M("Back ext + core",null,"3×12",null,null,"Accessory.","back extension"),
    ]},
  ]},
  {id:"up",jp:"上体",name:"Upper Accessory",focus:"Volume + structural balance",blocks:[
    {t:WARM,items:[M("Scap + cuff",null,"2 rounds",null,null,"Shoulder health.","band pull apart")]},
    {t:"Main",items:[
      M("Incline bench",null,"4×8","RPE 7","—","Upper chest.","incline bench press"),
      M("Pull-ups / pulldown",null,"4×8","RPE 7","—","Vertical pull.","pull ups"),
      M("DB press + row superset",null,"3×12",null,null,"Push/pull volume.","dumbbell row"),
      M("Arms + rear delt",null,"3×15",null,null,"Detail.","face pull"),
    ]},
  ]},
];
const m4w1 = [
  {id:"sq",jp:"スク",name:"Squat — Heavy",focus:"RPE 8.5-9 top set + strict back-offs",blocks:[
    {t:WARM,items:[M("Ramp to heavy single",null,"singles",null,null,"Full Valsalva, no restriction.","squat warm up")]},
    {t:"Main",items:[
      M("Competition squat","heavy top","1×1 @ RPE9 + 3×3","8-10% drop","212","~85% expression.","competition squat"),
      M("Pin squat / paused",null,"3×3","RPE 8","—","Sticking-point strength.","pin squat"),
      M("Accessory legs",null,"3×10",null,null,"Maintain volume.","leg press"),
    ]},
  ]},
  {id:"bp",jp:"ベン",name:"Bench — Heavy",focus:"Top set RPE 8.5-9",blocks:[
    {t:WARM,items:[M("Ramp to heavy",null,"singles",null,null,"Build.","bench warm up")]},
    {t:"Main",items:[
      M("Competition bench","heavy top","1×1 @ RPE9 + 3×3","6-8% drop","119","~85% expression.","competition bench"),
      M("Spoto / close-grip",null,"3×4","RPE 8","—","Control + lockout.","spoto press"),
      M("Weighted dips","front-delt cleared","3×6-8","RPE 7-8","+load","Now a real strength accessory IF the shoulder held clean through bodyweight dips in M2-3. Control depth to ~parallel, build load slowly. Mass + lockout for the bench.","weighted dips","front-delt"),
      M("Larsen press","optional block","3×5","RPE 7","—","Carry over from M3 if still productive — raw off-chest drive without leg assistance.","larsen press bench"),
      M("Back + delts",null,"4×10",null,null,"Volume.","chest supported row"),
    ]},
  ]},
  {id:"sq2",jp:"スク2",name:"Squat Variation + Bench 2",focus:"Second exposure, moderate",blocks:[
    {t:WARM,items:[M("Mobility + ramp",null,"—",null,null,"Primer.","squat warm up")]},
    {t:"Main",items:[
      M("Tempo / paused squat",null,"4×4","RPE 7-8","—","Second squat exposure.","tempo squat"),
      M("Bench (volume)",null,"4×6","RPE 7-8","—","Second bench exposure.","bench press"),
      M("Accessories",null,"3×12",null,null,"Detail work.","lateral raise"),
    ]},
  ]},
  {id:"dl",jp:"デッ",name:"Deadlift — Heavy",focus:"Single heavy exposure/week",blocks:[
    {t:WARM,items:[M("Hinge ramp",null,"singles",null,null,"Most CV-taxing lift — once/week heavy.","deadlift warm up")]},
    {t:"Main",items:[
      M("Competition deadlift","heavy top","1×1 @ RPE9 + 2×3","8-10% drop","238","~85% expression.","competition deadlift"),
      M("Block / deficit pull",null,"3×3","RPE 7-8","—","Position strength.","block pull deadlift"),
      M("Back + core",null,"3×10",null,null,"Accessory.","back extension"),
    ]},
  ]},
];
const m5w1 = [
  {id:"peak1",jp:"頂1",name:"Squat — Peak",focus:"Taper: intensity up, volume down",blocks:[
    {t:WARM,items:[M("Ramp",null,"singles",null,null,"Fork A only if fully cleared + asymptomatic.","squat warm up")]},
    {t:"Main",items:[
      M("Competition squat","opener/second","1×1 ×2-3","RPE 8-9","225","90-95% of old PR territory. Don't chase beyond.","competition squat"),
      M("Light back-off",null,"2×2","RPE 7","—","Maintain pattern.","squat"),
    ]},
  ]},
  {id:"peak2",jp:"頂2",name:"Bench — Peak",focus:"Openers and second attempts",blocks:[
    {t:WARM,items:[M("Ramp",null,"singles",null,null,"Sharpen.","bench warm up")]},
    {t:"Main",items:[M("Competition bench","attempts","1×1 ×2-3","RPE 8-9","128","Attempt selection practice.","competition bench"),M("Back-off",null,"2×3","RPE 7","—","Volume.","bench press")]},
  ]},
  {id:"peak3",jp:"頂3",name:"Deadlift — Peak",focus:"Minimal volume, max sharpness",blocks:[
    {t:WARM,items:[M("Ramp",null,"singles",null,null,"Careful build.","deadlift warm up")]},
    {t:"Main",items:[M("Competition deadlift","attempts","1×1 ×2","RPE 8-9","255","Openers + second.","competition deadlift")]},
  ]},
];

/* ----- Meso definitions ----- */
function repWeeks(w1, n, prog){
  // build n weeks: week1 detailed, rest reference w1 with progression notes
  const out=[{id:"w1",jp:"1週",label:prog[0]||"Build",focus:prog[0]||"",sessions:w1, note:null}];
  for(let i=2;i<=n;i++){
    out.push({id:"w"+i,jp:i+"週",label:prog[i-1]||("Week "+i),focus:prog[i-1]||"",sessions:w1,
      note:`Same session structure as Week 1, progressed: ${i<n?"load/volume up ~3-5%, RPE ceiling held.":"deload — volume down ~40%, intensity maintained, used to assess."}`});
  }
  return out;
}

/* ===== Detailed later-meso builder =====
   Fixed movements per meso; loads/reps/RPE progress across weeks (deload = last week).
   genMeso() expands canonical sessions into fully-populated weeks. */
const _w = (s,r,k)=>({s,r,k});                                   // a main lift's week prescription
const _mm = (n,v,q,nt,flag,wk)=>({n,v,yt:q?yt(q):null,nt:nt||"",flag:flag||undefined,wk});   // main movement
const _ac = (n,sets,reps,r,nt,q,flag,k)=>({n,sets,reps,r,nt:nt||"",yt:q?yt(q):null,flag:flag||undefined,k:k||undefined}); // accessory

/* warm-up templates by day type — static every week, corrective work threaded in */
const WU = {
  squat:[
    M("Bike or row — easy","warm-up","3–5 min",null,null,"Raise core temp. Nasal breathing.",null),
    M("90/90 hip switches",null,"2×6/side",null,null,"Hip IR/ER. Don't force end range.","90/90 hip switch mobility"),
    M("Banded clamshells",null,"2×15/side",null,null,"Glute med prime. L-side first.","banded clamshell exercise"),
    M("Adductor rockback",null,"2×8/side",null,null,"Gentle loaded adductor stretch — preps the bottom. Stop short of strain.","adductor rockback mobility","L-adductor"),
    M("Copenhagen plank","short lever","2×20s/side","RPE 6",null,"Adductor resilience — carries into squat.","copenhagen plank short lever","L-adductor"),
    M("Spanish squat","warm hold","1×30s","RPE 5",null,"Knee/tendon prime. Shallow if R-knee grumbles.","spanish squat isometric","R-knee"),
    M("Bar ramp to top set",null,"as needed",null,null,"Progressive singles to the day's opener.",null),
  ],
  bench:[
    M("Band pull-aparts",null,"2×15",null,null,"Rear delt / scap warm.","band pull apart"),
    M("Prone Y-T-W",null,"2×6/letter",null,null,"Scap retractors + upward rotators.","prone ytw raises"),
    M("Banded external rotation",null,"2×12/side",null,null,"Cuff. Own the range, don't crank.","banded external rotation shoulder"),
    M("Serratus wall slide","foam roller","2×8",null,null,"Front-delt-protective scap patterning.","serratus wall slide","front-delt"),
    M("Cable face pull","light","1×20",null,null,"Prime rear delts before pressing.","face pull cable"),
    M("Landmine press","empty→light","2×8/side",null,null,"Groove the press on a scap-friendly ramp.","landmine press","front-delt"),
  ],
  sumo:[
    M("Bike or row — easy","warm-up","3–5 min",null,null,"Raise core temp.",null),
    M("90/90 + R-hip IR drill","R-focus","2×8/side",null,null,"Sumo lives on hip IR — prime it.","90/90 hip internal rotation"),
    M("Adductor rockback",null,"2×8/side",null,null,"Preps the stretched sumo bottom. Stop short of strain.","adductor rockback mobility","L-adductor"),
    M("Copenhagen plank","short lever","2×20s/side","RPE 6",null,"Adductor — direct sumo carryover.","copenhagen plank short lever","L-adductor"),
    M("Sumo-stance BW squat","to depth","2×5",null,null,"Groove the stance. Gentle adductor loading.","sumo squat bodyweight"),
    M("Banded glute bridge",null,"2×10",null,null,"Posterior prime, knees out.","banded glute bridge"),
    M("Posterior knee desensitisation",null,"5 min",null,null,"Ongoing R-knee. Sub-threshold pressure, pain ≤3/10.","tennis ball self massage calf knee","R-knee"),
    M("Sumo ramp to top set",null,"as needed",null,null,"Blocks early in the meso, floor once back + adductor are quiet.",null),
  ],
  upper:[
    M("Band pull-aparts",null,"2×15",null,null,"Scap warm.","band pull apart"),
    M("Prone Y-T-W",null,"2×6/letter",null,null,"Scap.","prone ytw raises"),
    M("Banded external rotation",null,"2×12/side",null,null,"Cuff health.","banded external rotation shoulder"),
    M("Cable face pull","light","1×20",null,null,"Rear delt prime.","face pull cable"),
  ],
};

function _accItem(a, deload){
  let sets = a.sets, nt = a.nt || "";
  if (deload){ sets = Math.max(1, a.sets - 1); nt = (nt ? nt + " " : "") + "· deload: −1 set"; }
  return { n:a.n, v:a.v, s:sets + "×" + a.reps, r:a.r, k:a.k || "—", nt, yt:a.yt, flag:a.flag };
}
function genMeso(sessions, labels){
  return labels.map((label, wi) => {
    const deload = (wi === labels.length - 1);
    return {
      id:"w" + (wi+1), jp:(wi+1) + "週", label, focus:"", note:null,
      sessions: sessions.map(s => ({
        id:s.id, jp:s.jp, name:s.name, focus:s.focus,
        blocks:[
          { t:WARM, items: (typeof s.wu === "string" ? WU[s.wu] : s.wu) },
          { t:"Main", items: s.main.map(m => { const w = m.wk[wi]; return {n:m.n,v:m.v,s:w.s,r:w.r,k:w.k,nt:m.nt,yt:m.yt,flag:m.flag}; }) },
          { t:"Accessories", items: s.acc.map(a => _accItem(a, deload)) }
        ]
      }))
    };
  });
}

/* ---------- MESO 2 — Power-Building Hypertrophy (sumo reintroduced) ---------- */
const m2Sessions = [
  { id:"lower-a", jp:"下A", name:"Lower A — Squat focus", focus:"Paused comp squat + spine-sparing leg volume", wu:"squat",
    main:[
      _mm("Competition squat","paused","paused squat","Comp stance. 2s pause — control through the L-adductor range.","L-adductor",
        [_w("4×6","RPE 6","150"),_w("4×6","RPE 6-7","155"),_w("5×5","RPE 7","160"),_w("3×5","RPE 6","140")]),
    ],
    acc:[
      _ac("Belt squat",3,12,"RPE 7-8","Leg volume, zero spinal load — ideal the day after pulling.","belt squat"),
      _ac("Hack squat",3,10,"RPE 8","Quads through full range.","hack squat"),
      _ac("Seated leg curl",3,12,"RPE 8","Hamstrings, full ROM.","seated leg curl"),
      _ac("Reverse hyper",3,15,"RPE 7","Light–moderate, controlled (not ballistic). Posterior chain + decongests the lower back.","reverse hyper"),
      _ac("Standing calf raise",3,15,"RPE 8","2s pause at top.","standing calf raise"),
    ] },
  { id:"upper-a", jp:"上A", name:"Upper A — Bench focus", focus:"Flat bench volume + rear-delt/back balance", wu:"bench",
    main:[
      _mm("Competition bench",null,"competition bench press","Shoulder blades pinned, controlled tempo.",null,
        [_w("4×6","RPE 6","85"),_w("4×6","RPE 6-7","88"),_w("5×5","RPE 7","90"),_w("3×5","RPE 6","78")]),
    ],
    acc:[
      _ac("Incline DB press",3,10,"RPE 8","Upper chest, full stretch at the bottom.","incline dumbbell press","front-delt"),
      _ac("Chest-supported row",4,10,"RPE 8","Hold peak 1s. Rear delt + mid-trap.","chest supported row"),
      _ac("Landmine press",3,8,"RPE 7","Front-delt-safe overhead-ish press.","landmine press","front-delt","/side"),
      _ac("Lat pulldown",3,12,"RPE 8","Width.","lat pulldown"),
      _ac("Cable lateral raise",3,15,"RPE 8","Side delts.","cable lateral raise"),
      _ac("Cable triceps pushdown",3,15,"RPE 8","Pump.","cable triceps pushdown"),
    ] },
  { id:"lower-b", jp:"下B", name:"Lower B — Sumo pull", focus:"Sumo reintroduction (blocks → floor) + posterior size", wu:"sumo",
    main:[
      _mm("Sumo deadlift","blocks → floor","sumo deadlift","Reintroduce from 2in blocks (wk1) → 1in (wk2) → floor (wk3) only if back + adductor are quiet. Watch the L-adductor in the bottom.","L-adductor",
        [_w("4×5","RPE 6","160 · 2in blocks"),_w("4×5","RPE 6-7","170 · 1in blocks"),_w("4×5","RPE 7","180 · floor"),_w("3×5","RPE 6","150")]),
    ],
    acc:[
      _ac("Romanian deadlift",3,8,"RPE 7-8","Main posterior-chain size builder. Stance-agnostic.","romanian deadlift"),
      _ac("Belt squat",3,12,"RPE 7","Leg volume without stacking spinal load.","belt squat"),
      _ac("Nordic curl","(reverse-hyper station)",6,"RPE 8","Eccentric hamstring — assist with hands as needed.","nordic hamstring curl",undefined,"3"),
      _ac("Seated cable row",3,12,"RPE 8","Upper back.","seated cable row"),
      _ac("Cable crunch",3,12,"RPE 8","Trunk.","cable crunch"),
    ] },
  { id:"upper-b", jp:"上B", name:"Upper B — Volume", focus:"Paused bench + hypertrophy accessories", wu:"upper",
    main:[
      _mm("Paused bench",null,"paused bench press","Control off the chest.",null,
        [_w("3×6","RPE 6","80"),_w("3×6","RPE 6-7","83"),_w("4×5","RPE 7","85"),_w("3×5","RPE 6","74")]),
    ],
    acc:[
      _ac("Seated DB shoulder press",3,8,"RPE 7","Delts. Slight incline if front delt is irritable.","seated dumbbell shoulder press","front-delt"),
      _ac("Dips (bodyweight)","optional",8,"RPE 7","Tolerance test ONLY if front delt is quiet. Stop above parallel. Skip on any complaint.","parallel bar dips","front-delt","2"),
      _ac("Chest-supported row",3,12,"RPE 8","Mid-back.","chest supported row"),
      _ac("Incline DB curl",3,12,"RPE 8","Biceps.","incline dumbbell curl"),
      _ac("Cable lateral raise",3,15,"RPE 8","Delts.","cable lateral raise"),
      _ac("Reverse hyper",2,15,"RPE 6","Light — back health.","reverse hyper"),
    ] },
];

/* ---------- MESO 3 — Strength Reintroduction (sumo) ---------- */
const m3Sessions = [
  { id:"sq", jp:"スク", name:"Squat Day", focus:"Top double @7-8 + fatigue back-offs", wu:"squat",
    main:[
      _mm("Competition squat","top double + back-offs","competition squat","Top double, then triples at ~8% off. Full Valsalva now standard.",null,
        [_w("1×2 + 4×3","RPE 7 · 8% drop","190"),_w("1×2 + 4×3","RPE 7-8","195"),_w("1×2 + 4×3","RPE 8","200"),_w("1×2 + 2×3","RPE 6-7","175")]),
      _mm("Paused squat","secondary","paused squat","Eccentric ownership through the bottom.","L-adductor",
        [_w("3×4","RPE 6-7","160"),_w("3×4","RPE 7","163"),_w("3×4","RPE 7-8","167"),_w("2×4","RPE 6","148")]),
    ],
    acc:[
      _ac("Belt squat",3,12,"RPE 7-8","Leg volume, spine-sparing.","belt squat"),
      _ac("Bulgarian split squat",3,8,"RPE 7","Unilateral, R-side check. Front foot forward — pain-free knee range.","bulgarian split squat","R-knee","/side"),
      _ac("Seated leg curl",3,12,"RPE 8","Hamstrings.","seated leg curl"),
      _ac("Reverse hyper",3,15,"RPE 7","Posterior + back decongestion, controlled.","reverse hyper"),
    ] },
  { id:"bp", jp:"ベン", name:"Bench Day", focus:"Top double + back-offs, secondary variations", wu:"bench",
    main:[
      _mm("Competition bench","top double + back-offs","competition bench press","Top double then triples at ~6% off.",null,
        [_w("1×2 + 4×3","RPE 7 · 6% drop","105"),_w("1×2 + 4×3","RPE 7-8","108"),_w("1×2 + 4×3","RPE 8","110"),_w("1×2 + 2×3","RPE 6-7","98")]),
      _mm("Close-grip bench","secondary","close grip bench press","Triceps + lockout.",null,
        [_w("3×6","RPE 7","85"),_w("3×6","RPE 7","87"),_w("3×6","RPE 7-8","90"),_w("2×6","RPE 6","78")]),
      _mm("Larsen press","block — feet up","larsen press bench","No leg drive — exposes stabilisers, removes the L-leg-drive asymmetry. Run in 3-4wk blocks.",null,
        [_w("3×6","RPE 6-7","75"),_w("3×6","RPE 7","77"),_w("3×6","RPE 7","80"),_w("2×6","RPE 6","68")]),
    ],
    acc:[
      _ac("Chest-supported row",4,10,"RPE 8","Back volume.","chest supported row"),
      _ac("Landmine press",3,8,"RPE 7","Front-delt-safe.","landmine press","front-delt","/side"),
      _ac("Cable lateral raise",3,15,"RPE 8","Delts.","cable lateral raise"),
      _ac("Cable triceps pushdown",3,15,"RPE 8","Triceps.","cable triceps pushdown"),
    ] },
  { id:"dl", jp:"デッ", name:"Deadlift Day — Sumo", focus:"Heavy sumo double + deficit work (lowest CV-risk frequency)", wu:"sumo",
    main:[
      _mm("Competition sumo","top double + back-offs","sumo deadlift","Top double then triples at ~8% off. Once/week heavy. Watch the adductor in the bottom.","L-adductor",
        [_w("1×2 + 3×3","RPE 7 · 8% drop","200"),_w("1×2 + 3×3","RPE 7-8","210"),_w("1×2 + 3×3","RPE 8","220"),_w("1×2 + 2×3","RPE 6-7","185")]),
      _mm("Deficit sumo","2–3cm deficit","deficit sumo deadlift","Builds the off-floor position — the usual sumo sticking point. Small deficit only, protects the back.","L-adductor",
        [_w("3×3","RPE 6-7","180"),_w("3×3","RPE 7","185"),_w("3×3","RPE 7","190"),_w("2×3","RPE 6","165")]),
    ],
    acc:[
      _ac("Front squat",3,6,"RPE 7","Quad + torso. Swap to belt squat if the back's had enough.","front squat"),
      _ac("Romanian deadlift",3,8,"RPE 7","Posterior-chain size.","romanian deadlift"),
      _ac("Nordic curl",3,6,"RPE 8","Eccentric hamstring.","nordic hamstring curl"),
      _ac("Reverse hyper",3,12,"RPE 7","Back health, controlled.","reverse hyper"),
    ] },
  { id:"up", jp:"上体", name:"Upper Accessory", focus:"Pressing + pulling volume, structural balance", wu:"upper",
    main:[
      _mm("Incline bench",null,"incline bench press","Upper-chest strength.",null,
        [_w("4×8","RPE 7","80"),_w("4×8","RPE 7","82"),_w("4×8","RPE 7-8","85"),_w("3×8","RPE 6","72")]),
      _mm("Pull-ups","or lat pulldown","pull ups","Vertical pull. Add load when 4×8 is easy.",null,
        [_w("4×8","RPE 7","BW"),_w("4×8","RPE 7","BW+"),_w("4×8","RPE 7-8","BW+"),_w("3×8","RPE 6","BW")]),
    ],
    acc:[
      _ac("Seated DB shoulder press",3,10,"RPE 7","Delts. Slight incline if front delt irritable.","seated dumbbell shoulder press","front-delt"),
      _ac("Chest-supported row",3,12,"RPE 8","Mid-back.","chest supported row"),
      _ac("Cable lateral raise",3,15,"RPE 8","Delts.","cable lateral raise"),
      _ac("Incline DB curl",3,12,"RPE 8","Biceps.","incline dumbbell curl"),
      _ac("Cable face pull",3,20,"RPE 7","Rear delt / structural.","face pull cable"),
    ] },
];

const PROG = {
  meta:{lifter:"32y · 81kg class",total:"670kg",best:"250 / 140 / 280",dx:"Pericarditis (viral)",med:"Colchicine · 1-3mo"},
  mesos:[
    {
      id:"m0",code:"M0",jp:"基礎",name:"Interim Recovery",sub:"Reconditioning before loading",
      dates:"4 weeks · pre-programme",span:"now",accent:"teal",
      intent:"This is not a strength block. The job is to rebuild aerobic base, desensitise the R-knee, build adductor resilience, and re-pattern the hips — and to finish each day asymptomatic. Walking + breathwork + Copenhagen plank are the daily anchors; everything else rotates by theme so no day runs long.",
      goals:["Re-establish Zone 2 aerobic base (cardiac remodelling)","Begin R-knee desensitisation — raise pain threshold","Build L-adductor eccentric capacity (Copenhagen)","Open R-hip IR/flexion to unload the L-adductor","Daily autonomic downregulation via breathwork"],
      cardiac:"Clean stress test to 180 bpm, no symptoms — HR cap removed. Train cardio in normal zones. Still on colchicine (active treatment): any chest pain, palpitations, breathlessness or unusual fatigue = stop and contact cardiology.",
      caps:[["Cardio","Z2 base"],["Top RPE","5-6"],["Valsalva","none"],["Sessions","7/wk themed"]],
      weeks:(function(){
        const s=m0Sessions();
        const labels=["Reintroduction","Build","Build+","Consolidate / Assess"];
        const out=[];
        for(let i=1;i<=4;i++){
          out.push({id:"w"+i,jp:i+"週",label:labels[i-1],focus:"",sessions:s,
            note:i===1?null:`Same themed days, progressed: ${i<4?"walks +5 min, Copenhagen +5s/side, hold quality up.":"hold steady, log threshold changes, decide if Meso 1 starts on schedule."}`});
        }
        return out;
      })()
    },
    {
      id:"m1",code:"M1",jp:"再建",name:"Reconditioning & Reintegration",sub:"Loaded movement at tissue tolerance",
      dates:"Weeks 1-4 · ~22 Jun",span:"4 wk",accent:"acc",
      intent:"Reintroduce loaded movement at submaximal intensities. Bias unilateral work for the R-side deficit. Joint-friendly selection throughout: box/SSB squats above pain-free depth, trap-bar and block pulls (no floor yet), landmine and incline pressing for the front delt. Success = completed asymptomatic with rising readiness, not weight on the bar.",
      goals:["Restore work capacity & movement quality under load","Keep pulling OFF the floor (protect lower back)","Front-delt-safe pressing progression (landmine → incline → flat)","Continue tendon prep from Meso 0","Close L/R asymmetry with unilateral bias"],
      cardiac:"HR cap removed after the clean stress test — cardio in normal zones. Brief Valsalva (1-2s at the sticking point) now cleared; default exhale-on-exertion for lighter/accessory work. Keep logging readiness; finish the colchicine course.",
      caps:[["Cardio","Z2-Z3"],["Top RPE","6"],["Valsalva","brief OK"],["Freq","2→3→4/wk"]],
      targets:"End-of-meso ceilings (not goals): box squat ~100×8 @6 · bench ~70×8 @6 · trap-bar (blocks) ~140×6 @6.",
      weeks:(function(){
        const labels=["Reintroduction","Build","Build+","Deload / Assess"];
        const out=[{id:"w1",jp:"1週",label:labels[0],focus:"",sessions:m1w1,note:null}];
        for(let i=2;i<=4;i++) out.push({id:"w"+i,jp:i+"週",label:labels[i-1],focus:"",sessions:m1w1,
          note:i<4?"Same sessions, +1-2 reps or small load bump, RPE 6 held. 4th session added as frequency builds.":"Deload: volume down, RPE ≤5, conventional pull may be tested very light if back is quiet."});
        return out;
      })()
    },
    {
      id:"m2",code:"M2",jp:"増量",name:"Power-Building Hypertrophy",sub:"Reclaim lost muscle mass",
      dates:"Weeks 5-8 · ~20 Jul",span:"4 wk",accent:"acc",
      intent:"Bias size — strength returns faster than mass, so build the tissue first. JoeyFlexx-style high-frequency submaximal exposure to competition patterns. Comp squat returns paused; flat bench standard; sumo pull reintroduced off blocks then floor. Likely overlaps the end of the colchicine course — Valsalva builds toward full.",
      goals:["Hypertrophy priority: 14-20 sets/muscle/week","Re-introduce competition lifts as technique primaries","Sumo reintroduced blocks→floor; adductor watched in the bottom","Paused squats — control through the L-adductor range","Belt squat + reverse hyper carry leg volume off the spine"],
      cardiac:"Cardio in normal zones, intervals fine. Full Valsalva building on heavy compounds (stress test clean to 180). Default exhale-on-exertion for lighter work. Watch resting HR & HRV trends; complete the colchicine course.",
      caps:[["Top RPE","6-7"],["Valsalva","full, building"],["Plyo","low-amp wk7-8"],["Freq","4/wk"]],
      targets:"End-of-meso ballpark (~60% of old): comp squat ~150×5 @7 · bench ~85×5 @7 · sumo ~180×5 @7 (you've pulled 280 sumo before — this is a base, not a ceiling).",
      weeks:genMeso(m2Sessions,["Volume build","Volume build+","Peak volume","Deload"])
    },
    {
      id:"m3",code:"M3",jp:"筋力",name:"Strength Reintroduction",sub:"Translate tissue into strength",
      dates:"Weeks 9-12 · ~17 Aug",span:"4 wk",accent:"acc",
      intent:"First block that looks like a real powerlifting programme. Classic split — squat / bench / sumo deadlift / upper. Full RTS template: top single or double at RPE 7-8 then fatigue-percent back-offs. Secondary variations target weak points — paused squat, deficit sumo, Larsen press. Conditional on clean fitness test + colchicine course complete.",
      goals:["RTS fatigue-% back-offs drive volume","Top sets RPE 7-8 — earned, not scheduled","Sumo variations: deficit sumo builds the off-floor sticking point","Deadlift kept low-frequency (highest CV cost)","Larsen press blocks in on bench day"],
      cardiac:"Full Valsalva standard on heavy compounds (stress test clean). Deadlift is still the most CV-taxing lift — once/week heavy by choice, not by restriction. 4×4 intervals fine. Keep logging readiness.",
      caps:[["Top RPE","7-8"],["Valsalva","full"],["Cardio","2/wk + intervals"],["Freq","4/wk"]],
      targets:"End-of-meso ceilings (~75-80%): squat ~190-200 · bench ~105 · sumo ~220. Given your sumo history (280, ~290 conv), these should come back briskly — but let RPE, not ego, set the load.",
      gate:"GATE — mostly cleared: fitness test ✓ (clean to 180 bpm), Mesos 1-2 asymptomatic. Remaining condition: finish the colchicine course (or be in its final stretch with no symptom return) before this block's heavier work.",
      weeks:genMeso(m3Sessions,["Intro","Build","Overreach","Deload"])
    },
    {
      id:"m4",code:"M4",jp:"発揮",name:"Strength Expression",sub:"Express strength at higher intensity",
      dates:"Weeks 13-16 · ~14 Sep",span:"4 wk",accent:"acc",
      intent:"Mature RTS in full form. RPE 9 available on planned top sets once/week per lift; other sessions RPE 7-8. Specificity rises, variations narrow toward competition lifts. Squat and bench to 2×/week, deadlift stays 1× heavy.",
      goals:["RPE 8.5-9 top set once/week per lift","Strict fatigue-% back-offs","Variations narrow to competition lifts","Plyos shift to specific (box jumps, med-ball throws)","Corrective = pure maintenance"],
      cardiac:"Full Valsalva, no restriction — stress test clean to 180 bpm. CV adaptations baked in; cardio is maintenance only, recovery priority dominates. Still log readiness — a clean test is a snapshot, not a permanent pass.",
      caps:[["Top RPE","8.5-9"],["Valsalva","unrestricted"],["Cardio","maintenance"],["Freq","4/wk"]],
      targets:"End-of-meso ballpark (~85%): squat ~212 · bench ~119 · sumo ~238. Still deliberately shy of old maxes.",
      weeks:repWeeks(m4w1,4,["Build","Build+","Peak intensity","Deload"])
    },
    {
      id:"m5",code:"M5",jp:"頂点",name:"Peak / Consolidation",sub:"Two forks — choose at end of M4",
      dates:"Weeks 17-20 · ~12 Oct",span:"4 wk",accent:"warn",
      intent:"Forks on the picture at week 16. Fork A (Peak/Test): 3-week taper into a mock/sanctioned meet, only if fully cleared, fully asymptomatic, fitness test clean, colchicine done 4-6 wks prior. Fork B (Consolidation): continue M4 logic to RPE 9 singles ~87-92% without a true 1RM test — sets up a real PR-chase macro in Dec 2026-Mar 2027.",
      goals:["Fork A: taper, attempt selection, test 90-95% of old PRs","Fork B: RPE 9 singles, no max test, build the base","Default to Fork B unless everything is clean","Next macro (Q1 2027) is the real PR block"],
      cardiac:"Fork A requires cardiology endorsement of maximal effort. Any cardiac niggle across prior mesos → Fork B, no question.",
      caps:[["Fork A","peak + test"],["Fork B","consolidate"],["Default","Fork B"],["Next","Q1 2027 PR"]],
      targets:"Fork A targets: squat ~225-240 · bench ~125-135 · sumo ~250-270 (90-95% of old). Your best pulls were 280 sumo & ~290 conv — so the deadlift ceiling here is conservative and there's genuine PR headroom in the next macro. Anything above is a bonus, not the plan.",
      weeks:repWeeks(m5w1,4,["Taper 1","Taper 2","Peak / Test wk","Recover"])
    },
  ],
  goals:[
    {jp:"外反",area:"Knee Valgus Pattern",tag:"primary",problem:"Knees cave in under load; tibial internal rotation, medial arch (MLA) collapse, ankle pronation — the pattern in the standing photo.",why:"It reads as a foot problem but it's driven from the hip: weak posterior glute med and deep hip external rotators failing to control femoral internal rotation. The arch collapse is downstream.",fix:["Glute med + deep hip ER strength (clamshells → crab walks → side-lying abduction → SL-RDL)","Foot intrinsics: short-foot drill, single-leg balance","NOT orthotics — propping the arch passively just moves the problem upstream","Cue 'spread the floor, knees out' under the bar"],time:"6-10 weeks of consistent integration to see visible change."},
    {jp:"右膝",area:"R-Knee — Meniscectomy (2008)",tag:"managed",problem:"Failed repair then partial meniscectomy, near-zero rehab. Can't relax into kneeling — posterior pressure/pain (upper calf / lower hamstring). Gentle massage to the area is painful.",why:"Chronic protective guarding + nervous-system sensitisation in tissue that's been guarded 18 years. Likely loss of last 10-20° pain-free flexion (soft-tissue compression where the meniscus buffer used to be). Worth ruling out a Baker's cyst with a physio.",fix:["Daily desensitisation: sub-threshold touch/massage, pain ≤3/10, builds tolerance over weeks","Pain-free ROM only — heel slides, NOT forced kneeling","Strengthen around the painful range, expand it gradually","No kneeling movements; front-rack with dropped-bar escapes substituted"],time:"Track threshold weekly. If no change by 4 weeks → manual therapy / imaging."},
    {jp:"内転",area:"L-Adductor — Overdeveloped & Strain-Prone",tag:"managed",problem:"Hypertrophied L adductor that strains in the deepest part of the squat.",why:"Not really an adductor problem — a pattern problem. 18 years offloading the compromised R-knee shifted bottom-of-squat eccentric work to the L side. Restricted R-hip IR forces the L adductor to over-stabilise at end range. Strong but inflexible, weak through length.",fix:["Copenhagen plank (Harøy 2019: ~41% groin-injury reduction) — eccentric strength at length","Open R-hip IR/flexion to redistribute load","Paused squats build control through the strain range","Do NOT aggressively static-stretch it — reinforces the wrong story","Consider a slightly narrower comp stance"],time:"4-6 weeks of Copenhagen before squat reintroduction meets a stronger adductor."},
    {jp:"腰痛",area:"Lower Back Pain",tag:"managed",problem:"History of lower back pain under load.",why:"Floor-pull positional demand and bracing under fatigue are common drivers in returning lifters.",fix:["Pulling stays OFF the floor through Meso 1 (trap-bar + block pulls)","Hinge patterning with controlled tempo before adding load","Reassess at Meso 3 — reintroduce floor pulls if quiet; extend block-pull window if not","McGill-style bracing in warm-ups"],time:"Reassess at each meso boundary."},
    {jp:"足首",area:"Ankle Mobility",tag:"secondary",problem:"Limited dorsiflexion.",why:"DF restriction sabotages squat depth and reinforces the knee valgus pattern — the knee caves to find range the ankle won't give.",fix:["Daily DF work: banded distraction, weighted knee-to-wall","Calf stretch with rear foot turned slightly IN (addresses ER compensation)","Heel-elevated squat variations as a bridge while ankle opens"],time:"Small daily dose, disproportionate payoff. Ongoing."},
    {jp:"前肩",area:"Front Delt Pain",tag:"secondary",problem:"Anterior shoulder pain under pressing, stabilisation-related.",why:"Scap stability issue more than a delt-strength issue — the shelf isn't stable, so the front delt overworks.",fix:["Treat as scap stability: wall slides, Y-T-W, serratus work, face pulls daily","Pressing progression: landmine → incline DB → incline BB → flat DB → flat BB, one step/week","Hold a step if it complains — don't push through"],time:"Progress one pressing step per week; regress on any flare."},
  ]
};
  APP.WARM = WARM;
  APP.PROGRAMME = PROG;
  APP.yt = yt;
  APP.mesoBy = id => PROG.mesos.find(m => m.id === id);
})();
