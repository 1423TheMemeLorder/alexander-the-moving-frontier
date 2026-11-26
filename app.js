/*
  Alexander · The Moving Frontier
  A standalone Leaflet campaign atlas. Dates and coordinates are intentionally
  labelled by confidence: the surviving evidence does not support a GPS-like log.
*/

const SOURCES = {
  arrian: { label: "Arrian, Anabasis of Alexander (Chinnock trans.)", url: "https://www.gutenberg.org/files/46976/46976-h/46976-h.htm" },
  indica: { label: "Arrian, Indica (Robson trans.)", url: "https://sourcebooks.web.fordham.edu/ancient/arrian-bookVIII-India.asp" },
  plutarch: { label: "Plutarch, Life of Alexander", url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Plutarch/Lives/Alexander*/3.html" },
  diodorus: { label: "Diodorus Siculus, Library of History, Book XVII", url: "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Diodorus_Siculus/17C*.html" },
  livius: { label: "Livius.org, chronology", url: "https://test.livius.org/articles/person/alexander-the-great/alexander-the-great-5" },
  britannica: { label: "Britannica timeline", url: "https://www.britannica.com/summary/Alexander-the-Great-Timeline" },
  jackson: { label: "Smith, chronology of the Indian campaign", url: "https://www.ibiblio.org/britishraj/Jackson2/appendix02.html" },
  atlas: { label: "Alexander — Campaigns Atlas", url: "https://alexander-ancien-atlas.com/battles.html" }
};

const E = (year, date, title, place, lat, lng, type, phase, summary, decision, outcome, confidence = "Approximate", camp = "", sources = ["arrian"]) => ({
  id: `${year}-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
  year, date, title, place, lat, lng, type, phase, summary, decision, outcome, confidence, camp, sources
});

const EVENTS = [
  E(338,"2 Aug 338 BCE","Battle of Chaeronea","Chaeronea, Boeotia · Greece",38.495,22.844,"battle","Before Asia","Serving under Philip II, the young Alexander commanded on the Macedonian left in the victory that broke the allied Greek line.","Commit the elite wing at the decisive point rather than hold it in reserve.","Macedonian hegemony over the Greek mainland; Alexander emerges as a field commander.","Location secure; Alexander’s precise role is debated","",["plutarch","diodorus"]),
  E(336,"Autumn 336 BCE","Accession and southern settlement","Aegae / Vergina · Macedonia",40.486,22.318,"political","Before Asia","After Philip II’s assassination, Alexander secured the army’s acclamation and moved rapidly to prevent a coalition forming.","Combine purges at court with speed and selective clemency abroad.","Recognition in Thessaly, at Thermopylae and by the League of Corinth.","Broad sequence secure","Royal base at Aegae, then rapid march south",["arrian","plutarch","livius"]),
  E(336,"Late 336 BCE","Outflanking the Thessalian pass","Vale of Tempe / Mount Ossa · Greece",39.79,22.65,"decision","Before Asia","A Thessalian force blocked the pass between Olympus and Ossa. Alexander cut steps or a track along Ossa and appeared behind it.","Avoid a frontal assault; turn the position through mountain ground.","The Thessalians submit and add cavalry to his army.","Route approximate","Enemy encampment is mentioned; Macedonian bivouac is not located",["plutarch","atlas"]),
  E(335,"Spring 335 BCE","Crossing Mount Haemus","Balkan Mountains · Bulgaria",42.74,25.34,"battle","Balkan campaign","Thracians defended a high pass with carts intended to crash into the climbing phalanx.","Open ranks or lie beneath shields as the carts pass, then counterattack with archers and infantry.","The pass is forced and the Thracian line routed.","Pass identification disputed","Camp below the pass is implied, not fixed",["arrian","atlas"]),
  E(335,"Spring 335 BCE","Battle of the Lyginus","Triballian country · northern Bulgaria",43.65,25.65,"battle","Balkan campaign","A Triballian force doubled back against the Macedonian rear and withdrew into wooded ground.","Use light troops to draw them into open country, then strike with phalanx and cavalry.","The Triballians are defeated; ancient accounts report heavy losses.","River and battlefield disputed","",["arrian","atlas"]),
  E(335,"Spring 335 BCE","Failed assault on Peuce","Danube delta region · Romania",45.15,28.92,"attack","Balkan campaign","King Syrmus and Triballian refugees held an island protected by steep banks and a strong current.","Attempt an amphibious landing with ships brought from Byzantium; abandon it when geography and resistance make it impractical.","No capture; Alexander shifts the operation to the opposite bank.","Island identification disputed","Riverbank staging area only",["arrian","atlas"]),
  E(335,"Spring 335 BCE","Night crossing of the Danube","Lower Danube · Romania/Bulgaria",44.90,27.95,"attack","Balkan campaign","Alexander ferried selected troops across the Danube on hide-stuffed tents and local boats before dawn.","Cross unexpectedly at night, use cavalry first, and threaten the Getic settlement.","The Getae withdraw; the town is taken and embassies arrive from neighboring peoples.","Crossing area approximate","One night on the riverbank before the crossing",["arrian","atlas"]),
  E(335,"Summer 335 BCE","Siege and escape at Pelium","Pelion region · Albania",40.71,20.54,"siege","Balkan campaign","Kleitos and Glaukias threatened Alexander near Pelium, where he risked encirclement and a blocked retreat.","Stage a disciplined drill to intimidate the enemy, force a river crossing, then return by night for a surprise attack.","The Illyrian coalition is dispersed and the route back to Greece secured.","Ancient Pelium’s location disputed","Fortified field camp beside the river; exact site unknown",["arrian","atlas"]),
  E(335,"Sep 335 BCE","Assault and destruction of Thebes","Thebes · Greece",38.322,23.318,"siege","Balkan campaign","Alexander marched south at extraordinary speed after hearing of revolt. The refusal of terms led to assault and urban fighting.","Make an example of the leading rebel city while allowing the League’s allies to frame the punishment.","Thebes is destroyed except for temples and selected houses; Greece is cowed before the Asian expedition.","Date often given as September; exact day uncertain","Macedonian camp outside the walls",["arrian","plutarch","livius"]),
  E(334,"Apr–May 334 BCE","Crossing into Asia","Sestos to Abydos · Dardanelles",40.20,26.41,"decision","Aegean & Anatolia","The main army crossed the Hellespont while Alexander visited the heroic landscape of Troy.","Frame the invasion as a Panhellenic war of revenge and secure the crossing before Persian forces concentrate.","The Asian expedition begins with supply lines back to Europe.","Crossing corridor secure; day uncertain","First Asian bivouacs near Arisbe",["arrian","plutarch","livius"]),
  E(334,"May 334 BCE","Rites at Troy","Troy / Hisarlık · Türkiye",39.957,26.239,"decision","Aegean & Anatolia","Alexander sacrificed at Troy and exchanged armor at the temple of Athena, binding his campaign to Homeric memory.","Use ritual and heroic symbolism to unify an army with Macedonian and allied contingents.","A potent public narrative for the conquest is established.","Site secure; ritual details vary","Halt in the Troad",["arrian","plutarch"]),
  E(334,"Early Jun 334 BCE","Battle of the Granicus","Granicus / Biga Çayı · Türkiye",40.317,27.31,"battle","Aegean & Anatolia","Persian satrapal cavalry held the far bank while Greek mercenaries stood behind. Alexander attacked across the river.","Reject advice to wait; lead the Companion cavalry in an oblique river assault while the phalanx fixes the line.","Persian western field forces are broken; Greek cities of Asia Minor become accessible.","River secure; battlefield stretch approximate","Army camped near the river before or after battle",["arrian","plutarch","livius"]),
  E(334,"Jun 334 BCE","Sardis surrenders","Sardis · Türkiye",38.488,28.040,"political","Aegean & Anatolia","The citadel and treasury of Sardis were surrendered without a siege.","Accept capitulation, restore local civic arrangements, and place a garrison at the strategic acropolis.","Lydia and a major royal road node pass under Macedonian control.","Place secure","Operational halt at Sardis",["arrian","livius"]),
  E(334,"Jul 334 BCE","Siege of Miletus","Miletus / Balat · Türkiye",37.530,27.278,"siege","Aegean & Anatolia","Miletus resisted with hopes of Persian naval support. Macedonian ships blocked the harbor approaches.","Decline a major fleet battle, seal the port, breach the walls, and neutralize Persian sea power from land.","Miletus falls; Alexander soon disbands most of his costly fleet.","Place and month secure","Siege camp outside the walls",["arrian","livius"]),
  E(334,"Aug–Sep 334 BCE","Siege of Halicarnassus","Halicarnassus / Bodrum · Türkiye",37.038,27.424,"siege","Aegean & Anatolia","Memnon of Rhodes organized a stubborn defense with walls, ditches and counterattacks.","Use towers and rams, repel night sorties, then accept a partial victory when defenders burn and evacuate the city.","The city is taken, but Persian-held citadels require containment.","Place secure; duration approximate","Large siege camp north/east of the walls",["arrian","diodorus","livius"]),
  E(334,"Winter 334/333 BCE","Pisidian mountain fighting","Termessos–Sagalassos · Türkiye",37.67,30.52,"battle","Aegean & Anatolia","Mountain communities resisted the march through Pisidia; Termessos was bypassed and Sagalassos fought in the hills.","Do not waste time on every impregnable position; isolate some and assault those controlling the route.","The army reaches the Anatolian plateau after hard local fighting.","Regional placement; several actions grouped","Winter halts across Pamphylia and Phrygia",["arrian","atlas"]),
  E(333,"Spring–summer 333 BCE","Gordium and the knot","Gordium / Yassıhüyük · Türkiye",39.655,31.994,"decision","Aegean & Anatolia","At the Phrygian capital, Alexander confronted the famous wagon knot associated with rule over Asia.","Resolve the oracle publicly—by cutting or unfastening the knot—then wait for reinforcements before marching east.","The episode strengthens royal legitimacy and campaign morale.","Place secure; method legendary/contested","Extended army halt at Gordium",["plutarch","livius"]),
  E(333,"Sep 333 BCE","Illness at Tarsus","Tarsus · Türkiye",36.917,34.893,"camp","Aegean & Anatolia","After a rapid descent through the Cilician Gates, Alexander fell dangerously ill at Tarsus.","Trust the physician Philip despite a warning that he had been bribed; recover while Parmenion secures the Syrian Gates.","Command continuity survives a high-risk pause.","Place and episode secure","Convalescent halt at Tarsus",["plutarch","livius"]),
  E(333,"c. 5 Nov 333 BCE","Battle of Issus","Pinarus plain near İskenderun · Türkiye",36.58,36.18,"battle","Aegean & Anatolia","Darius moved behind Alexander and chose a narrow coastal plain, limiting Persian numerical advantage.","Reverse the march, anchor the left to the sea, punch through on the right, then turn toward Darius.","Darius flees; his family, camp and treasury are captured.","Battlefield river identification debated","Macedonian camp south of the Pinarus; Persian royal camp captured",["arrian","plutarch","livius"]),
  E(333,"Late 333 BCE","Rejecting Darius’ first terms","Marathus / Amrit · Syria",34.83,35.91,"decision","Levant & Egypt","Darius offered negotiation after Issus. Alexander answered as the victor and claimant to Asia.","Demand that Darius address him as king of Asia and come in person as a suppliant.","The campaign’s goal shifts openly from punitive invasion to possession of the empire.","Location of correspondence approximate","Coastal winter halt",["arrian","livius"]),
  E(332,"Jan–Jul 332 BCE","Siege of Tyre","Tyre · Lebanon",33.270,35.196,"siege","Levant & Egypt","Island Tyre refused Alexander entry. The army built a causeway while fleets from surrendered Phoenician cities changed the balance at sea.","Turn a land army into a siege-and-naval force; rebuild the mole after storms and attacks and assault from multiple sides.","Tyre falls after roughly seven months, securing the eastern Mediterranean coast.","Place and broad duration secure","Major shore camp opposite the island; exact footprint uncertain",["arrian","diodorus","livius"]),
  E(332,"Sep–Nov 332 BCE","Siege of Gaza","Gaza · Palestine",31.504,34.466,"siege","Levant & Egypt","Batis held a high, strongly walled city blocking the road to Egypt. Engineers built up a siege mound.","Persist after being wounded; use Tyrian siege machinery and repeated assaults rather than bypass the fortress.","Gaza is stormed after a siege; the route into Egypt opens.","Place secure; dating varies","Siege camp and earthworks around the tell",["arrian","diodorus","livius"]),
  E(332,"Nov 332 BCE","Entry into Egypt","Pelusium · Egypt",31.04,32.55,"political","Levant & Egypt","The Persian satrap surrendered Egypt without a major battle.","Present as liberator, respect Egyptian cult, and retain practical administrative structures.","Egypt becomes a secure strategic and financial base.","Place secure","Army halt at Pelusium, then Memphis",["arrian","livius"]),
  E(331,"Jan 331 BCE","Winter court at Memphis","Memphis · Egypt",29.85,31.25,"camp","Levant & Egypt","Alexander held games and sacrifices, received reinforcements and organized the province.","Mix Macedonian military oversight with Egyptian civil administration.","The rear area is stabilized before the return to Asia.","Place secure","Attested extended halt / winter base",["arrian","livius"]),
  E(331,"Early 331 BCE","Journey to Siwa","Oracle of Ammon, Siwa · Egypt",29.203,25.519,"decision","Levant & Egypt","Alexander crossed the western desert to consult the oracle of Ammon; later traditions differ on what was said.","Seek divine validation and connect kingship with Egyptian and Greek religious language.","His royal image acquires a stronger divine association.","Route and oracle dialogue uncertain","Desert staging halts are unlocated",["arrian","plutarch","livius"]),
  E(331,"7 Apr 331 BCE","Foundation of Alexandria","Alexandria · Egypt",31.200,29.918,"political","Levant & Egypt","A new city was laid out between the Mediterranean and Lake Mareotis.","Create a harbor city linking Egypt’s resources to the Aegean world.","Alexandria becomes the most consequential of his foundations.","Traditional date; plan details partly literary","Planning halt on the coastal site",["plutarch","livius"]),
  E(331,"Jul 331 BCE","Crossing the Euphrates","Thapsacus region · Syria",35.84,38.00,"decision","Mesopotamia & Persia","Darius’ forces did not successfully prevent the crossing. Alexander then chose a cooler, better-supplied northern route.","Avoid the direct desert road to Babylon; march through upper Mesopotamia and force Darius to seek battle.","The Macedonian army enters the imperial heartland.","Thapsacus identification approximate","Bridgehead camp on the Euphrates",["arrian","livius"]),
  E(331,"20 Sep 331 BCE","Eclipse and pre-battle camp","Tigris to Gaugamela · Iraq",36.16,43.10,"camp","Mesopotamia & Persia","After crossing the Tigris, the army observed a lunar eclipse. Alexander later rested several days before the decisive battle.","Reconnoiter personally, rest the troops, and refuse a night attack so victory cannot be blamed on darkness.","The army enters Gaugamela rested and in ordered formation.","Camp area approximate","Four-day camp before battle; exact location debated",["arrian","plutarch"]),
  E(331,"1 Oct 331 BCE","Battle of Gaugamela","Gaugamela plain · Iraq",36.36,43.25,"battle","Mesopotamia & Persia","Darius prepared open ground for chariots and deployed a wider army. Alexander advanced obliquely to stretch the Persian left.","Use a flexible second line against encirclement, open a gap by moving right, and charge the center when it appears.","Darius flees; organized Achaemenid resistance in the imperial core collapses.","Date secure; battlefield zone approximate","Persian camp captured after battle",["arrian","plutarch","livius"]),
  E(331,"22 Oct 331 BCE","Babylon opens its gates","Babylon · Iraq",32.536,44.420,"political","Mesopotamia & Persia","Mazaeus surrendered Babylon and was retained as satrap under Macedonian supervision.","Reward peaceful submission and reuse experienced Persian administrators.","The army receives treasure, supplies and a major imperial capital intact.","Date and place secure","Extended ceremonial halt in Babylon",["arrian","livius"]),
  E(331,"15 Dec 331 BCE","Susa and the royal treasury","Susa · Iran",32.190,48.257,"camp","Mesopotamia & Persia","Susa surrendered with a vast treasury and royal property.","Secure the treasury, leave a garrison, and send part of the wealth west while advancing toward Persis.","Alexander gains the financial means to sustain the eastern war.","Date from modern chronology; place secure","Operational halt at Susa",["arrian","livius"]),
  E(330,"Jan 330 BCE","Campaign against the Uxians","Zagros passes · Iran",31.90,49.20,"attack","Mesopotamia & Persia","Uxian highlanders demanded the customary toll for passage toward Persis.","Use a night approach and converging forces to seize villages and block retreat rather than pay.","The route through the Zagros is forced.","Regional location approximate","Mountain bivouacs unlocated",["arrian","atlas"]),
  E(330,"20 Jan 330 BCE","Battle of the Persian Gate","Tang-e Meyran region · Iran",30.66,51.62,"battle","Mesopotamia & Persia","Ariobarzanes blocked a narrow pass and initially repelled the Macedonians.","Learn a mountain path from local guides, leave a holding force, and attack the defenders from rear and front.","The last major gate into the Persian homeland is broken.","Pass identification probable, not certain","Camp below the blocked pass",["arrian","livius","atlas"]),
  E(330,"Jan–May 330 BCE","Persepolis: occupation and burning","Persepolis · Iran",29.935,52.891,"decision","Mesopotamia & Persia","Alexander occupied the ceremonial capital. Months later the palace complex was burned, whether as calculated revenge or during revelry.","Allow or order destruction of the palace while preserving treasure and continuing the claim to Asian kingship.","Achaemenid symbolic power is shattered, but the act sits uneasily with ruling the empire.","Place secure; motive disputed","Four-month royal encampment / residence",["arrian","plutarch","diodorus","livius"]),
  E(330,"Jun 330 BCE","Ecbatana and the pursuit","Ecbatana / Hamadan · Iran",34.799,48.515,"decision","Pursuit of Darius","At Ecbatana, Alexander dismissed many Greek allied troops and began a fast pursuit of Darius.","Lighten the force, pay off allies, and drive east before Darius can raise another army.","The war changes from set-piece invasion to mobile pursuit.","Place and broad date secure","Major supply halt at Ecbatana",["arrian","livius"]),
  E(330,"c. 17 Jul 330 BCE","Death of Darius III","Near Hecatompylos / Damghan · Iran",35.70,54.34,"political","Pursuit of Darius","Bessus and other officers deposed and mortally wounded Darius as Alexander’s advance guard approached.","Honor Darius with royal burial and pursue Bessus as a regicide and usurper.","Alexander can present himself as legitimate successor, not merely conqueror.","Exact death site disputed","Forced-march halts in the Parthian corridor",["arrian","livius"]),
  E(330,"Aug 330 BCE","Hyrcanian settlement","Zadracarta region · Iran",36.74,53.32,"camp","Eastern campaigns","Alexander accepted submissions in Hyrcania and dealt with Greek mercenaries who had served Darius.","Offer differentiated terms while securing the Caspian flank before turning east again.","Hyrcania is incorporated without a prolonged campaign.","Zadracarta’s identification uncertain","Rest and reorganization in Hyrcania",["arrian","livius"]),
  E(330,"Autumn 330 BCE","Revolt of Satibarzanes","Artacoana / Herat · Afghanistan",34.35,62.20,"attack","Eastern campaigns","Satibarzanes first submitted, then killed the Macedonian garrison and raised Aria in revolt.","Reverse direction immediately, retake the capital, and found/rename a strongpoint to hold the region.","The revolt is suppressed, but eastern resistance proves persistent.","Ancient city placement approximate","Camp at Artacoana; foundation associated with Alexandria in Aria",["arrian","atlas"]),
  E(330,"Oct–Nov 330 BCE","Philotas crisis at Prophthasia","Prophthasia / Farah region · Afghanistan",32.37,62.12,"decision","Eastern campaigns","A reported conspiracy led to Philotas’ trial and execution, followed by the killing of his father Parmenion at Ecbatana.","Remove a powerful command network judged dangerous, despite the institutional shock.","Command is centralized but trust within the officer corps deteriorates.","Ancient site identification approximate","Army assembly and camp during the trial",["arrian","plutarch","livius"]),
  E(329,"Winter–spring 329 BCE","Arachosian base","Alexandria in Arachosia / Kandahar",31.62,65.72,"camp","Eastern campaigns","Forces reunited in Arachosia before the crossing of the Hindu Kush.","Consolidate communications with a fortified settlement and wait for a viable mountain crossing.","A strategic rear base supports the push into Bactria.","Foundation identification probable","Winter quarters near Kandahar",["arrian","livius"]),
  E(329,"May 329 BCE","Crossing the Hindu Kush","Khawak Pass region · Afghanistan",35.52,69.86,"decision","Eastern campaigns","The army crossed high passes in difficult conditions to outflank Bessus, who expected the main approach elsewhere.","Accept logistical hardship to gain strategic surprise.","Alexander descends into Bactria before Bessus can organize a defense.","Pass used in 329 is debated","High-altitude march camps unlocated",["arrian","livius","jackson"]),
  E(329,"Jun 329 BCE","Crossing the Oxus","Amu Darya near Termez · Uzbekistan",37.20,67.30,"decision","Eastern campaigns","With boats unavailable, troops crossed on hides stuffed with dry material after a harsh desert approach.","Improvise flotation equipment and keep the pursuit moving despite the river barrier.","Bessus loses his last protective frontier and is soon handed over.","Crossing sector approximate","Five-day crossing and riverbank camp",["arrian","livius"]),
  E(329,"Jun 329 BCE","Capture of Bessus","Nautaca–Bactria corridor · Central Asia",38.00,66.60,"political","Eastern campaigns","Bessus was seized by his own allies and delivered to Alexander.","Treat him as the murderer of Darius and punish him under Persian royal forms.","The rival claimant is removed, but Spitamenes begins a wider revolt.","Capture place disputed","",["arrian","livius"]),
  E(329,"Summer 329 BCE","Maracanda occupied","Maracanda / Samarkand · Uzbekistan",39.655,66.975,"camp","Eastern campaigns","Alexander occupied the principal Sogdian center while rebellion spread behind him.","Garrison key cities and push rapidly toward the Jaxartes frontier.","A forward base is gained but later besieged by Spitamenes.","Place secure","Garrison and campaign base at Maracanda",["arrian","livius"]),
  E(329,"Jul 329 BCE","Seven Sogdian towns","Jaxartes corridor · Tajikistan",40.15,69.45,"siege","Eastern campaigns","A chain of fortified settlements revolted along the Jaxartes. Several were stormed in rapid succession.","Divide forces for simultaneous pressure, use siege equipment aggressively, and prevent the revolt from coalescing.","The river corridor is brutally secured.","Individual town identifications uncertain","Short siege camps along the river",["arrian","atlas"]),
  E(329,"Jul 329 BCE","Battle of the Jaxartes","Near Khujand · Tajikistan",40.28,69.62,"battle","Eastern campaigns","Scythian horse archers challenged the Macedonians across the river.","Suppress the opposite bank with catapults, cross under cover, bait the horsemen with light troops, then envelop with cavalry.","The Scythians are driven off and the northern frontier asserted.","Battlefield sector approximate","River camp at Alexandria Eschate",["arrian","livius"]),
  E(329,"329 BCE","Disaster on the Polytimetus","Zeravshan valley · Uzbekistan",39.75,65.70,"attack","Eastern campaigns","A relief force sent against Spitamenes was drawn into a retreat and largely destroyed near the river.","Alexander had delegated the response; after the defeat he force-marched back to stabilize Sogdiana.","One of the campaign’s sharpest reverses exposes the danger of divided commands.","Battle location approximate; Alexander not present","",["arrian","atlas"]),
  E(328,"Winter 329/328 BCE","Winter quarters at Bactra","Bactra / Balkh · Afghanistan",36.76,66.90,"camp","Eastern campaigns","The army regrouped in Bactria while resistance continued across Sogdiana.","Reorganize cavalry into units less dependent on a single commander and prepare mobile columns.","The army adapts to dispersed counterinsurgency.","Place secure","Attested winter quarters",["arrian","livius"]),
  E(328,"Spring–summer 328 BCE","Five-column Sogdian campaign","Sogdiana · Uzbekistan/Tajikistan",39.40,67.20,"attack","Eastern campaigns","Alexander and senior commanders swept through separate districts, reducing strongholds and denying refuge to Spitamenes.","Use converging mobile columns rather than one large army in broken terrain.","Organized resistance contracts, though raids continue.","Regional campaign marker","Repeated field camps not individually preserved",["arrian","livius"]),
  E(328,"Autumn 328 BCE","Death of Cleitus","Maracanda · Uzbekistan",39.655,66.975,"decision","Eastern campaigns","During a drunken quarrel, Alexander killed Cleitus, who had saved him at the Granicus.","A catastrophic impulsive act rather than a military decision; Alexander then isolated himself in remorse.","Officer relations and the king’s increasingly autocratic style become a central fault line.","Place and broad date accepted","Banquet at the campaign residence",["arrian","plutarch","livius"]),
  E(328,"Dec 328 BCE","Spitamenes killed","Sogdian–Massagetae frontier",40.75,63.80,"political","Eastern campaigns","After defeat, Spitamenes was killed and his head sent to Alexander, ending the most resilient regional resistance.","Combine relentless pursuit with negotiated incorporation of local elites.","The revolt loses its principal leader.","Location unknown; regional marker","",["arrian","livius"]),
  E(327,"Winter 328/327 BCE","Nautaca winter base","Nautaca / Shahrisabz region · Uzbekistan",39.06,66.83,"camp","Eastern campaigns","Alexander wintered near Nautaca before attacking the remaining mountain strongholds.","Pause operations until a winter opportunity allows surprise against positions thought inaccessible.","A launch point is prepared for the Sogdian Rock operations.","Nautaca identification approximate","Attested winter quarters",["arrian","livius"]),
  E(327,"Spring 327 BCE","Capture of the Sogdian Rock","Sogdiana · Uzbekistan",38.50,67.50,"siege","Eastern campaigns","Defenders mocked the Macedonians’ need for ‘winged men.’ Selected climbers scaled a cliff at night using pegs and ropes.","Offer a reward for a near-impossible climb; bluff with the climbers’ appearance above the fortress.","The stronghold surrenders; Roxane is captured and later marries Alexander.","Stronghold identification disputed","Assault camp below the rock",["arrian","livius","atlas"]),
  E(327,"Spring 327 BCE","Rock of Chorienes","Vakhsh region · Tajikistan",38.25,69.25,"siege","Eastern campaigns","A second mountain refuge was approached by filling a deep ravine under hostile conditions.","Turn engineering labor into psychological pressure, then offer favorable surrender terms.","Chorienes submits and helps provision the army.","Location disputed","Large work camp beside the ravine",["arrian","atlas"]),
  E(327,"Summer 327 BCE","Bactra: proskynesis crisis","Bactra / Balkh · Afghanistan",36.76,66.90,"decision","Eastern campaigns","An attempt to introduce Persian-style proskynesis among Macedonians and Greeks met resistance; Callisthenes refused.","Experiment with a court ritual meant to bridge constituencies, then abandon universal enforcement.","The cultural divide at court deepens; Callisthenes later dies after the pages’ conspiracy.","Place and sequence secure","Army reunited at Bactra",["arrian","livius"]),
  E(327,"May–Jun 327 BCE","Army divided for India","Nicaea / Jalalabad · Afghanistan",34.43,70.45,"decision","India","Alexander took a selected force into the mountain country while Hephaestion and Perdiccas moved down the Kabul valley to bridge the Indus.","Split the army: reduce flank threats personally while a main column prepares the strategic river crossing.","Parallel operations open the route to the subcontinent.","Timing from reconstructed chronology","Campaign camp near Nicaea",["arrian","jackson"]),
  E(327,"Summer 327 BCE","Aspasian fighting","Kunar valley · Afghanistan/Pakistan",35.00,71.10,"attack","India","Mountain communities resisted; Alexander was wounded during the assaults and towns were taken in hard fighting.","Press rapidly through the valleys and prevent defenders concentrating in successive strongholds.","The Kunar–Swat approach is forced at high human cost.","Actions and sites partly unidentified","Multiple assault camps; no exact daily log",["arrian","jackson","atlas"]),
  E(327,"Sep–Oct 327 BCE","Siege of Massaga","Swat region · Pakistan",34.77,72.36,"siege","India","The Assakenian fortress resisted for days. After its ruler’s death, an attempted withdrawal by mercenaries ended in massacre.","Continue the siege after being wounded and prevent a large mercenary force from joining other enemies.","Massaga falls; the episode becomes one of the campaign’s most controversial.","Site identification debated","Thirty-day operation in some chronologies; siege camp unlocated",["arrian","diodorus","jackson"]),
  E(327,"Late 327 BCE","Bazira and Ora","Swat–Buner region · Pakistan",34.51,72.57,"siege","India","Further Assakenian strongholds were abandoned or captured as Alexander secured the approaches to the Indus.","Exploit momentum after Massaga and deny defenders refuge in connected hill forts.","The mountain corridor is opened toward Aornus.","Locations probable; sequence approximate","Short siege halts",["arrian","atlas"]),
  E(326,"Winter 327/326 BCE","Siege of Aornus","Pir-Sar region · Pakistan",34.79,72.87,"siege","India","A great rock above the Indus was reputed never to have been taken. Macedonians built a mound across a ravine and seized high ground.","Capture the prestige target before crossing the Indus; combine engineering with a flank climb.","The defenders flee and Alexander secures his rear.","Pir-Sar identification influential but debated","Engineering and siege camp below the rock",["arrian","jackson","atlas"]),
  E(326,"Mar 326 BCE","Crossing the Indus","Hund / Ohind · Pakistan",33.91,72.24,"camp","India","Hephaestion had prepared boats and a bridge. The reunited army rested and crossed at the beginning of spring.","Concentrate the divided columns, rest roughly thirty days, then cross with a secure bridgehead.","The Macedonian army enters the Punjab.","Crossing region probable","Thirty-day halt at the bridgehead",["arrian","jackson"]),
  E(326,"Mar–Apr 326 BCE","Alliance at Taxila","Taxila · Pakistan",33.746,72.839,"political","India","Taxiles welcomed Alexander and supplied troops and elephants against his rival Porus.","Use local alliances to reduce the need for sieges and to isolate Porus diplomatically.","Taxila becomes the main western base for the Hydaspes campaign.","Place secure","Extended halt and games at Taxila",["arrian","jackson"]),
  E(326,"May–Jul 326 BCE","Battle of the Hydaspes","Jhelum River · Pakistan",32.94,73.73,"battle","India","Porus watched the flooded river with elephants. Alexander used repeated feints, then crossed upstream during a storm with a picked force.","Leave Craterus opposite the camp, cross secretly at night, defeat the advance guard and attack before Porus can redeploy.","Porus is defeated but restored as ruler; Bucephala and Nicaea are founded.","Date debated (May or early July); crossing/battle site disputed","Main camp on west bank; crossing camp upstream",["arrian","plutarch","livius","jackson"]),
  E(326,"Aug 326 BCE","Battle and siege of Sangala","Sangala region · Punjab, Pakistan",31.85,74.15,"battle","India","The Cathaeans formed a wagon defense and then withdrew into Sangala, which was surrounded and stormed.","Break the wagon line before it fully deploys; seal a gap at the city lake to prevent escape.","Sangala is destroyed and remaining opposition east of the Ravi collapses.","Ancient Sangala’s location disputed","Siege camp outside Sangala",["arrian","jackson","atlas"]),
  E(326,"Sep 326 BCE","Mutiny at the Hyphasis","Beas River · India",31.18,75.33,"decision","India","Exhausted troops refused to march farther east despite Alexander’s speech and three days of seclusion.","Test the army’s resolve, then accept the limit, build monumental altars and order a return.","The eastern advance ends; Alexander must redesign the expedition around the Indus descent.","Crossing/camp location approximate","Twelve-day camp beside the Hyphasis",["arrian","plutarch","jackson"]),
  E(326,"Oct–Nov 326 BCE","Fleet built on the Hydaspes","Near Jhelum · Pakistan",32.93,73.72,"camp","India & return","Back at the Hydaspes, timber and crews were assembled for a large river fleet while land forces were divided along both banks.","Convert the army into a combined river-and-land column to explore and secure the Indus system.","The return becomes a major amphibious operation.","Broad area secure","Multi-week shipbuilding base",["arrian","jackson"]),
  E(326,"Nov 326 BCE","Voyage begins","Hydaspes River · Pakistan",32.50,73.45,"decision","India & return","Nearchus commanded the fleet; Craterus and Hephaestion marched on opposite banks as the ships moved downstream.","Coordinate three mutually supporting columns and concentrate when resistance appears.","The descent begins, carrying the campaign into new river polities.","Date broadly attested","Moving river camps",["arrian","indica","livius"]),
  E(325,"Jan 325 BCE","Mallian campaign","Ravi–Chenab doab · Pakistan",30.90,72.55,"attack","India & return","The Mallians avoided a pitched battle and withdrew into fortified towns. Alexander drove columns through the doab to prevent escape.","Make a rapid desert crossing and use converging forces to surprise dispersed defenders.","Several towns fall; resistance concentrates at a major fortified city.","Regional marker; towns debated","Fast-moving column camps",["arrian","livius","jackson"]),
  E(325,"Jan 325 BCE","Alexander wounded at the Mallian city","Multan region · Pakistan",30.20,71.47,"siege","India & return","Alexander leapt inside the walls with only a few companions and was struck in the chest by an arrow.","An extreme personal gamble accelerates the assault but nearly kills the commander.","The city falls; the army is traumatized and Alexander must publicly demonstrate survival.","Identification with Multan region uncertain","Recovery camp after the assault",["arrian","plutarch","livius"]),
  E(325,"Feb 325 BCE","Disaster at the river confluence","Chenab–Indus system · Pakistan",29.15,70.70,"attack","India & return","At a dangerous confluence, currents damaged or destroyed vessels and threw the fleet into confusion.","Reorganize and repair the fleet before continuing; adapt formation to unfamiliar hydrology.","The descent continues after losses and delay.","Which confluence/event is debated","Repair halt on the riverbank",["arrian","livius"]),
  E(325,"Spring 325 BCE","Musicanus and Sambus revolts","Upper Sindh · Pakistan",27.70,68.85,"attack","India & return","Rulers who submitted or fled later resisted; garrisons and commanders moved against renewed opposition, including Brahman-led revolt.","Alternate rapid punitive columns with reinstatement of cooperative local rulers.","The lower Indus is occupied, but control remains coercive and unstable.","Several operations grouped regionally","Operational halts at major towns",["arrian","livius","jackson"]),
  E(325,"Jul–Aug 325 BCE","Patala and the Indus delta","Patala region · Pakistan",25.40,68.30,"camp","India & return","At the delta, Alexander explored both river mouths, repaired canals and prepared naval bases while inhabitants initially fled.","Reconnoiter the Ocean, establish docks, wells and a defensible base for Nearchus’ voyage.","The southern limit of the river expedition is reached.","Ancient Patala’s location disputed","Extended naval and logistics base",["arrian","indica","livius"]),
  E(325,"Aug–Sep 325 BCE","Campaign against the Oreitans","Las Bela region · Pakistan",25.87,66.60,"attack","India & return","Alexander’s column subdued the Oreitans and founded a coastal base before entering Gedrosia.","Secure food depots and a shore connection for the fleet, then divide forces for separate return routes.","The coastal hinge is taken, but promised provisioning proves inadequate.","Regional placement approximate","Camp near Rhambacia / Alexandria among the Oreitans",["arrian","indica"]),
  E(325,"Sep–Nov 325 BCE","Crossing the Gedrosian desert","Makran · Pakistan/Iran",26.00,62.20,"decision","India & return","Heat, sand, flash floods and supply failure devastated the marching column. Ancient authors debate why Alexander chose the route.","Attempt to support Nearchus and surpass earlier conquerors, despite severe logistical warning signs.","The army reaches Pura after enormous non-battle losses; the decision is a strategic catastrophe.","Route reconstructed; daily camps unknown","Successive emergency camps at scarce water sources",["arrian","indica","livius","jackson"]),
  E(325,"Late 325 BCE","Recovery at Pura","Pura / Bampur · Iran",27.19,60.46,"camp","India & return","Survivors reached the Gedrosian capital after roughly sixty days and rested.","Stop, reconstitute units and restore supply before moving through Carmania.","The shattered column becomes operational again.","Pura identification probable","Attested recovery halt",["arrian","jackson"]),
  E(325,"Dec 325–Jan 324 BCE","Reunion in Carmania","Carmania / Kerman · Iran",30.28,57.08,"camp","India & return","Alexander met Craterus’ safer inland column and later received news that Nearchus had survived the voyage.","Reunite separated forces, punish officials accused of abuse, and celebrate survival.","The expedition’s branches converge after the Indian return.","Meeting location approximate","Extended reunion and festival camp",["arrian","livius"]),
  E(324,"Feb 324 BCE","Return to Pasargadae","Pasargadae · Iran",30.200,53.179,"decision","Imperial consolidation","Alexander found Cyrus’ tomb disturbed and ordered restoration and investigation.","Present himself as guardian of legitimate Persian kingship while disciplining satrapal misconduct.","The successor narrative is reinforced after years of absence.","Place secure","Royal halt at Pasargadae",["arrian","livius"]),
  E(324,"Mar–Apr 324 BCE","Susa weddings","Susa · Iran",32.190,48.257,"political","Imperial consolidation","Alexander and senior companions married Persian noblewomen in a mass ceremony; Macedonian soldiers’ mixed marriages received gifts.","Fuse elite networks and symbolize a shared imperial ruling class.","Thousands of unions are recognized, though many elite marriages later dissolve.","Place and broad date secure","Long administrative halt at Susa",["arrian","livius"]),
  E(324,"Aug 324 BCE","Mutiny at Opis","Opis region · Iraq",33.80,44.60,"decision","Imperial consolidation","Macedonians protested the discharge of veterans and the promotion of Persian troops. Alexander dismissed them in anger, then staged a reconciliation.","Confront the mutiny publicly, elevate Persian units, and restore unity through negotiated honors.","Veterans depart under Craterus; the mixed imperial army becomes explicit policy.","Ancient Opis location approximate","Army assembly camp at Opis",["arrian","livius"]),
  E(324,"Oct 324 BCE","Hephaestion dies at Ecbatana","Ecbatana / Hamadan · Iran",34.799,48.515,"camp","Imperial consolidation","Hephaestion fell ill and died during games and festivals at Ecbatana.","Order empire-wide mourning and an immense funeral program; reassign critical commands.","Alexander loses his closest companion and reacts with extreme grief.","Place and date broadly secure","Autumn court and army halt",["arrian","plutarch","livius"]),
  E(323,"Winter 324/323 BCE","Campaign against the Cossaeans","Zagros northeast of Susa · Iran",33.40,48.20,"attack","Final year","Alexander led a winter campaign into Cossaean mountain country, described by sources as both strategic pacification and an offering to Hephaestion.","Use converging columns during winter, when highland communities are less mobile.","The routes between Media and Babylonia are violently secured.","Regional campaign marker","Winter field camps not preserved",["arrian","livius","atlas"]),
  E(323,"Apr–May 323 BCE","Return to Babylon","Babylon · Iraq",32.536,44.420,"camp","Final year","Alexander returned despite ominous reports, received embassies and prepared ships and troops for an Arabian expedition.","Make Babylon the operational center of a maritime campaign around Arabia.","A new expedition is assembled but never launched.","Place and months secure","Royal residence and army/naval base",["arrian","livius"]),
  E(323,"10–11 Jun 323 BCE","Death of Alexander","Babylon · Iraq",32.536,44.420,"political","Final year","After days of fever, Alexander died in Babylon at age thirty-two, without a settled adult successor.","No verified final strategic decision survives; later sources preserve conflicting last words and succession stories.","The planned Arabian campaign ends and the empire enters the Wars of the Successors.","Date secure in Babylonian and classical chronology","Final residence in Nebuchadnezzar’s palace complex",["arrian","plutarch","livius","britannica"])
];

const PEOPLE = [
  {
    id:"alexander", name:"Alexander the Great", dates:"356–323 BCE", role:"King of Macedon · campaign commander",
    aliases:["Alexander III", "Alexander III of Macedon", "Alexander of Macedon", "Alexandros"],
    summary:"King of Macedon from 336 BCE and commander of the expedition that overthrew the Achaemenid Empire before continuing through Central Asia and into the Punjab.",
    connection:"The atlas follows Alexander’s decisions and movements from his first recorded field command at Chaeronea to his death in Babylon. The route is a reconstruction of campaign episodes, not a claim that every intermediate march is known.",
    eventTitles:["Battle of Chaeronea","Accession and southern settlement","Crossing into Asia","Battle of Gaugamela","Capture of the Sogdian Rock","Mutiny at the Hyphasis","Death of Alexander"], sourceKeys:["arrian","plutarch","diodorus","livius"]
  },
  {
    id:"philip-ii", name:"Philip II of Macedon", dates:"c. 382–336 BCE", role:"King of Macedon · Alexander’s father",
    aliases:["Philip II", "Philip of Macedon", "Philip II of Macedonia"],
    summary:"The Macedonian king who transformed the army and established the political and military base inherited by Alexander.",
    connection:"Alexander served under Philip at Chaeronea. Philip’s assassination in 336 BCE created the succession crisis that Alexander resolved before beginning the Asian expedition.",
    eventTitles:["Battle of Chaeronea","Accession and southern settlement"], sourceKeys:["plutarch","diodorus"]
  },
  {
    id:"olympias", name:"Olympias", dates:"c. 375–316 BCE", role:"Queen of Macedon · Alexander’s mother",
    aliases:["Olympias of Epirus", "Myrtale"],
    summary:"An Epirote princess, wife of Philip II and mother of Alexander whose dynastic position remained important before and after the Asian campaign.",
    connection:"Olympias belonged to the succession politics surrounding Philip’s death and Alexander’s accession, although she did not accompany the army in Asia.",
    eventTitles:["Accession and southern settlement","Death of Alexander"], sourceKeys:["plutarch","diodorus"]
  },
  {
    id:"darius-iii", name:"Darius III", dates:"c. 380–330 BCE", role:"Achaemenid Great King",
    aliases:["Darius Codomannus", "Darius III Codomannus", "Dareios III"],
    summary:"The last Achaemenid king, defeated by Alexander at Issus and Gaugamela before being deposed and killed during the eastward retreat.",
    connection:"Darius was Alexander’s principal imperial opponent. After Darius’ death, Alexander presented his campaign against Bessus as punishment for regicide and increasingly claimed Achaemenid legitimacy.",
    eventTitles:["Battle of Issus","Rejecting Darius’ first terms","Battle of Gaugamela","Death of Darius III"], sourceKeys:["arrian","plutarch","diodorus","livius"]
  },
  {
    id:"roxana", name:"Roxana", dates:"c. 340–310 BCE", role:"Bactrian or Sogdian noblewoman · Alexander’s wife",
    aliases:["Roxane", "Rhoxane", "Roxana of Bactria", "Roxana of Sogdiana"],
    summary:"Daughter of Oxyartes and the best-known of Alexander’s wives. Ancient accounts place their meeting after the capture of a Sogdian mountain stronghold.",
    connection:"The marriage tied Alexander to a prominent eastern noble family during the difficult settlement of Bactria and Sogdiana. She later bore Alexander IV after Alexander’s death.",
    eventTitles:["Capture of the Sogdian Rock","Death of Alexander"], sourceKeys:["arrian","plutarch","livius"]
  },
  {
    id:"hephaestion", name:"Hephaestion", dates:"c. 356–324 BCE", role:"Companion · senior commander",
    aliases:["Hephaistion", "Hephaestion Amyntoros"],
    summary:"Alexander’s closest companion and one of the expedition’s most senior officers, entrusted with major logistical and independent commands.",
    connection:"Hephaestion helped prepare the Indus crossing, commanded a land column during the river descent and became chiliarch before his death at Ecbatana in 324 BCE.",
    eventTitles:["Army divided for India","Crossing the Indus","Voyage begins","Hephaestion dies at Ecbatana"], sourceKeys:["arrian","plutarch","livius"]
  },
  {
    id:"parmenion", name:"Parmenion", dates:"c. 400–330 BCE", role:"Senior Macedonian general",
    aliases:["Parmenio", "Parmenion of Macedon"],
    summary:"A veteran of Philip II’s reign who commanded major sections of Alexander’s army during the early campaign in Asia.",
    connection:"Parmenion often appears as the experienced countervoice to Alexander’s risk-taking. He was killed at Ecbatana after his son Philotas was condemned in the conspiracy crisis.",
    eventTitles:["Battle of the Granicus","Illness at Tarsus","Battle of Issus","Battle of Gaugamela","Philotas crisis at Prophthasia"], sourceKeys:["arrian","plutarch","livius"]
  },
  {
    id:"philotas", name:"Philotas", dates:"d. 330 BCE", role:"Commander of the Companion cavalry",
    aliases:["Philotas son of Parmenion"],
    summary:"Parmenion’s son and a high-ranking cavalry commander whose failure to report a suspected plot led to trial and execution.",
    connection:"The Philotas affair removed two powerful figures from the command structure: Philotas was executed in Drangiana and Parmenion was killed at Ecbatana.",
    eventTitles:["Philotas crisis at Prophthasia"], sourceKeys:["arrian","plutarch","livius"]
  },
  {
    id:"cleitus-black", name:"Cleitus the Black", dates:"d. 328 BCE", role:"Companion cavalry officer",
    aliases:["Cleitus", "Kleitos the Black", "Cleitus son of Dropidas"],
    summary:"A veteran officer remembered for saving Alexander at the Granicus and later being killed by him during a drunken quarrel at Maracanda.",
    connection:"Cleitus’ death exposed the strain between Macedonian companions and Alexander’s changing style of kingship in the eastern campaigns.",
    eventTitles:["Battle of the Granicus","Death of Cleitus"], sourceKeys:["arrian","plutarch","livius"]
  },
  {
    id:"nearchus", name:"Nearchus", dates:"c. 360–after 314 BCE", role:"Admiral · explorer",
    aliases:["Nearchos", "Nearchus of Crete"],
    summary:"Commander of the fleet that descended the Indus and later sailed from the river delta to the Persian Gulf.",
    connection:"Nearchus led the maritime branch of the return from India while Alexander’s army crossed Gedrosia. His account underlies much of Arrian’s Indica.",
    eventTitles:["Voyage begins","Patala and the Indus delta","Campaign against the Oreitans","Crossing the Gedrosian desert","Reunion in Carmania"], sourceKeys:["arrian","indica","livius"]
  },
  {
    id:"craterus", name:"Craterus", dates:"c. 370–321 BCE", role:"Senior Macedonian commander",
    aliases:["Krateros", "Craterus of Orestis"],
    summary:"A prominent infantry commander trusted with large formations, veterans and independent columns during the Indian campaign and return.",
    connection:"Craterus held the main camp during the Hydaspes crossing, led a separate return column and was later assigned to take discharged veterans back to Macedon.",
    eventTitles:["Battle of the Hydaspes","Voyage begins","Reunion in Carmania","Mutiny at Opis"], sourceKeys:["arrian","plutarch","livius"]
  },
  {
    id:"perdiccas", name:"Perdiccas", dates:"c. 365–321 BCE", role:"Companion · infantry commander",
    aliases:["Perdikkas", "Perdiccas of Orestis"],
    summary:"A senior officer in Alexander’s army who became one of the central figures in the succession struggle after 323 BCE.",
    connection:"In the approach to India, Perdiccas and Hephaestion led the column sent down the Kabul valley to prepare the Indus crossing.",
    eventTitles:["Army divided for India","Crossing the Indus","Death of Alexander"], sourceKeys:["arrian","livius"]
  },
  {
    id:"porus", name:"Porus", dates:"fl. 326 BCE", role:"King in the Punjab",
    aliases:["King Porus", "Puru", "Poros"],
    summary:"The ruler who opposed Alexander at the Hydaspes with infantry, cavalry, chariots and war elephants.",
    connection:"After defeat, Porus was restored and enlarged as a client ruler, becoming a central partner in Alexander’s settlement east of the Indus.",
    eventTitles:["Alliance at Taxila","Battle of the Hydaspes"], sourceKeys:["arrian","plutarch","diodorus","jackson"]
  },
  {
    id:"taxiles", name:"Taxiles", dates:"fl. 4th century BCE", role:"Ruler of Taxila · Alexander’s ally",
    aliases:["Ambhi", "Omphis", "Taxiles of Taxila", "King of Taxila"],
    summary:"The ruler of Taxila who received Alexander peacefully and supported the campaign against his rival Porus.",
    connection:"His alliance gave Alexander a secure base west of the Hydaspes and local troops, elephants and supplies for the next phase of the campaign.",
    eventTitles:["Alliance at Taxila","Battle of the Hydaspes"], sourceKeys:["arrian","jackson"]
  },
  {
    id:"spitamenes", name:"Spitamenes", dates:"d. 328 BCE", role:"Sogdian resistance leader",
    aliases:["Spitamenes of Sogdiana"],
    summary:"The most persistent leader of resistance to Alexander in Sogdiana, combining local revolt with mobile warfare and steppe alliances.",
    connection:"Spitamenes helped deliver Bessus, then turned against Alexander. His forces destroyed a Macedonian relief column on the Polytimetus before he was eventually killed by allies.",
    eventTitles:["Capture of Bessus","Maracanda occupied","Disaster on the Polytimetus","Five-column Sogdian campaign","Spitamenes killed"], sourceKeys:["arrian","livius"]
  },
  {
    id:"bessus", name:"Bessus", dates:"d. 329 BCE", role:"Satrap of Bactria · rival king",
    aliases:["Artaxerxes V", "Bessos"],
    summary:"The Bactrian satrap who helped depose Darius III and then claimed the Achaemenid throne as Artaxerxes V.",
    connection:"Alexander pursued Bessus across the Hindu Kush and Oxus, framing the campaign as vengeance for Darius. Bessus was surrendered by former allies and executed.",
    eventTitles:["Death of Darius III","Crossing the Hindu Kush","Crossing the Oxus","Capture of Bessus"], sourceKeys:["arrian","livius"]
  },
  {
    id:"oxyartes", name:"Oxyartes", dates:"fl. 327–316 BCE", role:"Bactrian or Sogdian nobleman",
    aliases:["Oxyartes of Bactria", "Oxyartes of Sogdiana"],
    summary:"A regional nobleman and father of Roxana who entered Alexander’s political network after the Sogdian stronghold campaigns.",
    connection:"Alexander’s marriage to Roxana connected the Macedonian court to Oxyartes’ family. Oxyartes later received important eastern responsibilities.",
    eventTitles:["Capture of the Sogdian Rock"], sourceKeys:["arrian","livius"]
  },
  {
    id:"callisthenes", name:"Callisthenes", dates:"c. 360–327 BCE", role:"Historian attached to the expedition",
    aliases:["Callisthenes of Olynthus", "Kallisthenes"],
    summary:"A Greek historian who accompanied the campaign and became a prominent opponent of extending proskynesis to Macedonians and Greeks.",
    connection:"His refusal during the court-ritual dispute made him a symbol of resistance to Alexander’s evolving kingship. He later died after implication in the pages’ conspiracy.",
    eventTitles:["Bactra: proskynesis crisis"], sourceKeys:["arrian","plutarch","livius"]
  },
  {
    id:"memnon", name:"Memnon of Rhodes", dates:"c. 380–333 BCE", role:"Greek commander in Persian service",
    aliases:["Memnon", "Memnon the Rhodian"],
    summary:"An experienced mercenary commander who advocated using Persian naval power and a scorched-earth strategy against Alexander.",
    connection:"Memnon directed the defense of Halicarnassus and later Persian operations in the Aegean, where his death removed a serious threat to Alexander’s rear.",
    eventTitles:["Siege of Halicarnassus"], sourceKeys:["arrian","diodorus","livius"]
  },
  {
    id:"ariobarzanes", name:"Ariobarzanes", dates:"d. 330 BCE", role:"Persian commander · satrap of Persis",
    aliases:["Ariobarzanes of Persis"],
    summary:"The Persian commander who blocked Alexander at the mountain position usually identified as the Persian Gate.",
    connection:"His defense temporarily halted the Macedonian advance into Persis before Alexander used a mountain route to attack from the rear.",
    eventTitles:["Battle of the Persian Gate"], sourceKeys:["arrian","livius","atlas"]
  },
  {
    id:"batis", name:"Batis", dates:"d. 332 BCE", role:"Commander of Gaza",
    aliases:["Batis of Gaza"],
    summary:"The Persian-appointed commander who organized Gaza’s resistance during Alexander’s advance toward Egypt.",
    connection:"Batis refused to surrender the fortified city. Gaza fell after a prolonged siege in which Alexander was wounded.",
    eventTitles:["Siege of Gaza"], sourceKeys:["arrian","diodorus","livius"]
  },
  {
    id:"mazaeus", name:"Mazaeus", dates:"d. 328 BCE", role:"Persian satrap · later satrap of Babylon",
    aliases:["Mazaios", "Mazaeus of Babylon"],
    summary:"Achaemenid commander at Gaugamela who later surrendered Babylon and was retained in office under Macedonian rule.",
    connection:"Keeping Mazaeus as satrap demonstrated Alexander’s willingness to reuse experienced Persian administrators after peaceful submission.",
    eventTitles:["Battle of Gaugamela","Babylon opens its gates"], sourceKeys:["arrian","livius"]
  },
  {
    id:"glaukias", name:"Glaukias", dates:"fl. 335–302 BCE", role:"King of the Taulantii",
    aliases:["Glaucias", "Glaukias of the Taulantii"],
    summary:"An Illyrian ruler who supported Cleitus of Illyria against Alexander during the Pelium campaign.",
    connection:"Glaukias’ arrival threatened to trap the Macedonian army near Pelium, forcing Alexander to secure a difficult withdrawal before returning for a night attack.",
    eventTitles:["Siege and escape at Pelium"], sourceKeys:["arrian","atlas"]
  },
  {
    id:"cleitus-illyria", name:"Cleitus of Illyria", dates:"fl. 335 BCE", role:"Illyrian ruler",
    aliases:["Kleitos of Illyria", "Cleitus son of Bardylis"],
    summary:"An Illyrian ruler who joined Glaukias in resisting Alexander at Pelium in 335 BCE.",
    connection:"His forces occupied the fortified position at Pelium and helped create one of Alexander’s most dangerous early operational situations.",
    eventTitles:["Siege and escape at Pelium"], sourceKeys:["arrian","atlas"]
  },
  {
    id:"chorienes", name:"Chorienes", dates:"fl. 327 BCE", role:"Sogdian stronghold ruler",
    aliases:["Chorienes of Sogdiana", "Sisimithres"],
    summary:"The ruler associated with a mountain stronghold reduced after Macedonian troops filled part of a ravine to approach it.",
    connection:"Unlike several stormed positions, Chorienes surrendered on favorable terms and then helped provision Alexander’s army.",
    eventTitles:["Rock of Chorienes"], sourceKeys:["arrian","atlas"]
  },
  {
    id:"satibarzanes", name:"Satibarzanes", dates:"d. 330 BCE", role:"Satrap of Aria",
    aliases:["Satibarzanes of Aria"],
    summary:"A Persian satrap who submitted to Alexander, then revolted and killed the Macedonian garrison left in Aria.",
    connection:"His revolt forced Alexander to reverse direction and retake the regional capital during the pursuit east.",
    eventTitles:["Revolt of Satibarzanes"], sourceKeys:["arrian","atlas"]
  },
  {
    id:"syrmus", name:"Syrmus", dates:"fl. 335 BCE", role:"King of the Triballians",
    aliases:["Syrmos", "Syrmus of the Triballians"],
    summary:"A Triballian ruler who withdrew with followers to the Danube island called Peuce during Alexander’s Balkan campaign.",
    connection:"The island’s current, banks and defenders frustrated an attempted Macedonian landing, prompting Alexander to shift to a night crossing against the Getae.",
    eventTitles:["Failed assault on Peuce","Night crossing of the Danube"], sourceKeys:["arrian","atlas"]
  },
  {
    id:"philip-acarnania", name:"Philip of Acarnania", dates:"fl. 333 BCE", role:"Physician",
    aliases:["Philip the physician", "Philip of Akarnania"],
    summary:"The physician who treated Alexander during his dangerous illness at Tarsus.",
    connection:"Alexander drank Philip’s medicine while simultaneously handing him a letter alleging that he had been bribed, turning the episode into a famous test of trust.",
    eventTitles:["Illness at Tarsus"], sourceKeys:["plutarch","livius"]
  },
  {
    id:"arrian", name:"Arrian", dates:"c. 86–after 145 CE", role:"Historian · primary narrative source",
    aliases:["Lucius Flavius Arrianus", "Arrian of Nicomedia"],
    summary:"A Greek-speaking Roman author whose Anabasis and Indica provide the principal surviving continuous narrative used by this atlas.",
    connection:"Arrian wrote centuries after Alexander and drew on earlier accounts, especially those associated with Ptolemy and Aristobulus. His narrative is essential but not contemporary eyewitness testimony by Arrian himself.",
    eventTitles:[], sourceKeys:["arrian","indica"]
  },
  {
    id:"plutarch", name:"Plutarch", dates:"c. 46–after 119 CE", role:"Biographer · ancient source",
    aliases:["Plutarch of Chaeronea", "Lucius Mestrius Plutarchus"],
    summary:"A Greek biographer whose Life of Alexander preserves character studies, anecdotes and traditions not always found in the campaign narratives.",
    connection:"The atlas uses Plutarch alongside Arrian and Diodorus, particularly where personal episodes and competing traditions matter.",
    eventTitles:[], sourceKeys:["plutarch"]
  }
];

const TYPE_META = {
  battle: { label: "Battles", color: "#ca6557", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>` },
  siege: { label: "Sieges", color: "#d8ad59", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V9h2V6h3v3h2V6h2v3h3V6h2v3h2v11z"/></svg>` },
  attack: { label: "Hostile actions", color: "#5f91a2", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h14"/><path d="M13 6l6 6-6 6"/></svg>` },
  decision: { label: "Decisions", color: "#8e6a93", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18"/><path d="M6 7h12"/><path d="M6 7l-2 4h4z"/><path d="M18 7l-2 4h4z"/></svg>` },
  camp: { label: "Camps", color: "#718c63", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20L12 4l8 16z"/><path d="M12 4v16"/></svg>` },
  political: { label: "Political", color: "#b9a985", icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l3 4 3-6 3 6 3-6 3 6 3-4v11H3z"/></svg>` }
};

const LANDMARKS = [
  { name: "Athens", lat: 37.971, lng: 23.727, kind: "city" },
  { name: "Sparta", lat: 37.075, lng: 22.428, kind: "city" },
  { name: "Delphi", lat: 38.482, lng: 22.501, kind: "oracle" },
  { name: "Ephesus", lat: 37.941, lng: 27.342, kind: "city" },
  { name: "Temple of Artemis", lat: 37.941, lng: 27.342, kind: "temple" },
  { name: "Halicarnassus", lat: 37.038, lng: 27.424, kind: "city" },
  { name: "Mausoleum", lat: 37.038, lng: 27.424, kind: "tomb" },
  { name: "Troy", lat: 39.957, lng: 26.239, kind: "city" },
  { name: "Temple of Athena", lat: 39.957, lng: 26.239, kind: "temple" },
  { name: "Sardis", lat: 38.488, lng: 28.040, kind: "city" },
  { name: "Tarsus", lat: 36.917, lng: 34.893, kind: "city" },
  { name: "Tyre", lat: 33.270, lng: 35.196, kind: "city" },
  { name: "Jerusalem", lat: 31.778, lng: 35.235, kind: "city" },
  { name: "Memphis", lat: 29.850, lng: 31.250, kind: "city" },
  { name: "Siwa Oracle", lat: 29.203, lng: 25.519, kind: "oracle" },
  { name: "Alexandria", lat: 31.200, lng: 29.918, kind: "city" },
  { name: "Babylon", lat: 32.536, lng: 44.420, kind: "city" },
  { name: "Palace of Nebuchadnezzar", lat: 32.536, lng: 44.420, kind: "palace" },
  { name: "Susa", lat: 32.190, lng: 48.257, kind: "city" },
  { name: "Ecbatana", lat: 34.799, lng: 48.515, kind: "city" },
  { name: "Persepolis", lat: 29.935, lng: 52.891, kind: "city" },
  { name: "Palace of Darius", lat: 29.935, lng: 52.891, kind: "palace" },
  { name: "Pasargadae", lat: 30.200, lng: 53.179, kind: "city" },
  { name: "Tomb of Cyrus", lat: 30.200, lng: 53.179, kind: "tomb" },
  { name: "Bactra", lat: 36.760, lng: 66.900, kind: "city" },
  { name: "Maracanda", lat: 39.655, lng: 66.975, kind: "city" },
  { name: "Taxila", lat: 33.746, lng: 72.839, kind: "city" }
];

const LANDMARK_COLORS = {
  city: "#f5d994", oracle: "#9bc4c0", temple: "#c9b8e8", palace: "#d4a574", tomb: "#a89f8e"
};

const PHASE_COLORS = {
  "Before Asia": "#887a5d", "Balkan campaign": "#9a7864", "Aegean & Anatolia": "#ba9a54",
  "Levant & Egypt": "#bd7f56", "Mesopotamia & Persia": "#b65b4c", "Pursuit of Darius": "#a55a65",
  "Eastern campaigns": "#776a9b", "India": "#4e8890", "India & return": "#4f8a74",
  "Imperial consolidation": "#7b8354", "Final year": "#8c735b"
};

const REGIONS = [
  { id:"illyria", name:"Illyria", color:"#826f91", description:"The eastern Adriatic and western Balkan zone associated with the Illyrian peoples and Alexander’s 335 BCE campaign.", points:[[39.45,19.05],[40.15,19.28],[41.05,19.25],[42.05,18.25],[43.35,18.15],[43.95,19.10],[43.35,20.25],[42.55,20.72],[41.75,21.12],[40.75,20.98],[39.85,20.32]] },
  { id:"macedon", name:"Macedon", color:"#a67a55", description:"The Macedonian royal heartland and Alexander’s principal European base.", points:[[39.65,20.55],[40.10,22.30],[40.65,23.25],[41.45,24.00],[42.20,23.15],[42.35,21.75],[41.80,20.55],[40.85,20.30]] },
  { id:"greece", name:"Greece", color:"#6f879b", description:"The southern Greek mainland and the League of Corinth sphere.", points:[[35.75,20.05],[36.65,21.55],[37.50,23.60],[39.15,24.35],[40.15,23.05],[39.75,21.25],[38.70,20.20],[37.25,19.75]] },
  { id:"thrace", name:"Thrace & Lower Danube", color:"#728a70", description:"Thrace, the Balkan approaches and Alexander’s Danube operations.", points:[[40.45,22.80],[40.75,26.05],[41.15,29.25],[43.30,29.55],[45.25,28.10],[44.75,23.55],[42.60,22.20]] },
  { id:"anatolia", name:"Anatolia", color:"#b39459", description:"Asia Minor, including the Aegean coast, Phrygia, Cilicia and the Anatolian plateau.", points:[[35.45,25.75],[37.60,26.00],[40.80,25.70],[42.05,29.35],[41.55,35.10],[40.10,41.60],[37.30,43.00],[35.55,36.20],[35.75,30.10]] },
  { id:"levant", name:"Levant", color:"#ad6c59", description:"The eastern Mediterranean corridor through Phoenicia, Syria and Gaza.", points:[[29.45,34.15],[33.45,34.55],[36.95,35.55],[36.65,39.45],[32.10,38.40],[29.25,35.75]] },
  { id:"egypt", name:"Egypt", color:"#b59a62", description:"The Nile valley, delta and western desert route to Siwa.", points:[[22.00,24.10],[31.75,24.20],[31.85,34.60],[28.10,35.20],[22.00,32.40]] },
  { id:"mesopotamia", name:"Mesopotamia", color:"#8b785f", description:"The Euphrates–Tigris heartland, including Babylon and the Gaugamela approaches.", points:[[29.70,37.50],[36.85,37.60],[38.25,45.65],[34.20,49.15],[29.55,47.10]] },
  { id:"persia", name:"Persia & Media", color:"#9b5f5b", description:"The Iranian plateau from Persis and Media toward Hyrcania and Carmania.", points:[[24.10,47.30],[31.25,47.00],[37.45,50.20],[38.10,58.70],[30.35,62.50],[24.15,57.15]] },
  { id:"gedrosia", name:"Gedrosia", color:"#9a7951", description:"The arid Makran and Gedrosian return corridor used in 325 BCE.", points:[[23.10,56.75],[29.20,56.60],[30.20,66.20],[25.15,69.10],[22.75,63.90]] },
  { id:"bactria", name:"Bactria", color:"#716a92", description:"The Oxus southlands and Hindu Kush approaches centred on Bactra.", points:[[32.70,59.40],[38.95,59.30],[40.15,68.45],[36.00,71.15],[32.80,67.20]] },
  { id:"sogdiana", name:"Sogdiana", color:"#69769a", description:"The Zeravshan and Jaxartes campaign zone north of Bactria.", points:[[36.70,63.20],[42.20,61.60],[43.25,70.80],[39.10,73.00],[36.25,68.80]] },
  { id:"india", name:"India & Indus", color:"#4f8a7c", description:"The Indus, Punjab and north-western subcontinent campaign zone.", points:[[22.55,66.50],[34.85,66.25],[36.10,76.45],[29.30,79.20],[22.65,75.00]] }
];

const REGION_DB_NAME = "alexander-moving-frontier";
const REGION_DB_STORE = "atlas-settings";
const REGION_DB_KEY = "historical-region-colors";
const REGION_LOCAL_KEY = "alexander.regionColors.v1";
const HEX_COLOR = /^#[0-9a-f]{6}$/i;

/* Identifies when Alexander is travelling by boat over water */
const SAIL_EVENTS = [
  "Crossing into Asia", // Hellespont
  "Voyage begins", // Hydaspes Fleet
  "Mallian campaign", // Indus River
  "Alexander wounded at the Mallian city",
  "Disaster at the river confluence",
  "Musicanus and Sambus revolts",
  "Patala and the Indus delta"
];

const FIRE_EVENTS = ["Assault and destruction of Thebes", "Persepolis: occupation and burning"];
const DEATH_EVENTS = ["Death of Alexander"];

let currentIndex = 0;
let playing = false;
let playTimer = null;
let animationFrame = null;
let followRoute = true;
let detailsDismissed = false;
let activeTypes = new Set(Object.keys(TYPE_META));
let showCamps = true;
let markers = [];
let landmarkMarkers = [];
let selectedRegionId = "illyria";
let regionColors = Object.fromEntries(REGIONS.map(region => [region.id, region.color]));
let regionLayers = new Map();
let regionsVisible = true;
let regionSaveTimer = null;
let regionDbPromise = null;

const map = L.map("map", {
  zoomControl: false, minZoom: 2, worldCopyJump: true, renderer: L.svg({ padding: 0.5 })
}).setView([34, 48], 4);
map.createPane("historicalRegions");
map.getPane("historicalRegions").style.zIndex = 260;
L.control.zoom({ position: "topright" }).addTo(map);

const terrain = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}", { maxZoom: 8, attribution: "Tiles © Esri — US National Park Service" });
const topo = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", { maxZoom: 17, attribution: "Map data © OpenStreetMap contributors · terrain © OpenTopoMap" });
const streets = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "© OpenStreetMap contributors" });
const imagery = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", { maxZoom: 19, attribution: "Tiles © Esri" });
terrain.addTo(map);
L.control.layers({ "Terrain": terrain, "Topographic": topo, "Modern map": streets, "Satellite": imagery }, null, { position: "topright" }).addTo(map);

const regionLayerGroup = L.layerGroup().addTo(map);
const landmarkLayerGroup = L.layerGroup().addTo(map);
const effectsLayer = L.layerGroup().addTo(map);

const routeCoords = EVENTS.map(e => [e.lat, e.lng]);
const routeGeometry = { smoothFactor: 0, lineCap: "round", lineJoin: "round", interactive: false };
const routeUnderlay = L.polyline(routeCoords, { ...routeGeometry, color: "#13150f", opacity: .65, weight: 7, className: "route-shadow route-base" }).addTo(map);
const routeFuture = L.polyline(routeCoords, { ...routeGeometry, color: "#dcc784", opacity: .32, weight: 2, dashArray: "5 8", className: "route-future" }).addTo(map);
const routePast = L.polyline([routeCoords[0]], { ...routeGeometry, color: "#d8ad59", opacity: .95, weight: 3, className: "route-progress" }).addTo(map);

function markerIcon(event, active = false) {
  const meta = TYPE_META[event.type];
  return L.divIcon({
    className: `campaign-marker ${active ? "is-active" : ""}`,
    html: `<div class="marker-core" style="--marker-color:${meta.color}">${meta.icon}</div>`,
    iconSize: [26, 26], iconAnchor: [13, 13]
  });
}

EVENTS.forEach((event, index) => {
  const marker = L.marker([event.lat, event.lng], { icon: markerIcon(event, index === 0), riseOnHover: true, keyboard: true });
  marker.on("click", () => selectEvent(index, true, false, true));
  marker.bindTooltip(`<b>${event.title}</b><br>${event.date}`, { direction: "top", offset: [0,-10], opacity: .92 });
  marker.addTo(map);
  markers.push(marker);
});

const routeDotMarker = L.marker(routeCoords[0], {
  icon: L.divIcon({ className: 'route-dot-marker', html: '<div class="route-dot"></div>', iconSize: [24, 24], iconAnchor: [12, 12] }),
  zIndexOffset: 1000, interactive: false, keyboard: false
}).addTo(map);

function updateRouteDotIcon(isSailing) {
  const boatSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="#f5d994" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17h18l-2-6-7-4-7 4z"/><path d="M12 7V3"/><path d="M8 7l4-4 4 4"/><path d="M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0" stroke="#5f91a2" stroke-width="1.5"/></svg>`;
  const html = isSailing ? `<div class="route-dot is-sailing">${boatSVG}</div>` : '<div class="route-dot"></div>';
  routeDotMarker.setIcon(L.divIcon({ className: 'route-dot-marker', html: html, iconSize: [24, 24], iconAnchor: [12, 12] }));
}

function buildLandmarks() {
  LANDMARKS.forEach(lm => {
    const color = LANDMARK_COLORS[lm.kind] || "#f5d994";
    const marker = L.circleMarker([lm.lat, lm.lng], {
      radius: 5, color: color, fillColor: color, fillOpacity: 0.85, weight: 1.5, opacity: 0.9
    });
    marker.bindPopup(`<div class="landmark-popup-name">${lm.name}</div>`, {
      closeButton: false, offset: [0, -5], className: 'custom-landmark-popup'
    });
    marker.addTo(landmarkLayerGroup);
    landmarkMarkers.push(marker);
  });
}

const els = {
  eventList: document.querySelector("#eventList"), eventCard: document.querySelector("#eventCard"),
  cardKicker: document.querySelector("#cardKicker"), cardTitle: document.querySelector("#cardTitle"),
  cardPlace: document.querySelector("#cardPlace"), cardTags: document.querySelector("#cardTags"),
  cardSummary: document.querySelector("#cardSummary"), decisionGrid: document.querySelector("#decisionGrid"),
  confidenceNote: document.querySelector("#confidenceNote"), eventPosition: document.querySelector("#eventPosition"),
  playbackDate: document.querySelector("#playbackDate"), playbackTitle: document.querySelector("#playbackTitle"),
  range: document.querySelector("#timelineRange"), playButton: document.querySelector("#playButton"), playIcon: document.querySelector("#playIcon"),
  speed: document.querySelector("#speedSelect"), followButton: document.querySelector("#followButton"),
  search: document.querySelector("#searchInput"), searchShell: document.querySelector("#searchShell"),
  searchResults: document.querySelector("#searchResults"), camps: document.querySelector("#campsToggle"),
  filters: document.querySelector("#typeFilters"), workspace: document.querySelector("#workspace"),
  sidebarToggle: document.querySelector("#sidebarToggle"), regionsButton: document.querySelector("#regionsButton"),
  regionPanel: document.querySelector("#regionPanel"), regionPanelClose: document.querySelector("#regionPanelClose"),
  regionsToggle: document.querySelector("#regionsToggle"), regionSelect: document.querySelector("#regionSelect"),
  regionColor: document.querySelector("#regionColor"), regionColorValue: document.querySelector("#regionColorValue"),
  regionDescription: document.querySelector("#regionDescription"), regionSaveStatus: document.querySelector("#regionSaveStatus"),
  regionColorFile: document.querySelector("#regionColorFile"), personDialog: document.querySelector("#personDialog"),
  personMonogram: document.querySelector("#personMonogram"), personName: document.querySelector("#personName"),
  personMeta: document.querySelector("#personMeta"), personAliases: document.querySelector("#personAliases"),
  personSummary: document.querySelector("#personSummary"), personConnection: document.querySelector("#personConnection"),
  personEpisodeList: document.querySelector("#personEpisodeList"), personSourceList: document.querySelector("#personSourceList")
};

function cleanRegionColors(candidate) {
  if (!candidate || typeof candidate !== "object" || Array.isArray(candidate)) return {};
  const knownIds = new Set(REGIONS.map(region => region.id));
  return Object.fromEntries(Object.entries(candidate)
    .filter(([id, color]) => knownIds.has(id) && typeof color === "string" && HEX_COLOR.test(color))
    .map(([id, color]) => [id, color.toUpperCase()]));
}

function setRegionSaveStatus(message, isError = false) {
  els.regionSaveStatus.textContent = message;
  els.regionSaveStatus.classList.toggle("is-error", isError);
}

function openRegionDatabase() {
  if (regionDbPromise) return regionDbPromise;
  regionDbPromise = new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) { reject(new Error("IndexedDB is not available")); return; }
    const request = indexedDB.open(REGION_DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(REGION_DB_STORE)) db.createObjectStore(REGION_DB_STORE, { keyPath:"id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error("Could not open the region colour database"));
    request.onblocked = () => reject(new Error("The region colour database is blocked by another tab"));
  });
  return regionDbPromise;
}

async function readDatabaseRegionColors() {
  const db = await openRegionDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(REGION_DB_STORE, "readonly");
    const request = transaction.objectStore(REGION_DB_STORE).get(REGION_DB_KEY);
    request.onsuccess = () => resolve(cleanRegionColors(request.result?.colors));
    request.onerror = () => reject(request.error || new Error("Could not read saved region colours"));
  });
}

async function writeDatabaseRegionColors() {
  const db = await openRegionDatabase();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(REGION_DB_STORE, "readwrite");
    transaction.objectStore(REGION_DB_STORE).put({
      id: REGION_DB_KEY, schemaVersion: 1, colors: { ...regionColors }, updatedAt: new Date().toISOString()
    });
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error || new Error("Could not save region colours"));
    transaction.onabort = () => reject(transaction.error || new Error("Saving region colours was aborted"));
  });
}

async function readBundledRegionColors() {
  if (!/^https?:$/.test(location.protocol)) return {};
  try {
    const response = await fetch("region-colors.json", { cache:"no-store" });
    if (!response.ok) return {};
    const payload = await response.json();
    return cleanRegionColors(payload.regionColors || payload.colors || payload);
  } catch (_) { return {}; }
}

function readLocalRegionColors() {
  try { return cleanRegionColors(JSON.parse(localStorage.getItem(REGION_LOCAL_KEY) || "{}")); } 
  catch (_) { return {}; }
}

async function persistRegionColors() {
  let localSaved = false; let databaseSaved = false;
  try { localStorage.setItem(REGION_LOCAL_KEY, JSON.stringify(regionColors)); localSaved = true; } catch (_) {}
  try { await writeDatabaseRegionColors(); databaseSaved = true; } catch (_) {}
  if (databaseSaved || localSaved) {
    const time = new Intl.DateTimeFormat([], { hour:"2-digit", minute:"2-digit" }).format(new Date());
    setRegionSaveStatus(`${databaseSaved ? "Saved to local database" : "Saved to browser storage"} · ${time}`);
  } else {
    setRegionSaveStatus("This browser blocked automatic saving. Export a colour file to keep these changes.", true);
  }
}

function scheduleRegionSave() {
  clearTimeout(regionSaveTimer);
  setRegionSaveStatus("Saving colours…");
  regionSaveTimer = setTimeout(persistRegionColors, 180);
}

function regionById(id) { return REGIONS.find(region => region.id === id); }

function applyRegionStyle(id) {
  const layer = regionLayers.get(id);
  if (!layer) return;
  const selected = id === selectedRegionId;
  layer.setStyle({
    color: selected ? "#f4d893" : regionColors[id],
    fillColor: regionColors[id],
    fillOpacity: selected ? .29 : .19,
    opacity: selected ? .95 : .72,
    weight: selected ? 2.4 : 1.25
  });
  const path = layer.getElement();
  if (path) path.classList.toggle("is-selected", selected);
  const tooltip = layer.getTooltip()?.getElement();
  if (tooltip) tooltip.classList.toggle("is-selected", selected);
}

function applyAllRegionStyles() { REGIONS.forEach(region => applyRegionStyle(region.id)); }

function showRegionPanel(show = true) {
  els.regionPanel.hidden = !show;
  els.regionsButton.setAttribute("aria-expanded", String(show));
  if (show) requestAnimationFrame(() => els.regionSelect.focus({ preventScroll:true }));
}

function selectRegion(id, openPanel = false) {
  const region = regionById(id);
  if (!region) return;
  selectedRegionId = id;
  els.regionSelect.value = id;
  els.regionColor.value = regionColors[id];
  els.regionColorValue.value = regionColors[id].toUpperCase();
  els.regionDescription.textContent = region.description;
  applyAllRegionStyles();
  if (openPanel) showRegionPanel(true);
}

function buildRegions() {
  els.regionSelect.innerHTML = REGIONS.map(region => `<option value="${region.id}">${region.name}</option>`).join("");
  REGIONS.forEach(region => {
    const polygon = L.polygon(region.points, {
      pane:"historicalRegions", className:"historical-region", interactive:true, smoothFactor:1.25, bubblingMouseEvents:false
    });
    polygon.bindTooltip(region.name, { permanent:true, direction:"center", className:"region-label", opacity:1 });
    polygon.on("click", () => selectRegion(region.id, true));
    polygon.addTo(regionLayerGroup);
    regionLayers.set(region.id, polygon);
  });
  selectRegion(selectedRegionId);
}

function setRegionsVisible(visible) {
  regionsVisible = visible;
  els.regionsToggle.checked = visible;
  if (visible && !map.hasLayer(regionLayerGroup)) regionLayerGroup.addTo(map);
  if (!visible && map.hasLayer(regionLayerGroup)) map.removeLayer(regionLayerGroup);
  if (visible) requestAnimationFrame(applyAllRegionStyles);
}

async function loadRegionColors() {
  const defaults = Object.fromEntries(REGIONS.map(region => [region.id, region.color]));
  const bundled = await readBundledRegionColors();
  const local = readLocalRegionColors();
  let database = {};
  try { database = await readDatabaseRegionColors(); } catch (_) {}
  regionColors = { ...defaults, ...bundled, ...local, ...database };
  applyAllRegionStyles();
  selectRegion(selectedRegionId);
  const hasSavedValues = Object.keys(database).length || Object.keys(local).length;
  setRegionSaveStatus(hasSavedValues ? "Saved region colours restored from this browser." : "Default region colours loaded. Changes will save automatically.");
}

function exportRegionColors() {
  const payload = {
    schemaVersion: 1, atlas: "Alexander · The Moving Frontier", updatedAt: new Date().toISOString(),
    regionColors: Object.fromEntries(REGIONS.map(region => [region.id, regionColors[region.id]]))
  };
  const blob = new Blob([`${JSON.stringify(payload, null, 2)}\n`], { type:"application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "alexander-region-colors.json";
  document.body.appendChild(anchor); anchor.click(); anchor.remove(); URL.revokeObjectURL(url);
  setRegionSaveStatus("Colour file exported. Keep it as a portable backup.");
}

async function importRegionColorFile(file) {
  if (!file) return;
  try {
    const payload = JSON.parse(await file.text());
    const imported = cleanRegionColors(payload.regionColors || payload.colors || payload);
    if (!Object.keys(imported).length) throw new Error("No valid region colours were found");
    regionColors = { ...Object.fromEntries(REGIONS.map(region => [region.id, region.color])), ...imported };
    applyAllRegionStyles();
    selectRegion(selectedRegionId);
    await persistRegionColors();
    setRegionSaveStatus(`${Object.keys(imported).length} region colours imported and saved.`);
  } catch (error) {
    setRegionSaveStatus(`Could not import that file: ${error.message}`, true);
  } finally {
    els.regionColorFile.value = "";
  }
}

function haversine(a, b) {
  const R = 6371, rad = v => v * Math.PI / 180;
  const dLat = rad(b[0]-a[0]), dLng = rad(b[1]-a[1]);
  const x = Math.sin(dLat/2)**2 + Math.cos(rad(a[0]))*Math.cos(rad(b[0]))*Math.sin(dLng/2)**2;
  return 2*R*Math.asin(Math.sqrt(x));
}
const schematicKm = routeCoords.slice(1).reduce((sum,p,i) => sum + haversine(routeCoords[i],p),0);
document.querySelector("#eventCount").textContent = EVENTS.length;
const distanceEstimate = document.querySelector("#distanceEstimate");
if (distanceEstimate) distanceEstimate.textContent = `${Math.round(schematicKm/1000)}k`;
els.range.max = EVENTS.length - 1;

let searchActiveIndex = -1;

function escapeHTML(value) {
  return String(value).replace(/[&<>"]/g, character => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" })[character]);
}

function normalizeSearch(value) {
  return String(value || "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9]+/g, " ").trim();
}

function matchScore(searchText, query) {
  const text = normalizeSearch(searchText);
  const normalizedQuery = normalizeSearch(query);
  if (!normalizedQuery) return -1;
  const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
  if (!tokens.every(token => text.includes(token))) return -1;
  if (text === normalizedQuery) return 120;
  if (text.startsWith(normalizedQuery)) return 90;
  if (text.includes(normalizedQuery)) return 70;
  return 40 + tokens.reduce((score, token) => score + (text.split(" ").some(word => word.startsWith(token)) ? 5 : 1), 0);
}

function personSearchScore(person, query) {
  const primaryScore = matchScore(person.name, query);
  const aliasScore = Math.max(-1, ...person.aliases.map(alias => matchScore(alias, query)));
  const contextScore = matchScore(`${person.role} ${person.summary} ${person.connection}`, query);
  return Math.max(primaryScore, aliasScore > -1 ? aliasScore - 4 : -1, contextScore > -1 ? contextScore - 30 : -1);
}

function eventSearchScore(event, query) {
  const titleScore = matchScore(event.title, query);
  const contextScore = matchScore(`${event.title} ${event.place} ${event.date} ${event.phase} ${event.summary} ${event.decision} ${event.outcome} ${event.camp} ${event.confidence}`, query);
  return Math.max(titleScore, contextScore > -1 ? contextScore - 20 : -1);
}

function personInitials(name) {
  const words = name.replace(/\b(the|of)\b/gi, "").trim().split(/\s+/);
  return `${words[0]?.[0] || ""}${words.length > 1 ? words.at(-1)[0] : ""}`.toUpperCase();
}

function closeSearchResults() {
  els.searchResults.hidden = true;
  els.search.setAttribute("aria-expanded", "false");
  els.search.removeAttribute("aria-activedescendant");
  searchActiveIndex = -1;
}

function searchResultButtons() {
  return [...els.searchResults.querySelectorAll(".search-result")];
}

function setActiveSearchResult(index) {
  const buttons = searchResultButtons();
  if (!buttons.length) { searchActiveIndex = -1; return; }
  searchActiveIndex = (index + buttons.length) % buttons.length;
  buttons.forEach((button, buttonIndex) => {
    const active = buttonIndex === searchActiveIndex;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
  const activeButton = buttons[searchActiveIndex];
  els.search.setAttribute("aria-activedescendant", activeButton.id);
  activeButton.scrollIntoView({ block:"nearest" });
}

function renderSearchResults() {
  const query = els.search.value.trim();
  if (normalizeSearch(query).length < 2) { closeSearchResults(); return; }

  const people = PEOPLE.map(person => ({ person, score:personSearchScore(person, query) }))
    .filter(result => result.score >= 0).sort((a,b) => b.score - a.score || a.person.name.localeCompare(b.person.name)).slice(0, 7);
  const episodes = EVENTS.map((event,index) => ({ event, index, score:eventSearchScore(event, query) }))
    .filter(result => result.score >= 0).sort((a,b) => b.score - a.score || a.index - b.index).slice(0, 8);

  if (!people.length && !episodes.length) {
    els.searchResults.innerHTML = `<p class="search-result-empty">No people or episodes match <b>“${escapeHTML(query)}”</b>.</p>`;
  } else {
    const peopleSection = people.length ? `<section class="search-result-section" aria-label="People">
      <div class="search-result-heading"><span>People</span><strong>${people.length}</strong></div>
      ${people.map(({person}, index) => `<button type="button" class="search-result" id="search-person-${index}" role="option" aria-selected="false" data-person-id="${person.id}">
        <span class="search-result-icon" aria-hidden="true">${personInitials(person.name)}</span>
        <span class="search-result-copy"><strong>${escapeHTML(person.name)}</strong><small>${escapeHTML(person.role)}</small></span>
        <span class="search-result-kind">Profile</span>
      </button>`).join("")}
    </section>` : "";
    const episodesSection = episodes.length ? `<section class="search-result-section" aria-label="Campaign episodes">
      <div class="search-result-heading"><span>Campaign episodes</span><strong>${episodes.length}</strong></div>
      ${episodes.map(({event,index}, resultIndex) => `<button type="button" class="search-result" id="search-event-${resultIndex}" role="option" aria-selected="false" data-event-index="${index}">
        <span class="search-result-icon event" style="--result-color:${TYPE_META[event.type].color}" aria-hidden="true">${TYPE_META[event.type].icon}</span>
        <span class="search-result-copy"><strong>${escapeHTML(event.title)}</strong><small>${escapeHTML(event.place)}</small></span>
        <span class="search-result-kind">${escapeHTML(event.date)}</span>
      </button>`).join("")}
    </section>` : "";
    els.searchResults.innerHTML = peopleSection + episodesSection;
  }
  els.searchResults.hidden = false;
  els.search.setAttribute("aria-expanded", "true");
  els.search.removeAttribute("aria-activedescendant");
  searchActiveIndex = -1;
}

function openPersonProfile(personId) {
  const person = PEOPLE.find(candidate => candidate.id === personId);
  if (!person) return;
  const episodes = person.eventTitles.map(title => ({ event:EVENTS.find(event => event.title === title), title })).filter(item => item.event);
  els.personMonogram.textContent = personInitials(person.name);
  els.personName.textContent = person.name;
  els.personMeta.textContent = `${person.dates} · ${person.role}`;
  els.personAliases.textContent = person.aliases.length ? `Also known as ${person.aliases.join(" · ")}` : "";
  els.personAliases.hidden = !person.aliases.length;
  els.personSummary.textContent = person.summary;
  els.personConnection.textContent = person.connection;
  els.personEpisodeList.innerHTML = episodes.length ? episodes.map(({event}) => {
    const index = EVENTS.indexOf(event);
    return `<button type="button" class="person-episode-button" data-person-event-index="${index}"><span>${escapeHTML(event.title)}</span><small>${escapeHTML(event.date)}</small></button>`;
  }).join("") : '<p class="person-no-episodes">This profile describes a source author rather than a participant in a mapped campaign episode.</p>';
  const sourceLinks = person.sourceKeys.map(key => SOURCES[key]).filter(Boolean);
  els.personSourceList.innerHTML = `<div class="person-source-links">${sourceLinks.map(source => `<a href="${source.url}" target="_blank" rel="noopener">${escapeHTML(source.label)}</a>`).join("")}</div>`;
  if (!els.personDialog.open) els.personDialog.showModal();
}

function revealEventFromSearch(index) {
  const event = EVENTS[index];
  if (!event) return;
  if (!activeTypes.has(event.type)) {
    activeTypes.add(event.type);
    const typeButton = els.filters.querySelector(`[data-type="${event.type}"]`);
    if (typeButton) {
      typeButton.classList.add("is-active");
      typeButton.setAttribute("aria-pressed", "true");
    }
  }
  if (event.type === "camp" && !showCamps) {
    showCamps = true;
    els.camps.checked = true;
  }
  renderTimeline();
  applyFilters();
  stopPlayback();
  selectEvent(index, true, false, true);
}

function chooseSearchResult(button) {
  if (!button) return;
  closeSearchResults();
  if (button.dataset.personId) {
    openPersonProfile(button.dataset.personId);
  } else if (button.dataset.eventIndex !== undefined) {
    revealEventFromSearch(Number(button.dataset.eventIndex));
  }
}

function buildFilters() {
  els.filters.innerHTML = Object.entries(TYPE_META).map(([type,meta]) =>
    `<button class="filter-chip is-active" data-type="${type}" aria-pressed="true">${meta.label}</button>`
  ).join("");
  els.filters.addEventListener("click", event => {
    const button = event.target.closest("[data-type]");
    if (!button) return;
    const type = button.dataset.type;
    activeTypes.has(type) ? activeTypes.delete(type) : activeTypes.add(type);
    button.classList.toggle("is-active", activeTypes.has(type));
    button.setAttribute("aria-pressed", activeTypes.has(type));
    renderTimeline(); applyFilters();
  });
}

function isVisible(event) {
  return activeTypes.has(event.type) && (showCamps || event.type !== "camp");
}

function renderTimeline() {
  let lastYear = null;
  const visible = EVENTS.map((event,index) => ({event,index})).filter(x => isVisible(x.event));
  if (!visible.length) { els.eventList.innerHTML = '<p class="no-results">No episodes match these filters.</p>'; return; }
  els.eventList.innerHTML = visible.map(({event,index}) => {
    const year = event.year !== lastYear ? `<div class="year-divider">${event.year} BCE</div>` : "";
    lastYear = event.year;
    return `${year}<button class="timeline-event ${index === currentIndex ? "is-active" : ""}" data-index="${index}">
      <span class="event-type-glyph" style="color:${TYPE_META[event.type].color}">${TYPE_META[event.type].icon}</span>
      <span class="event-copy"><strong>${event.title}</strong><small>${event.place}</small></span>
      <span class="event-date">${event.date.replace(" BCE","")}</span>
    </button>`;
  }).join("");
  els.eventList.querySelectorAll("[data-index]").forEach(button => button.addEventListener("click", () => selectEvent(Number(button.dataset.index), true, false, true)));
}

function applyFilters() {
  EVENTS.forEach((event,index) => {
    const visible = isVisible(event);
    if (visible && !map.hasLayer(markers[index])) markers[index].addTo(map);
    if (!visible && map.hasLayer(markers[index])) map.removeLayer(markers[index]);
  });
}

function triggerSpecialEffects(event, index) {
  effectsLayer.clearLayers();
  document.body.classList.remove('effect-sailing', 'effect-fire', 'effect-death');

  if (FIRE_EVENTS.includes(event.title)) {
    document.body.classList.add('effect-fire');
    const fireIcon = L.divIcon({
      className: 'fire-effect',
      html: '<div class="flame"></div>',
      iconSize: [40, 40], iconAnchor: [20, 30]
    });
    L.marker([event.lat, event.lng], { icon: fireIcon, interactive: false, zIndexOffset: 200 }).addTo(effectsLayer);
  }

  if (DEATH_EVENTS.includes(event.title)) {
    document.body.classList.add('effect-death');
    const deathIcon = L.divIcon({
      className: 'death-effect',
      html: '<div class="tombstone">☠</div>',
      iconSize: [60, 60], iconAnchor: [30, 30]
    });
    L.marker([event.lat, event.lng], { icon: deathIcon, interactive: false, zIndexOffset: 200 }).addTo(effectsLayer);
  }

  // Check if currently at or moving from/to a sailing event
  const prevEvent = index > 0 ? EVENTS[index - 1] : null;
  const isSailing = SAIL_EVENTS.includes(event.title) || (prevEvent && SAIL_EVENTS.includes(prevEvent.title));
  
  if (isSailing) {
    document.body.classList.add('effect-sailing');
  }
  updateRouteDotIcon(isSailing);
}

function selectEvent(index, pan = false, fromAnimation = false, revealDetails = false) {
  index = Math.max(0, Math.min(EVENTS.length - 1, index));
  if (!fromAnimation && playing) stopPlayback();
  currentIndex = index;
  const event = EVENTS[index];
  els.range.value = index;
  els.playbackDate.textContent = event.date;
  els.playbackTitle.textContent = event.title;
  els.cardKicker.textContent = `${event.phase} · ${event.date}`;
  els.cardTitle.textContent = event.title;
  els.cardPlace.textContent = event.place;
  els.cardTags.innerHTML = `<span class="card-tag" style="border-color:${TYPE_META[event.type].color};color:${TYPE_META[event.type].color}">${TYPE_META[event.type].label}</span>` +
    event.sources.map(key => `<span class="card-tag">${key}</span>`).join("");
  els.cardSummary.textContent = event.summary;
  els.decisionGrid.innerHTML = `<dt>Decision</dt><dd>${event.decision}</dd><dt>Outcome</dt><dd>${event.outcome}</dd>` +
    (event.camp ? `<dt>Camp</dt><dd>${event.camp}</dd>` : "");
  els.confidenceNote.textContent = `Evidence note · ${event.confidence}. Marker coordinates are orientation points, not GPS claims.`;
  els.eventPosition.textContent = `${index + 1} / ${EVENTS.length}`;
  if (revealDetails) detailsDismissed = false;
  els.eventCard.classList.toggle("is-empty", detailsDismissed);
  els.eventCard.setAttribute("aria-hidden", String(detailsDismissed));
  document.documentElement.style.setProperty("--gold", PHASE_COLORS[event.phase] || "#d8ad59");
  
  markers.forEach((marker,i) => marker.setIcon(markerIcon(EVENTS[i], i === index)));
  routePast.setLatLngs(routeCoords.slice(0,index+1));
  routeFuture.setLatLngs(routeCoords.slice(index));
  if (!fromAnimation) routeDotMarker.setLatLng([event.lat,event.lng]);

  triggerSpecialEffects(event, index);

  renderTimeline();
  const activeRow = els.eventList.querySelector(`[data-index="${index}"]`);
  if (activeRow) activeRow.scrollIntoView({ block:"nearest", behavior:"smooth" });
  if (pan && followRoute) map.flyTo([event.lat,event.lng], Math.min(Math.max(map.getZoom(), 5), 8), { duration:.8 });
}

function interpolateRouteSegment(start, end, progress) {
  const startPoint = map.project(L.latLng(start[0], start[1]), 18);
  const endPoint = map.project(L.latLng(end[0], end[1]), 18);
  const point = L.point(startPoint.x + (endPoint.x - startPoint.x) * progress, startPoint.y + (endPoint.y - startPoint.y) * progress);
  return map.unproject(point, 18);
}

function setAnimatedRoutePosition(startIndex, position) {
  routeDotMarker.setLatLng(position);
  routePast.setLatLngs([...routeCoords.slice(0, startIndex + 1), position]);
  routeFuture.setLatLngs([position, ...routeCoords.slice(startIndex + 1)]);
}

function snapToSegment(startIndex) {
  if (!followRoute) return;
  const endIndex = Math.min(startIndex + 1, routeCoords.length - 1);
  if (endIndex === startIndex) return;
  const bounds = L.latLngBounds([routeCoords[startIndex], routeCoords[endIndex]]);
  if (!map.getBounds().contains(bounds)) map.fitBounds(bounds.pad(0.85), { animate: false, maxZoom: 6 });
}

function animateStep() {
  if (!playing) return;
  if (currentIndex >= EVENTS.length - 1) { stopPlayback(); return; }
  const startIndex = currentIndex, endIndex = currentIndex + 1;
  const a = routeCoords[startIndex], b = routeCoords[endIndex];
  const duration = Number(els.speed.value);
  const moveDuration = duration * 0.72;
  const started = performance.now();
  cancelAnimationFrame(animationFrame);
  
  const frame = now => {
    if (!playing || currentIndex !== startIndex) return;
    const t = Math.min(1, (now - started) / moveDuration);
    const eased = t < 0.5 ? 2*t*t : 1 - Math.pow(-2*t + 2, 2) / 2;
    setAnimatedRoutePosition(startIndex, interpolateRouteSegment(a, b, eased));
    if (t < 1) {
      animationFrame = requestAnimationFrame(frame);
    } else {
      animationFrame = null;
      selectEvent(endIndex, false, true);
      if (endIndex === EVENTS.length - 1) stopPlayback();
      else {
        snapToSegment(endIndex);
        playTimer = setTimeout(animateStep, duration - moveDuration);
      }
    }
  };
  animationFrame = requestAnimationFrame(frame);
}

function startPlayback() {
  if (currentIndex >= EVENTS.length - 1) selectEvent(0, true);
  playing = true; els.playIcon.textContent = "Ⅱ"; els.playButton.setAttribute("aria-label", "Pause timeline");
  snapToSegment(currentIndex); animateStep();
}

function stopPlayback() {
  playing = false; clearTimeout(playTimer); playTimer = null;
  if (animationFrame !== null) cancelAnimationFrame(animationFrame);
  animationFrame = null;
  routeDotMarker.setLatLng(routeCoords[currentIndex]);
  routePast.setLatLngs(routeCoords.slice(0, currentIndex + 1));
  routeFuture.setLatLngs(routeCoords.slice(currentIndex));
  els.playIcon.textContent = "▶"; els.playButton.setAttribute("aria-label", "Play timeline");
  
  const event = EVENTS[currentIndex];
  triggerSpecialEffects(event, currentIndex);
}

function buildSources() {
  document.querySelector("#sourceList").innerHTML = Object.values(SOURCES).map(source =>
    `<li><a href="${source.url}" target="_blank" rel="noopener">${source.label}</a></li>`
  ).join("");
}

function fitCampaignBounds() {
  map.invalidateSize({ animate: false });
  map.fitBounds(L.latLngBounds(routeCoords).pad(0.07), { animate: false });
  routeUnderlay.redraw();
  routeFuture.redraw();
  routePast.redraw();
  terrain.redraw();
}

function setSidebarCollapsed(collapsed, persist = true) {
  els.workspace.classList.toggle("sidebar-collapsed", collapsed);
  els.sidebarToggle.setAttribute("aria-expanded", String(!collapsed));
  els.sidebarToggle.title = collapsed ? "Open campaign log" : "Collapse campaign log";
  const icon = els.sidebarToggle.querySelector(".sidebar-toggle-icon");
  if (icon) icon.textContent = collapsed ? "›" : "‹";
  if (persist) {
    try { localStorage.setItem("atlas.sidebarCollapsed", String(collapsed)); } catch (_) {}
  }
  window.setTimeout(() => map.invalidateSize({ pan: false }), 240);
}

let savedSidebarState = false;
try { savedSidebarState = localStorage.getItem("atlas.sidebarCollapsed") === "true"; } catch (_) {}
setSidebarCollapsed(savedSidebarState, false);

els.playButton.addEventListener("click", () => playing ? stopPlayback() : startPlayback());
els.range.addEventListener("input", event => { stopPlayback(); selectEvent(Number(event.target.value), true); });
els.search.addEventListener("input", renderSearchResults);
els.search.addEventListener("focus", renderSearchResults);
els.search.addEventListener("keydown", event => {
  if (event.key === "ArrowDown") {
    event.preventDefault();
    if (els.searchResults.hidden) renderSearchResults();
    setActiveSearchResult(searchActiveIndex + 1);
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    if (els.searchResults.hidden) renderSearchResults();
    setActiveSearchResult(searchActiveIndex - 1);
  } else if (event.key === "Enter" && searchActiveIndex >= 0) {
    event.preventDefault();
    chooseSearchResult(searchResultButtons()[searchActiveIndex]);
  } else if (event.key === "Escape" && !els.searchResults.hidden) {
    event.preventDefault();
    closeSearchResults();
  }
});
els.searchResults.addEventListener("click", event => chooseSearchResult(event.target.closest(".search-result")));
els.searchResults.addEventListener("mousemove", event => {
  const button = event.target.closest(".search-result");
  if (!button) return;
  const index = searchResultButtons().indexOf(button);
  if (index >= 0 && index !== searchActiveIndex) setActiveSearchResult(index);
});
els.personEpisodeList.addEventListener("click", event => {
  const button = event.target.closest("[data-person-event-index]");
  if (!button) return;
  els.personDialog.close();
  revealEventFromSearch(Number(button.dataset.personEventIndex));
});
document.addEventListener("pointerdown", event => {
  if (!els.searchShell.contains(event.target)) closeSearchResults();
});
els.camps.addEventListener("change", event => { showCamps = event.target.checked; renderTimeline(); applyFilters(); });
els.followButton.addEventListener("click", () => { followRoute = !followRoute; els.followButton.classList.toggle("is-active",followRoute); els.followButton.setAttribute("aria-pressed",followRoute); });
document.querySelector("#prevEvent").addEventListener("click", () => { stopPlayback(); selectEvent(currentIndex-1,true,false,true); });
document.querySelector("#nextEvent").addEventListener("click", () => { stopPlayback(); selectEvent(currentIndex+1,true,false,true); });
document.querySelector("#latestButton").addEventListener("click", () => selectEvent(EVENTS.length-1,true,false,true));
document.querySelector("#cardClose").addEventListener("click", () => {
  detailsDismissed = true;
  els.eventCard.classList.add("is-empty");
  els.eventCard.setAttribute("aria-hidden", "true");
});
els.sidebarToggle.addEventListener("click", () => setSidebarCollapsed(!els.workspace.classList.contains("sidebar-collapsed")));
els.regionsButton.addEventListener("click", () => showRegionPanel(els.regionPanel.hidden));
els.regionPanelClose.addEventListener("click", () => showRegionPanel(false));
els.regionsToggle.addEventListener("change", event => setRegionsVisible(event.target.checked));
els.regionSelect.addEventListener("change", event => selectRegion(event.target.value));
els.regionColor.addEventListener("input", event => {
  regionColors[selectedRegionId] = event.target.value.toUpperCase();
  els.regionColorValue.value = regionColors[selectedRegionId];
  applyRegionStyle(selectedRegionId);
  scheduleRegionSave();
});
document.querySelector("#resetRegionColor").addEventListener("click", () => {
  regionColors[selectedRegionId] = regionById(selectedRegionId).color.toUpperCase();
  selectRegion(selectedRegionId);
  scheduleRegionSave();
});
document.querySelector("#resetAllRegionColors").addEventListener("click", () => {
  if (!window.confirm("Reset every historical region to its original colour?")) return;
  regionColors = Object.fromEntries(REGIONS.map(region => [region.id, region.color.toUpperCase()]));
  applyAllRegionStyles();
  selectRegion(selectedRegionId);
  scheduleRegionSave();
});
document.querySelector("#exportRegionColors").addEventListener("click", exportRegionColors);
document.querySelector("#importRegionColors").addEventListener("click", () => els.regionColorFile.click());
els.regionColorFile.addEventListener("change", event => importRegionColorFile(event.target.files?.[0]));
document.querySelector("#sourcesButton").addEventListener("click", () => document.querySelector("#sourcesDialog").showModal());
document.querySelector("#aboutButton").addEventListener("click", () => document.querySelector("#aboutDialog").showModal());
document.addEventListener("keydown", event => {
  if (event.code === "Escape" && !els.regionPanel.hidden) { showRegionPanel(false); return; }
  if (document.querySelector("dialog[open]") || ["INPUT", "SELECT", "TEXTAREA", "BUTTON"].includes(document.activeElement.tagName)) return;
  if (event.key === "/") { event.preventDefault(); els.search.focus(); }
  if (event.key.toLowerCase() === "b") setSidebarCollapsed(!els.workspace.classList.contains("sidebar-collapsed"));
  if (event.code === "Space") { event.preventDefault(); playing ? stopPlayback() : startPlayback(); }
  if (event.code === "ArrowRight") { stopPlayback(); selectEvent(currentIndex+1,true); }
  if (event.code === "ArrowLeft") { stopPlayback(); selectEvent(currentIndex-1,true); }
});

buildFilters();
buildSources();
buildRegions();
buildLandmarks();
loadRegionColors();
renderTimeline();
applyFilters();
selectEvent(0, false, false, true);

requestAnimationFrame(() => {
  fitCampaignBounds();
});

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(fitCampaignBounds);
}

const mapResizeObserver = new ResizeObserver(() => {
  map.invalidateSize({ pan: false });
});
mapResizeObserver.observe(document.querySelector("#map"));