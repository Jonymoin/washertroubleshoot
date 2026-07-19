import { useState } from "react";

const ChevronRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const X = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const categories = [
  {
    id: "motor",
    name: "Motor Issues",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    emoji: "⚙️",
    problems: [
      {
        id: "drive-belt-broken",
        name: "Drive Belt Broken",
        severity: "high",
        description: "The drive belt connects the motor to the drum. When it breaks, the drum stops spinning entirely. It's one of the most common mechanical failures in top-load washers and can happen due to age, wear, or overloading.",
        symptoms: ["Drum does not spin or agitate", "Motor runs but drum stays still", "Squealing or burning smell before failure", "Loud thumping noise during cycle"],
        causes: ["Normal wear and tear over time", "Overloading the machine regularly", "Belt slipping off pulley repeatedly", "Oil or detergent contamination on belt"],
        solution: "Replace the drive belt with an OEM or compatible belt. Access by removing the back or front panel depending on model. Ensure proper tension when fitting the new belt around the motor pulley and drum pulley.",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      },
      {
        id: "motor-coupling-broken",
        name: "Motor Coupling Broken",
        severity: "medium",
        description: "The motor coupling is a plastic or rubber link between the motor and the transmission. It's designed to break under overload conditions to protect both the motor and transmission from damage.",
        symptoms: ["Machine fills with water but drum doesn't move", "Humming noise with no drum rotation", "Machine agitates but won't spin", "Clothes are still soaking wet after cycle"],
        causes: ["Overloading beyond rated capacity", "Age and wear of plastic components", "Seized transmission causing motor strain", "Worn motor bearings increasing load"],
        solution: "Disconnect power, access the motor (usually by tilting the machine), and replace the two-piece coupling. This is a relatively inexpensive part and straightforward repair requiring basic tools.",
        imageUrl: "https://images.unsplash.com/photo-1621274403997-aca56aa12302?w=600&q=80",
      },
      {
        id: "drive-motor-faulty",
        name: "Drive Motor Faulty",
        severity: "high",
        description: "The drive motor is the heart of the washing machine, powering both the wash agitation and spin cycles. A faulty motor can cause complete machine failure or intermittent operation issues.",
        symptoms: ["Machine completely stops mid-cycle", "Motor hums loudly but drum doesn't move", "Intermittent operation — works sometimes, fails others", "Burning smell from motor compartment", "Circuit breaker trips during operation"],
        causes: ["Motor windings burnt out from overheating", "Worn motor brushes (on brush motors)", "Failed motor capacitor", "Blocked motor causing overheating", "Moisture damage to motor windings"],
        solution: "Test motor windings with a multimeter for continuity. Check carbon brushes for wear. If windings are burnt, motor replacement is required. Consider a certified technician as it involves electrical work.",
        imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80",
      },
      {
        id: "drive-pulley-damaged",
        name: "Drive Pulley Damaged",
        severity: "medium",
        description: "The drive pulley is the wheel attached to the drum that the drive belt wraps around. If it cracks, becomes loose, or warps, it causes belt slippage, vibration, and eventual failure of the spin cycle.",
        symptoms: ["Excessive vibration during spin cycle", "Drive belt keeps coming off", "Grinding or scraping noise", "Drum wobbles or runs off-centre"],
        causes: ["Metal fatigue from years of use", "Impact damage from foreign objects", "Corrosion on metal pulleys", "Loose mounting bolt allowing wobble"],
        solution: "Remove the drive belt, inspect the pulley for cracks, chips, or wobble. Tighten the centre bolt or replace the pulley entirely. Always replace the drive belt alongside a new pulley for best results.",
        imageUrl: "https://images.unsplash.com/photo-1504222490345-c075b7c1bab0?w=600&q=80",
      },
      {
        id: "tub-bearings-faulty",
        name: "Tub Bearings Faulty",
        severity: "high",
        description: "The tub bearings allow the inner drum to rotate smoothly inside the outer tub. When they fail, the drum becomes very loud and difficult to spin. Water getting past the drum seal and corroding the bearings is a common cause.",
        symptoms: ["Loud rumbling or grinding noise during spin", "Noise gets worse as spin speed increases", "Drum feels rough when turned by hand", "Water leaking near the back of the machine", "Rust stains on clothing"],
        causes: ["Water leaking past the drum seal", "Age and normal wear", "Excessive vibration over many years", "Corrosion from detergent residue"],
        solution: "Bearing replacement is a major repair — the drum must be fully removed and the bearing pressed out. Requires specialist tools. Replace the drum seal at the same time. May be more cost-effective to replace the machine on older models.",
        imageUrl: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80",
      },
    ],
  },
  {
    id: "electronic",
    name: "Electronic Issues",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    emoji: "⚡",
    problems: [
      {
        id: "pcb-faulty",
        name: "PCB Faulty",
        severity: "high",
        description: "The PCB (Printed Circuit Board) is the electronic brain of the washing machine. It controls every function — water levels, temperature, motor speed, and cycle timing. A faulty PCB can cause erratic behaviour, error codes, or complete failure.",
        symptoms: ["Error codes appearing on display", "Machine stops randomly mid-cycle", "Buttons or controls unresponsive", "Incorrect cycle operations", "Machine won't power on at all"],
        causes: ["Power surge or lightning strike", "Water or moisture ingress", "Heat damage from faulty components", "Age and component degradation", "Short circuit from wiring issues"],
        solution: "Inspect PCB for visible burn marks, corrosion, or damaged capacitors. If damaged, replace the PCB module — ensure exact part number match. Use a surge protector to prevent future damage.",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
      },
      {
        id: "starter-switch-faulty",
        name: "Starter Switch Faulty",
        severity: "medium",
        description: "The starter switch initiates the wash cycle, sending the signal to the control board to begin operation. If faulty, the machine may not start at all or may fail to progress through cycles properly.",
        symptoms: ["Machine won't start when button is pressed", "Start button feels stiff or unresponsive", "Machine starts intermittently", "Display lights up but cycle won't begin"],
        causes: ["Physical wear of switch contacts", "Moisture damage inside switch", "Broken solder joint on PCB", "Sticky detergent buildup around button"],
        solution: "Clean the switch area thoroughly. Test switch continuity with a multimeter. If faulty, replace as a standalone component or replace the entire control panel assembly depending on the model.",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
      },
      {
        id: "door-switch-faulty",
        name: "Door Switch Faulty",
        severity: "medium",
        description: "The door switch (door interlock) is a critical safety device that prevents the machine from operating when the door is open. If it fails, the machine may not start or may stop mid-cycle even with the door properly closed.",
        symptoms: ["Machine won't start despite door being closed", "Machine shows door open error incorrectly", "Machine stops mid-cycle unexpectedly", "Door won't unlock at end of cycle"],
        causes: ["Worn door latch mechanism", "Broken switch contacts internally", "Door hinge misalignment", "Plastic hook on door broken"],
        solution: "Test the door switch with a multimeter for continuity when closed. Inspect the door hook and latch for physical damage. Door switches are inexpensive and easy to replace by accessing from inside the door seal.",
        imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80",
      },
      {
        id: "capacitor-issues",
        name: "Capacitor Issues",
        severity: "medium",
        description: "Capacitors store electrical energy and help start and run the motor. The start capacitor gives the motor an initial boost of power, while the run capacitor keeps it spinning efficiently. Failed capacitors are a very common cause of motor failure.",
        symptoms: ["Motor hums but won't start", "Motor starts slowly and struggles", "Machine intermittently fails to start", "Visible bulging or leaking on capacitor body", "Motor overheats quickly"],
        causes: ["Age — capacitors degrade over 5–10 years", "Heat stress from a hot motor", "Voltage spikes damaging capacitor", "Manufacturing defects"],
        solution: "Visually inspect capacitors for bulging, leaking, or burn marks. Test with a capacitor meter. CAUTION: capacitors store charge — always discharge before handling. Replace with exact microfarad and voltage rating.",
        imageUrl: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=600&q=80",
      },
      {
        id: "fuse-faulty",
        name: "Fuse Faulty",
        severity: "low",
        description: "Washing machines have thermal and electrical fuses to protect components from overheating or power surges. A blown fuse causes the machine to stop completely. It's often a symptom of an underlying issue rather than the root cause itself.",
        symptoms: ["Machine completely dead — no power at all", "Machine cuts out mid-cycle", "No lights on control panel", "Fuse in plug repeatedly blows"],
        causes: ["Power surge from mains supply", "Overheating due to blocked filter", "Faulty heating element drawing too much current", "Short circuit in wiring harness"],
        solution: "First check the mains plug fuse and replace if blown. Internal thermal fuses require accessing the machine — locate fuse on wiring harness, test with multimeter, and replace with identical rated fuse. Always identify the root cause.",
        imageUrl: "https://images.unsplash.com/photo-1473081556163-2a17de81fc97?w=600&q=80",
      },
    ],
  },
  {
    id: "water",
    name: "Water Related Issues",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    borderColor: "border-cyan-200",
    emoji: "💧",
    problems: [
      {
        id: "drain-pump-faulty",
        name: "Drain Pump Faulty",
        severity: "high",
        description: "The drain pump removes water from the drum after each wash and rinse cycle. A faulty pump leaves water sitting in the drum and prevents the spin cycle from completing. It's one of the most common washing machine repairs.",
        symptoms: ["Water remains in drum after cycle ends", "Machine pauses or stops mid-cycle", "Humming sound during drain phase with no water movement", "Machine takes a very long time to drain"],
        causes: ["Foreign objects (coins, buttons) jamming the pump", "Worn pump impeller blades", "Electrical failure of pump motor", "Blocked filter starving pump of water"],
        solution: "First clean the pump filter (usually behind a small panel at the front bottom of machine). Check for foreign objects in the pump chamber. If the pump is clear but still not working, test the pump motor for continuity and replace if faulty.",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      },
      {
        id: "drainage-hose-blocked",
        name: "Drainage Hose Blocked",
        severity: "low",
        description: "The drainage hose carries water from the pump to the household drain. Blockages, kinks, or improper installation height can prevent effective draining. This is often the simplest fix for a 'not draining' problem.",
        symptoms: ["Water drains slowly or not at all", "Gurgling sounds from drain", "Water backing up into the drum", "Drain hose visibly kinked or crushed"],
        causes: ["Lint and fluff accumulation inside hose", "Hose kinked behind or under machine", "Hose installed too high above drum level", "Hose crushed by being pushed too far into standpipe"],
        solution: "Pull the machine forward and inspect the hose for kinks. Remove hose and flush with water to check for blockages. Ensure the hose is installed at the correct height (60–90 cm above floor) and not pushed too deeply into the standpipe.",
        imageUrl: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=600&q=80",
      },
      {
        id: "water-inlet-valve-faulty",
        name: "Water Inlet Valve Faulty",
        severity: "medium",
        description: "The water inlet valve controls the flow of water into the drum. It opens electrically when the machine calls for water. A faulty valve means the machine either won't fill or won't stop filling — both cause serious problems.",
        symptoms: ["Machine fills very slowly or not at all", "Machine overfills with water", "Water continuously trickling into drum when off", "Error codes for water fill timeout"],
        causes: ["Limescale buildup on valve mesh filter", "Solenoid coil burnt out", "Diaphragm inside valve torn or hardened", "Low water pressure preventing valve from opening"],
        solution: "Check water supply pressure and that taps are fully open. Clean the mesh filter on the valve inlet. Test valve solenoids with a multimeter (typically 500–1500 ohms). If failed, replace the inlet valve assembly.",
        imageUrl: "https://images.unsplash.com/photo-1621274403997-aca56aa12302?w=600&q=80",
      },
      {
        id: "filter-catch-area-blocked",
        name: "Filter Catch Area Blocked",
        severity: "low",
        description: "The pump filter (coin trap) catches lint, fluff, coins, and small objects before they reach the pump. It should be cleaned every 1–3 months. A blocked filter is one of the most common causes of draining problems and pump damage.",
        symptoms: ["Machine fails to drain properly", "Loud noise during drain cycle", "Unpleasant smell from machine", "Water leaking from filter area"],
        causes: ["Lint and fluff from laundry", "Coins, buttons, or small items from pockets", "Pet hair accumulation", "Infrequent cleaning and maintenance"],
        solution: "Place a shallow tray under the filter cap (front bottom of machine). Slowly unscrew the filter cap — water will flow out. Remove all debris and clean under running water. Refit tightly. Clean every 1–3 months as routine maintenance.",
        imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&q=80",
      },
      {
        id: "hose-fittings-damaged",
        name: "Hose Fittings Damaged",
        severity: "medium",
        description: "Hose fittings connect water inlet and outlet hoses to the machine and household plumbing. Damaged or corroded fittings cause leaks, which can lead to significant water damage if left unattended.",
        symptoms: ["Water pooling under or behind machine", "Visible dripping from hose connections", "Water marks or staining on wall behind machine", "Hose coupling feels loose or wobbly"],
        causes: ["Over-tightening cracking plastic fittings", "Age and UV degradation of rubber seals", "Limescale buildup corroding fittings", "Machine vibration loosening connections"],
        solution: "Turn off water supply immediately upon discovering a leak. Inspect all hose connections. Replace damaged hoses with braided stainless steel hoses. Always use new rubber washers. Hand tight plus a quarter turn is sufficient — do not overtighten.",
        imageUrl: "https://images.unsplash.com/photo-1504222490345-c075b7c1bab0?w=600&q=80",
      },
      {
        id: "seals-damaged",
        name: "Seals Damaged",
        severity: "medium",
        description: "Washing machines rely on several rubber seals: the door seal (gasket), tub seal behind the drum, and pump seals. When these deteriorate, water escapes during the cycle, causing floor damage and mould growth.",
        symptoms: ["Water leaking from front of machine onto floor", "Black mould visible on door seal rubber", "Water found under machine after each cycle", "Musty smell from machine or seal area", "Visible tears or cracks in door rubber"],
        causes: ["Mould eating through rubber seal", "Sharp objects in laundry cutting the seal", "Age hardening and cracking of rubber", "Incorrect detergent causing rubber deterioration"],
        solution: "Inspect the door seal carefully for tears, holes, or mould. Clean mould with diluted bleach. If torn or cracked, the seal must be replaced. Always wipe the seal dry after each wash to prevent mould buildup.",
        imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80",
      },
    ],
  },
];

const severityConfig = {
  low:    { label: "Low Severity",    textColor: "text-green-700",  bg: "bg-green-100",  dot: "bg-green-400"  },
  medium: { label: "Medium Severity", textColor: "text-yellow-700", bg: "bg-yellow-100", dot: "bg-yellow-400" },
  high:   { label: "High Severity",   textColor: "text-red-700",    bg: "bg-red-100",    dot: "bg-red-400"    },
};

export default function Problems() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow text-xl">🫧</div>
          <div>
            <h1 className="text-lg font-bold text-gray-900 leading-tight">Washing Machine Problems</h1>
            <p className="text-xs text-gray-500">Tap any issue to learn more</p>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {categories.map((cat) => (
          <div key={cat.id}>
            <div className={`flex items-center gap-2 mb-3 px-3 py-2 rounded-xl ${cat.bgColor} ${cat.borderColor} border`}>
              <span className="text-base">{cat.emoji}</span>
              <h2 className={`font-bold text-sm uppercase tracking-wide ${cat.color}`}>{cat.name}</h2>
              <span className={`ml-auto text-xs font-medium ${cat.color} opacity-70`}>{cat.problems.length} issues</span>
            </div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden divide-y divide-gray-50">
              {cat.problems.map((problem) => (
                <button
                  key={problem.id}
                  onClick={() => setSelected(problem)}
                  className="w-full flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 active:bg-gray-100 transition-colors text-left group"
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${severityConfig[problem.severity].dot}`} />
                    <span className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                      {problem.name}
                    </span>
                  </div>
                  <span className="text-gray-300 group-hover:text-blue-500 transition-colors"><ChevronRight /></span>
                </button>
              ))}
            </div>
          </div>
        ))}
        <p className="text-center text-xs text-gray-400 pb-4">
          {categories.reduce((s, c) => s + c.problems.length, 0)} problems across {categories.length} categories
        </p>
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={() => setSelected(null)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative bg-white w-full sm:max-w-lg sm:rounded-2xl rounded-t-3xl max-h-[92vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            {/* Image */}
            <div className="relative h-48 sm:h-56 overflow-hidden sm:rounded-t-2xl rounded-t-3xl">
              <img src={selected.imageUrl} alt={selected.name} className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"; }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-xl font-bold text-white leading-tight">{selected.name}</h2>
              </div>
              <button onClick={() => setSelected(null)}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/50 transition-colors">
                <X />
              </button>
            </div>
            {/* Content */}
            <div className="p-5 space-y-5">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${severityConfig[selected.severity].bg} ${severityConfig[selected.severity].textColor}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${severityConfig[selected.severity].dot}`} />
                {severityConfig[selected.severity].label}
              </span>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">About</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{selected.description}</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Symptoms</h3>
                <ul className="space-y-1.5">
                  {selected.symptoms.map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />{s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Common Causes</h3>
                <ul className="space-y-1.5">
                  {selected.causes.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />{c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-2">How to Fix</h3>
                <p className="text-sm text-blue-900 leading-relaxed">{selected.solution}</p>
              </div>
              <button onClick={() => setSelected(null)}
                className="w-full py-3 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}