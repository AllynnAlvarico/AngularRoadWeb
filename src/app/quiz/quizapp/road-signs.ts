type RoadSigns = {
  category: string;
  title: string;
  asset_source: string;
};
export class RoadData {
  path = 'images/';
  getData(): RoadSigns[] {
    return [
      {category: "Road Signs", title: "Dangerous corner ahead", asset_source: this.path + "sharp-curve-to-the-left.png"},
      {category: "Road Signs", title: "Roundabout ahead", asset_source: this.path + "roundabout.png"},
      {
        category: "Road Signs",
        title: "Mini-Roundabout ahead",
        asset_source: this.path + "Mini-roundabout-ahead-300x300.png"
      },
      {category: "Road Signs", title: "Merging Traffic", asset_source: this.path + "Merging-traffic.png"},
      {category: "Road Signs", title: "Two-way Traffic", asset_source: this.path + "Two-way-traffic.png"},
      {category: "Road Signs", title: "Dangerous bend ahead", asset_source: this.path + "Dangerous bend ahead.webp"},
      {
        category: "Road Signs",
        title: "Series of dangerous bends ahead",
        asset_source: this.path + "Series-of-dangerous-bends-ahead.webp"
      },
      {
        category: "Road Signs",
        title: "Series of dangerous corners ahead",
        asset_source: this.path + "Series-of-dangerous-corners-ahead.webp"
      },
      {category: "Road Signs", title: "Restricted headroom", asset_source: this.path + "Restricted-headroom.png"},
      {category: "Road Signs", title: "T-junction", asset_source: this.path + "T-junction-1.png"},
      // Junction Signs
      {category: "Junction Signs", title: "Crossroad", asset_source: this.path + "crossroads.png"},
      {category: "Junction Signs", title: "Side road", asset_source: this.path + "Sideroad.png"},
      {category: "Junction Signs", title: "T-junction", asset_source: this.path + "T-junction-1.png"},
      {category: "Junction Signs", title: "Y-junction", asset_source: this.path + "Y-junction-1.jpg"},
      {category: "Junction Signs", title: "Staggered crossroads", asset_source: this.path + "Staggered-crossroads.png"},
      // Advanced Warning Signs of Roads
      {
        category: "Advanced Warning Signs",
        title: "T-junction of a dual carriageway",
        asset_source: this.path + "T-junctions-of-a-dual-carriageway-300x300.png"
      },
      {
        category: "Advanced Warning Signs",
        title: "Crossroad with dual carriageway",
        asset_source: this.path + "Crossroads-with-dual-carriageway-300x300.png"
      },
      {category: "Advanced Warning Signs", title: "Crossroad", asset_source: this.path + "crossroads-1.png"},
      // General Warning Signs
      {category: "General Warning Signs", title: "Drive on left", asset_source: this.path + "Drive-on-left-2.png"},
      {category: "General Warning Signs", title: "Safe height plate", asset_source: this.path + "Safe-height-plate.png"},
      {
        category: "General Warning Signs",
        title: "Low-flying aircrafts",
        asset_source: this.path + "Low-flying-aircrafts-300x300.png"
      },
      {category: "General Warning Signs", title: "Road divides", asset_source: this.path + "Road-divides.png"},
      {
        category: "General Warning Signs",
        title: "Merging/diverging traffic",
        asset_source: this.path + "Merging-diverging-traffic-300x300.png"
      },
      {
        category: "General Warning Signs",
        title: "Dual carriage ends",
        asset_source: this.path + "Dual-carriage-ends.png"
      },
      {
        category: "General Warning Signs",
        title: "Traffic crossover ahead",
        asset_source: this.path + "Traffic-crossover-ahead-300x300.png"
      },
      {
        category: "General Warning Signs",
        title: "Overhead electric cables",
        asset_source: this.path + "Overhead-electric-cables-1-300x300.png"
      },
      {
        category: "General Warning Signs",
        title: "Traffic signals ahead",
        asset_source: this.path + "Traffic-signals-ahead-300x300.png"
      },
      {
        category: "General Warning Signs",
        title: "Pedestrian crossing ahead",
        asset_source: this.path + "Pedestrian-crossing-ahead.png"
      },
      {
        category: "General Warning Signs",
        title: "Slippery road ahead",
        asset_source: this.path + "Slippery-road-ahead-300x300.png"
      },
      {
        category: "General Warning Signs",
        title: "Road narrows on both sides",
        asset_source: this.path + "Road-narrows-on-both-sides-300x300.png"
      },
      {
        category: "General Warning Signs",
        title: "Road narrows from left",
        asset_source: this.path + "Road-narrows-from-left-300x300.png"
      },
      {
        category: "General Warning Signs",
        title: "Road narrows from right",
        asset_source: this.path + "Road-narrows-from-right-300x300.png"
      },
      {category: "General Warning Signs", title: "Tunnel ahead", asset_source: this.path + "Tunnel-ahead-300x300.png"},
      {category: "General Warning Signs", title: "Cyclists", asset_source: this.path + "Cyclists-300x300.png"},
      {
        category: "General Warning Signs",
        title: "Start of a passing lane",
        asset_source: this.path + "Start-of-a-passing-lane-300x300.png"
      },
      {category: "General Warning Signs", title: "Lane loss", asset_source: this.path + "Lane-loss.png"},
      {
        category: "General Warning Signs",
        title: "Start of a climbing lane",
        asset_source: this.path + "Start-of-a-climbing-lane.png"
      },
      {
        category: "General Warning Signs",
        title: "Loop road ahead",
        asset_source: this.path + "Loop-road-ahead-150x150.png"
      },
      {category: "General Warning Signs", title: "Sharp dip ahead", asset_source: this.path + "Sharp-dip-ahead.png"},
      {
        category: "General Warning Signs",
        title: "Series of bumps ahead",
        asset_source: this.path + "Series-of-bumps-ahead-300x300.png"
      },
      {category: "General Warning Signs", title: "Sharp rise ahead", asset_source: this.path + "Sharp-rise-ahead.png"},
      {
        category: "General Warning Signs",
        title: "Wild animals ahead",
        asset_source: this.path + "Wild-animals-ahead-300x300.png"
      },
      {category: "General Warning Signs", title: "Sheep", asset_source: this.path + "Sheep-300x300.png"},
      {
        category: "General Warning Signs",
        title: "Cattle and farm animals",
        asset_source: this.path + "Cattle-and-farm-animals-300x300.png"
      },
      {
        category: "General Warning Signs",
        title: "Accompanied horses and ponies",
        asset_source: this.path + "Accompanied-horses-and-ponies-300x300.png"
      },
      {category: "General Warning Signs", title: "Crosswinds", asset_source: this.path + "Crosswinds.png"},
      {
        category: "General Warning Signs",
        title: "Steep descent ahead",
        asset_source: this.path + "Steep-descent-ahead-300x300.png"
      },
      {
        category: "General Warning Signs",
        title: "Steep ascent ahead",
        asset_source: this.path + "Steep-ascent-ahead-300x300.png"
      },
      {
        category: "General Warning Signs",
        title: "Danger of falling rocks",
        asset_source: this.path + "Danger-of-falling-rocks-300x300.png"
      },
      {
        category: "General Warning Signs",
        title: "Unprotected quay, canal or river",
        asset_source: this.path + "Unprotected-quay-canal-or-river.png"
      },
      {
        category: "General Warning Signs",
        title: "Level crossing ahead, guarded by gates or lifting barrier",
        asset_source: this.path + "Level-crossing-ahead-guarded-by-gates-or-lifting-barrier-300x300.png"
      },
      {
        category: "General Warning Signs",
        title: "Level crossing ahead, unguarded by gates or lifting barrier",
        asset_source: this.path + "Level-crossing-ahead-unguarded-by-gates-or-lifting-barrier-300x300.png"
      },
      {
        category: "General Warning Signs",
        title: "Level crossing ahead, guarded by gates or lifting barriers",
        asset_source: this.path + "Level-crossing-ahead-guarded-by-gates-or-lifting-barriers-300x300.png"
      },
      {
        category: "General Warning Signs",
        title: "Stop when lights are red",
        asset_source: this.path + "Stop-when-lights-are-red-1.png"
      },
      {
        category: "General Warning Signs",
        title: "Automatic level crossing ahead",
        asset_source: this.path + "Automatic-level-crossing-ahead-1.png"
      },
      {
        category: "General Warning Signs",
        title: "Chevron board (left)",
        asset_source: this.path + "Chevron-board-left.png"
      },
      {
        category: "General Warning Signs",
        title: "Chevron board (right)",
        asset_source: this.path + "Chevron-board-right-1.png"
      },
      // Tram Signs
      {
        category: "Tram Signs",
        title: "Tram lane crossing ahead",
        asset_source: this.path + "Tram-lane-crossing-ahead-300x300.png"
      },
      {
        category: "Tram Signs",
        title: "Tram lane warning signs for pedestrians (look left)",
        asset_source: this.path + "Tram-lane-warning-signs-for-pedestrians-look-left-1.png"
      },
      {
        category: "Tram Signs",
        title: "Tram lane warning signs for pedestrians (look both sides)",
        asset_source: this.path + "Tram-lane-warning-signs-for-pedestrians-look-both-sides-1.png"
      },
      {
        category: "Tram Signs",
        title: "Tram lane warning signs for pedestrians (look right)",
        asset_source: this.path + "Tram-lane-warning-signs-for-pedestrians-look-right.png"
      },
      {category: "Tram Signs", title: "Slippery for cyclists", asset_source: this.path + "Slippery-for-cyclists.png"},
      // Warning signs for schools and children
      {
        category: "Warning signs for schools and children",
        title: "School ahead",
        asset_source: this.path + "School-ahead-300x300.png"
      },
      {
        category: "Warning signs for schools and children",
        title: "School children crossing ahead",
        asset_source: this.path + "School-children-crossing-ahead.png"
      },
      {
        category: "Warning signs for schools and children",
        title: "Children crossing ahead (in residential areas)",
        asset_source: this.path + "Children-crossing-ahead.png"
      },
      //======================================= Warning signs for road work =======================================
      {
        category: "Road work Signs",
        title: "Road works ahead",
        asset_source: this.path + "Road-works-ahead-1-300x300.png"
      },
      {
        category: "Road work Signs",
        title: "One-lane crossover (out)",
        asset_source: this.path + "One-lane-crossover-out.png"
      },
      {
        category: "Road work Signs",
        title: "One-lane crossover (back)",
        asset_source: this.path + "Diamond_road_sign_one-lane_crossover_back.svg-300x300.png"
      },
      {
        category: "Road work Signs",
        title: "Move to right (one lane)",
        asset_source: this.path + "Move-to-right-one-lane-1.png"
      },
      {
        category: "Road work Signs",
        title: "Move to left (one lane)",
        asset_source: this.path + "Move-to-left-one-lane-1.png"
      },
      {
        category: "Road work Signs",
        title: "Move to right (two lanes)",
        asset_source: this.path + "Move-to-left-two-lanes-3.png"
      },
      {
        category: "Road work Signs",
        title: "Move to left (two lanes)",
        asset_source: this.path + "Move-to-right-two-lanes.png"
      },
      {
        category: "Road work Signs",
        title: "Obstruction between lanes",
        asset_source: this.path + "Obstruction-between-lanes-1.png"
      },
      {
        category: "Road work Signs",
        title: "End of obstruction between lanes",
        asset_source: this.path + "End-of-obstruction-between-lanes-2.png"
      },
      {
        category: "Road work Signs",
        title: "Start of central reserve or obstruction",
        asset_source: this.path + "Startofcentralreserve.png"
      },
      {
        category: "Road work Signs",
        title: "End of central reserve or obstruction",
        asset_source: this.path + "Endofobstructionbetweenlanes.png"
      },
      {
        category: "Road work Signs",
        title: "Lanes diverge at crossover",
        asset_source: this.path + "Lanes-diverge-at-crossover.png"
      },
      {
        category: "Road work Signs",
        title: "Lanes rejoin at crossover",
        asset_source: this.path + "Lanes-rejoin-at-crossover.png"
      },
      {
        category: "Road work Signs",
        title: "Two-lanes crossover (back)",
        asset_source: this.path + "Two-lanes-crossover-back-150x150.png"
      },
      {
        category: "Road work Signs",
        title: "Two-lanes crossover (out)",
        asset_source: this.path + "Two-lanes-crossover-out-1.png"
      },
      {
        category: "Road work Signs",
        title: "Single-lane (for shuttle working)",
        asset_source: this.path + "Single-lane-for-shuttle-working.png"
      },
      {category: "Road work Signs", title: "Two-way traffic", asset_source: this.path + "Two-way-traffic-1.png"},
      {
        category: "Road work Signs",
        title: "Road narrows from left",
        asset_source: this.path + "Road-narrows-from-left.png"
      },
      {
        category: "Road work Signs",
        title: "Road narrows from right",
        asset_source: this.path + "Road-narrows-from-right.png"
      },
      {
        category: "Road work Signs",
        title: "Road narrows on both sides",
        asset_source: this.path + "Road-narrows-on-both-sides.png"
      },
      {
        category: "Road work Signs",
        title: "Offside lane (of two) closed",
        asset_source: this.path + "Offside-lane-of-two-closed.png"
      },
      {
        category: "Road work Signs",
        title: "Nearside lane (of two) closed",
        asset_source: this.path + "a_3yPcS-300x300.png"
      },
      {
        category: "Road work Signs",
        title: "Offside lane (of three) closed",
        asset_source: this.path + "Offside-lane-of-three-closed.png"
      },
      {category: "Road work Signs", title: "Nearside lane (of three) closed", asset_source: this.path + "as-300x300.png"},
      {
        category: "Road work Signs",
        title: "Two offside lanes (of three) closed",
        asset_source: this.path + "Two-offside-lanes-of-three-closed.png"
      },
      {
        category: "Road work Signs",
        title: "Two nearside lanes (of three) closed",
        asset_source: this.path + "Two-nearside-lanes-of-three-closed.-Two-alternative-styles.png"
      },
      {
        category: "Road work Signs",
        title: "Offside lane (of four) closed",
        asset_source: this.path + "Offside-lane-of-four-closed-1.png"
      },
      {
        category: "Road work Signs",
        title: "Nearside lane (of four) closed",
        asset_source: this.path + "WK046-300x300.jpg"
      },
      {
        category: "Road work Signs",
        title: "Two offside lanes (of four) closed",
        asset_source: this.path + "Two-offside-lanes-of-four-closed-1.png"
      },
      {
        category: "Road work Signs",
        title: "Two nearside lanes (of four) closed",
        asset_source: this.path + "Two-nearside-lanes-of-four-closed-1.png"
      },
      {category: "Road work Signs", title: "Side road on left", asset_source: this.path + "Side-road-on-left-1.png"},
      {category: "Road work Signs", title: "Side road on right", asset_source: this.path + "Side-road-on-right-2.png"},
      {
        category: "Road work Signs",
        title: "Site access on left",
        asset_source: this.path + "Site-access-on-left-300x300.png"
      },
      {category: "Road work Signs", title: "Site access on right", asset_source: this.path + "ssfdf-300x300.png"},
      {
        category: "Road work Signs",
        title: "Temporary traffic signal ahead",
        asset_source: this.path + "Temporary-traffic-signal-ahead.png"
      },
      {category: "Road work Signs", title: "Flagman ahead", asset_source: this.path + "Flagman-ahead-300x300.png"},
      {category: "Road work Signs", title: "Slippery road", asset_source: this.path + "Slippery-road-300x300.png"},
      {category: "Road work Signs", title: "Loose chippings", asset_source: this.path + "Loose-chippings.png"},
      {category: "Road work Signs", title: "Queues likely", asset_source: this.path + "Queues-likely.png"},
      {category: "Road work Signs", title: "Hump or ramp", asset_source: this.path + "Hump-or-ramp.png"},
      {
        category: "Road work Signs",
        title: "Pedestrian cross to right",
        asset_source: this.path + "Pedestrian-cross-to-right-300x300.png"
      },
      {
        category: "Road work Signs",
        title: "Overhead electric cables",
        asset_source: this.path + "Overhead-electric-cables-2.png"
      },
      {
        category: "Road work Signs",
        title: "Pedestrian cross to left",
        asset_source: this.path + "Pedestrian-cross-to-left-300x300.png"
      },
      {category: "Road work Signs", title: "Uneven surface", asset_source: this.path + "Uneven-surface-3-300x300.png"},
      {category: "Road work Signs", title: "Detour ahead", asset_source: this.path + "Detour-ahead-1.png"},
      {category: "Road work Signs", title: "Detour to left", asset_source: this.path + "Detour-to-left-300x300.jpg"},
      {category: "Road work Signs", title: "Detour to right", asset_source: this.path + "Detour-to-right-300x300.jpg"},
      {category: "Road work Signs", title: "Road closed", asset_source: this.path + "Road-closed-300x300.jpg"},
      {
        category: "Road work Signs",
        title: "Diverted traffic left",
        asset_source: this.path + "Diverted-traffic-left.jpg"
      },
      {category: "Road work Signs", title: "Diverted traffic", asset_source: this.path + "Diverted-traffic-300x300.jpg"},
      {category: "Road work Signs", title: "Diverted traffic", asset_source: this.path + "Diverted-traffic.png"},
      {category: "Road work Signs", title: "Diverted traffic2", asset_source: this.path + "Diverted-traffic-1.png"},
      {category: "Road work Signs", title: "End of detour", asset_source: this.path + "End-of-detour-1.png"},
      {
        category: "Road work Signs",
        title: "Detour destination",
        asset_source: this.path + "Detour-destination-300x300.jpg"
      },
      // Informative Signs for work at road
      {category: "Informative Signs", title: "Distance", asset_source: this.path + "Distance-1.png"},
      {category: "Informative Signs", title: "Length", asset_source: this.path + "Length.png"},
      {category: "Informative Signs", title: "Direction", asset_source: this.path + "Direction-1.png"},
      {
        category: "Informative Signs",
        title: "Direction and distance",
        asset_source: this.path + "Direction-and-distance.png"
      },
      {category: "Informative Signs", title: "Slow", asset_source: this.path + "Go-mall-300x300.jpg"},
      {category: "Informative Signs", title: "End", asset_source: this.path + "Direction-and-distance-1.png"},
      {category: "Informative Signs", title: "Cautionary speed", asset_source: this.path + "Cautionary-speed-1.png"},
      {category: "Informative Signs", title: "Type of works", asset_source: this.path + "Type-of-works.png"},
      {category: "Informative Signs", title: "Use hard shoulder", asset_source: this.path + "Use-hard-shoulder.png"},
      {
        category: "Informative Signs",
        title: "Unfinished Road surface",
        asset_source: this.path + "Unfinished-road-surface-300x300.jpg"
      },
      {category: "Informative Signs", title: "Barrier board", asset_source: this.path + "Barrier-board-300x300.jpg"},
      {
        category: "Informative Signs",
        title: "Concealed Entrance",
        asset_source: this.path + "Concealed-Entrance-300x300.jpg"
      },
      {category: "Informative Signs", title: "Chevron board", asset_source: this.path + "Chevron-board-1.png"},
      {category: "Informative Signs", title: "Speed limit ahead", asset_source: this.path + "Speed-limit-ahead.png"},
      {
        category: "Informative Signs",
        title: "Unfinished Road Surface",
        asset_source: this.path + "Hard-shoulder-closed-1.png"
      },
      // Manual Signs for Traffic control at road
      {
        category: "Manual Signs for Traffic control",
        title: "Flagman ahead",
        asset_source: this.path + "Flagman-ahead-1-300x300.png"
      },
      {category: "Manual Signs for Traffic control", title: "Stop", asset_source: this.path + "Stop-300x300.png"},
      {
        category: "Manual Signs for Traffic control",
        title: "Either form of go can be used",
        asset_source: this.path + "Either-form-of-go-can-be-used-2.png"
      },
      {
        category: "Manual Signs for Traffic control",
        title: "Either form of téigh can be used",
        asset_source: this.path + "Either-form-of-teigh-can-be-used-1.png"
      },
      // Regulatory Traffic Signs
      {category: "Regulatory Traffic Signs", title: "Stop", asset_source: this.path + "Stop-1-300x300.png"},
      {category: "Regulatory Traffic Signs", title: "Yield", asset_source: this.path + "Yield-1.png"},
      {
        category: "Regulatory Traffic Signs",
        title: "School wardens stop sign",
        asset_source: this.path + "School-wardens-stop-sign-300x300.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "Parking prohibited",
        asset_source: this.path + "Parking-prohibited.png"
      },
      {category: "Regulatory Traffic Signs", title: "No left turn", asset_source: this.path + "No-left-turn-300x300.png"},
      {
        category: "Regulatory Traffic Signs",
        title: "No entry or ‘No straight ahead’",
        asset_source: this.path + "No-entry-or-‘No-straight-ahead-300x300.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "No right turn",
        asset_source: this.path + "No-right-turn-300x300.png"
      },
      {category: "Regulatory Traffic Signs", title: "Clearway", asset_source: this.path + "Clearway-300x300.png"},
      {
        category: "Regulatory Traffic Signs",
        title: "Speed Limit 30",
        asset_source: this.path + "Max-speed-limit-30kmh-300x300.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "Speed Limit 50",
        asset_source: this.path + "Max-speed-limit-50kmh-300x300.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "Speed Limit 60",
        asset_source: this.path + "Max-speed-limit-60kmh-300x300.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "Speed Limit 80",
        asset_source: this.path + "Max-speed-limit-80kmh-300x300.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "Speed Limit 100",
        asset_source: this.path + "Max-speed-limit-100kmh-300x300.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "Speed Limit 120",
        asset_source: this.path + "Max-speed-limit-120kmh-300x300.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "No ridden or accompanied horses",
        asset_source: this.path + "No-ridden-or-accompanied-horses-300x300.png"
      },
      {category: "Regulatory Traffic Signs", title: "No bicycles", asset_source: this.path + "No-bicycles-300x300.png"},
      {
        category: "Regulatory Traffic Signs",
        title: "Maximum gross weight",
        asset_source: this.path + "No-entry-for-large-vehicles-by-reference-to-weight.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "Maximum vehicle length",
        asset_source: this.path + "Maximum-vehicle-length-1.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "No entry to vehicles",
        asset_source: this.path + "No-entry-to-vehicles-300x300.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "Maximum vehicle width",
        asset_source: this.path + "Maximum-vehicle-width-300x300.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "Maximum axle weight",
        asset_source: this.path + "Maximum-axle-weight-300x300.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "No overtaking for three-axle vehicles",
        asset_source: this.path + "No-overtaking-for-three-axle-vehicles.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "No horse carriages",
        asset_source: this.path + "No-horse-carriages-300x300.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "Height restriction",
        asset_source: this.path + "Height-restriction-1-300x300.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "No overtaking",
        asset_source: this.path + "No-overtaking-for-three-axle-vehicles-300x300.png"
      },
      {category: "Regulatory Traffic Signs", title: "Taxi rank", asset_source: this.path + "Taxi-rank-300x300.png"},
      {
        category: "Regulatory Traffic Signs",
        title: "No entry for large vehicles",
        asset_source: this.path + "No-entry-for-large-vehicles-by-reference-to-weight.png"
      },
      {category: "Regulatory Traffic Signs", title: "No U-Turn", asset_source: this.path + "No-U-Turn-300x300.png"},
      {
        category: "Regulatory Traffic Signs",
        title: "End of the restriction zone",
        asset_source: this.path + "End-of-the-restriction-zone.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "Parking permitted",
        asset_source: this.path + "Parking-permitted.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "Pedestrianised street",
        asset_source: this.path + "Pedestrianised-street.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "Zonal restriction",
        asset_source: this.path + "Zonal-restriction-–-parking-of-large-vehicles.png"
      },
      {
        category: "Regulatory Traffic Signs",
        title: "Disc parking plate",
        asset_source: this.path + "Disc-parking-plate.png"
      },
      // Mandatory Turns at Junctions
      {
        category: "Mandatory Turns at Junctions",
        title: "Turn left ahead",
        asset_source: this.path + "Turn-left-ahead.webp"
      },
      {
        category: "Mandatory Turns at Junctions",
        title: "Turn right ahead",
        asset_source: this.path + "Turn-right-ahead.webp"
      },
      {category: "Mandatory Turns at Junctions", title: "Turn left", asset_source: this.path + "Turn-left.webp"},
      {category: "Mandatory Turns at Junctions", title: "Turn right", asset_source: this.path + "Turn-right.webp"},
      {
        category: "Mandatory Turns at Junctions",
        title: "Straight ahead",
        asset_source: this.path + "Straight-ahead.webp"
      },
      {category: "Mandatory Turns at Junctions", title: "Keep left", asset_source: this.path + "Keep-left.webp"},
      {category: "Mandatory Turns at Junctions", title: "Keep right", asset_source: this.path + "Keep-right.webp"},
      {
        category: "Mandatory Turns at Junctions",
        title: "Pass either side",
        asset_source: this.path + "Pass-either-side.webp"
      },
      {
        category: "Mandatory Turns at Junctions",
        title: "Mini roundabout",
        asset_source: this.path + "Mini-roundabout.webp"
      },
      // Other Manual Work Signs for work at road
      {category: "Other Manual Work Signs", title: "Stop", asset_source: this.path + "Stop-300x300.png"},
      {
        category: "Other Manual Work Signs",
        title: "Either form of go",
        asset_source: this.path + "Either-form-of-go-can-be-used-2.png"
      },
      {
        category: "Other Manual Work Signs",
        title: "Either form of téigh",
        asset_source: this.path + "Either-form-of-teigh-can-be-used-1.png"
      },
      {
        category: "Other Manual Work Signs",
        title: "No entry for pedestrians to tramway",
        asset_source: this.path + "No-entry-for-pedestrians-to-tramway.png"
      },
      {
        category: "Other Manual Work Signs",
        title: "No entry to goods vehicles",
        asset_source: this.path + "No-entry-to-goods-vehicles-by-reference-to-number-of-axles-300x300.png"
      },
      {
        category: "Other Manual Work Signs",
        title: "Contra flow bus lane",
        asset_source: this.path + "Contra-flow-bus-lane-1.png"
      },
      {
        category: "Other Manual Work Signs",
        title: "With flow bus lane on left",
        asset_source: this.path + "With-flow-bus-lane-on-left.png"
      },
      {
        category: "Other Manual Work Signs",
        title: "With flow bus lane on right",
        asset_source: this.path + "With-flow-bus-lane-on-right.png"
      },
      {
        category: "Other Manual Work Signs",
        title: "Tram lane on left",
        asset_source: this.path + "Tram-lane-on-left.png"
      },
      {
        category: "Other Manual Work Signs",
        title: "Tram lane on right",
        asset_source: this.path + "Tram-lane-on-right.png"
      },
      {
        category: "Other Manual Work Signs",
        title: "Start of cycle track",
        asset_source: this.path + "Start-of-cycle-track.png"
      },
      {
        category: "Other Manual Work Signs",
        title: "End of cycle track",
        asset_source: this.path + "End-of-cycle-track.png"
      },
      {
        category: "Other Manual Work Signs",
        title: "Tram only street ireland",
        asset_source: this.path + "Tram-only-street-ireland.png"
      },
      {category: "Other Manual Work Signs", title: "Turn back", asset_source: this.path + "Turn-back-1.png"},
      {category: "Other Manual Work Signs", title: "Bus only street", asset_source: this.path + "Bus-only-street.png"},
      {
        category: "Other Manual Work Signs",
        title: "Pedestrians and bicycles only",
        asset_source: this.path + "Pedestrians-and-bicycles-only-300x300.png"
      },
      {
        category: "Other Manual Work Signs",
        title: "Separate bicycle and pedestrian lanes",
        asset_source: this.path + "Separate-bicycle-and-pedestrian-lanes.png"
      },
      // Traffic Lane Signs
      {category: "Traffic Lane Signs", title: "Go (Lane open)", asset_source: this.path + "Go-Lane-open.png"},
      {category: "Traffic Lane Signs", title: "Stop (Lane closed)", asset_source: this.path + "Stop-Lane-closed.png"},
      {
        category: "Traffic Lane Signs",
        title: "Move into the right-hand lane",
        asset_source: this.path + "Move-into-the-right-hand-lane.png"
      },
      {
        category: "Traffic Lane Signs",
        title: "Move into the left-hand lane",
        asset_source: this.path + "Move-into-the-left-hand-lane-1.png"
      },
      // Advance Information Signs
      {category: "Advance Information Signs", title: "Motorway", asset_source: this.path + "Motorway-1.png"},
      {category: "Advance Information Signs", title: "National road", asset_source: this.path + "National-road.png"},
      {category: "Advance Information Signs", title: "Regional road", asset_source: this.path + "Regional-road.png"},
      {category: "Advance Information Signs", title: "National road", asset_source: this.path + "National-road1.png"},
      {
        category: "Advance Information Signs",
        title: "Lane destination sign",
        asset_source: this.path + "Lane-destination-sign.png"
      },
      {
        category: "Advance Information Signs",
        title: "Dublin Port Tunnel ahead",
        asset_source: this.path + "Dublin-Port-Tunnel-ahead.png"
      },
      // Advance Direction Signs
      {
        category: "Advance Direction Signs",
        title: "Motorway direction sign",
        asset_source: this.path + "Motorway-direction-sign.png"
      },
      {
        category: "Advance Direction Signs",
        title: "National road direction signs",
        asset_source: this.path + "National-road-direction-signs.png"
      },
      {
        category: "Advance Direction Signs",
        title: "Regional road direction sign",
        asset_source: this.path + "Regional-road-direction-sign.png"
      },
      {
        category: "Advance Direction Signs",
        title: "Local road direction sign",
        asset_source: this.path + "Local-road-direction-sign.png"
      },
      {
        category: "Advance Direction Signs",
        title: "Town or village sign",
        asset_source: this.path + "Town-or-village-sign.png"
      },
      {
        category: "Advance Direction Signs",
        title: "Destination distance sign",
        asset_source: this.path + "Destination-distance-sign.png"
      },
      {category: "Advance Direction Signs", title: "Slow lane sign", asset_source: this.path + "Slow-lane-sign-1.png"},
      {category: "Advance Direction Signs", title: "Cul-de-sac", asset_source: this.path + "Cul-de-sac.png"},
      {
        category: "Advance Direction Signs",
        title: "Disabled persons parking bay",
        asset_source: this.path + "Disabled-persons-parking-bay.png"
      },
      {category: "Advance Direction Signs", title: "Airport symbol", asset_source: this.path + "Airport-symbol.png"},
      {
        category: "Advance Direction Signs",
        title: "Industrial estate symbol",
        asset_source: this.path + "Industrial-estate-symbol.png"
      },
      {category: "Advance Direction Signs", title: "Ferry symbol", asset_source: this.path + "Ferry-symbol-1.png"},
      {
        category: "Advance Direction Signs",
        title: "Alternative route for high vehicles",
        asset_source: this.path + "Alternative-route-for-high-vehicles.png"
      },
      {
        category: "Advance Direction Signs",
        title: "Lay-by ahead sign",
        asset_source: this.path + "Lay-by-ahead-sign-1.png"
      },
      {
        category: "Advance Direction Signs",
        title: "Hospital ahead sign",
        asset_source: this.path + "Hospital-ahead-sign-1.png"
      },
      {category: "Advance Direction Signs", title: "Lay-by sign", asset_source: this.path + "Lay-by-sign.png"},
      {category: "Advance Direction Signs", title: "Hospital sign", asset_source: this.path + "Hospital-sign.png"},
      {category: "Advance Direction Signs", title: "SOS lay-by", asset_source: this.path + "SOS-lay-by-1.png"},
      {
        category: "Advance Direction Signs",
        title: "Car park with facilities for disabled person",
        asset_source: this.path + "Car-park-with-facilities-for-disabled-person-1.png"
      },
      {category: "Advance Direction Signs", title: "Speed camera", asset_source: this.path + "Speed-camera-2.png"},
      {
        category: "Advance Direction Signs",
        title: "Advance information sign for low clearance",
        asset_source: this.path + "Advance-information-sign-for-low-clearance-1.png"
      },
      {
        category: "Advance Direction Signs",
        title: "Alternative route for heavy vehicles",
        asset_source: this.path + "Alternative-route-for-heavy-vehicles.png"
      },
      {
        category: "Advance Direction Signs",
        title: "Traffic calming sign",
        asset_source: this.path + "Traffic-calming-sign-1.png"
      },
      {
        category: "Advance Direction Signs",
        title: "Speed limit change ahead",
        asset_source: this.path + "Speed-limit-change-ahead.png"
      },
      // Motorway Signs
      {category: "Motorway Signs", title: "Motorway ahead", asset_source: this.path + "Motorway-ahead.png"},
      {category: "Motorway Signs", title: "Motorway ahead", asset_source: this.path + "Motorway-ahead-1.png"},
      {
        category: "Motorway Signs",
        title: "Advance direction sign",
        asset_source: this.path + "Advance-direction-sign-1.png"
      },
      {category: "Motorway Signs", title: "100m to next exit", asset_source: this.path + "100m-to-next-exit-1.png"},
      {category: "Motorway Signs", title: "200m to next exit", asset_source: this.path + "200m-to-next-exit-1.png"},
      {category: "Motorway Signs", title: "300m to next exit", asset_source: this.path + "300m-to-next-exit-1.png"},
      {
        category: "Motorway Signs",
        title: "The motorway ends 1km ahead",
        asset_source: this.path + "The-motorway-ends-1km-ahead-1.png"
      },
      {
        category: "Motorway Signs",
        title: "Motorway ends 500m ahead",
        asset_source: this.path + "Motorway-ends-500m-ahead.png"
      },
      {category: "Motorway Signs", title: "End of motorway", asset_source: this.path + "End-of-motorway-1.png"},
      {
        category: "Motorway Signs",
        title: "Route confirmatory sign for M7",
        asset_source: this.path + "Route-confirmatory-sign-for-M7.png"
      },
      {
        category: "Motorway Signs",
        title: "Advance direction for destination",
        asset_source: this.path + "Advance-direction-for-destination.png"
      },
      {category: "Motorway Signs", title: "Entry to motorway", asset_source: this.path + "Entry-to-motorway.png"},
      {category: "Motorway Signs", title: "Toll plaza ahead", asset_source: this.path + "Toll-plaza-ahead-1.png"},
      {category: "Motorway Signs", title: "Toll charges", asset_source: this.path + "Toll-charges.png"},
      {
        category: "Motorway Signs",
        title: "Toll plaza information sign",
        asset_source: this.path + "Toll-plaza-information-sign.png"
      },
      {category: "Motorway Signs", title: "Garda only", asset_source: this.path + "Garda-only-1.png"},
      {
        category: "Motorway Signs",
        title: "Authorized vehicles only",
        asset_source: this.path + "Authorized-vehicles-only.png"
      },
      {
        category: "Motorway Signs",
        title: "Typical 2km next exit sign",
        asset_source: this.path + "Typical-2km-next-exit-sign.png"
      },
      {
        category: "Motorway Signs",
        title: "Motorway service plaza",
        asset_source: this.path + "Motorway-service-plaza.png"
      },
      {
        category: "Motorway Signs",
        title: "Route confirmatory sign with Euro Route marker plate",
        asset_source: this.path + "Route-confirmatory-sign-with-Euro-Route-marker-plate.png"
      },
      {
        category: "Motorway Signs",
        title: "Typical lane gain sign",
        asset_source: this.path + "Typical-lane-gain-sign.png"
      },
    ];
  };
}

