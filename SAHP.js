(function(){
  const text = `What is SAHP?
Why should we choose you over other applicants?
Who are your Deputies? Tell us about them.
  What do you think the role of SAHP in city or among state orgs ? 
How many freeze's can you take during your term ?
What's the minimum and maximum Freeze you can take ?
What changes would you make throughout your SAHP Terms?
Do you have any specific Plan For increasing tow activity? 
How would you increase organisation activity? 
How are you gonna solve the staff shortage issue  ? 
How will improve rp between orgs?
If you saw favourtism amongst your high command, how would you deal with it?
Can you kick members from your organisations for OOC reason? How?
What is the minimum term of a leadership and how many terms do you plan on taking, given they are offered to you? 
What is Fail RP? 
What is Fear RP?
What is Meta gaming? 
Is joining the SAHP discord and giving an interview there Metagaming?
Whats is MK and CL ? Exmaple 
What is PG ?
What is NLR? Give an example of someone doing it?
What is a green zone? what is different between unscripted GZ and normal GZ?
Can LEos shoot in GZ under any circumstance? 
Can a gang rob somebody in Fort Zancudo?
Can you unmask a critically wounded person? 
ATM Robbery at Stripclub - 1 Can you go there to stop the robbery? 
How many people/cars are needed to pull you over in a robbery on the highway?
Can you get on roofs which dont have ladder using a car to climb on car and then get on it to get access?
is roof of 24/7 is GZ ? What about gas station?
Can you use a helicopter to access roofs?
Can you kill gangmembers inside their HQ? Any Exceptions?
Can you respond to 911 calls in ghetto? Any exception?
Is PDA IC or OOC? How to make it IC?
Can Leos join state object attack?
What about money printing?
tell me 3 reason why Leos didn't get pay check?
How many units you need to search a trunk? 1 To confiscate ?
Is it an IC or an OOC rule to have bodycam of each arrest?
Can you revive somebody underwater? 
Can you Patrol the City in an armored car?
During a gunfight, can you pick up a weapon dropped on the ground?
Can families start inside prison in prison protection? Can Leos do it 
Can gang rob in paleto bey?
Can gang rob ammo truck in Paleto Bay?
whats the max number of people can join store robbery? What about Hacker attack?
If you are in SAHP and your twink in bloods any rule break ? What about LI ? Why ?
Can you use tazers mid fight?
Can you respond to ATM robberies alone?
Are LEO's allowed to MK at Subs?
How Many Hostage gangs can take?
what gang can demand for hostage?
If gangs told leos go back its demand or request
What you need to start a gang raid?
what the minimum number of FIB you need to start gang raid?
What are the prime times for raids?
Which events you cant use roof ?
Is there any cooldown for FZ Raids?
When  Car Theft event?
When  informant event?
When does Prison break event start ?
When  Bank Roberry ? Which days ?
Can we pull over a person if he is doing starter job ?
when you need to close your warehouse in purge night ?
Can you use OBS to record events? Punishment?
Can you use a machine gun in Bank? What about a Heavy Shotgun?
How much money can you take from the org balance each day?
"If you have already taken out the 1million and you need more for a hostage situation
can you take out more money to pay for the hostage?"
Can you use the Org balance to buy yourself AR Ammo?
What is a ghetto Patrol? How many each week? How many people?
How many Globals are you required to do each term? When?
Tell me 5 Prohibited items.
What is the speed limit in city and highway?
what's charges you will give if you arrest someone from hacker attack?
Can you lock unit logs
Can you read miranda rights?
What is law ? And who can change it, how ? 
telling leos there is hostage situation going on through club chat.Can you respond ? Why
If someone walking middle of the road without any reason did he break any law? which law
If a citizen helps anyone to evade an arrest what charges you can add to arrest him
If someone is shooting in air, can you arrest him? What is Charges
If someone is doing a store robbery with hostage what charges can u add to him?
Can you fly your drone through a gang HQ?
Can you refuse somebody a Lawyer?
As a Leader you are classified. Do you need to identify yourself when asked? If yes: How?
How long can you keep somebody in handcuffs? (can this change?)
Can you have Org Gear off Duty? 
"You see a global dropped in Ballas HQ. Then you look at your PDA and see alot of
 calls for a hostage situation there. Can you respond and go to the Gang HQ?"
"You are doing an ammo run with NG. You are in convoy in Paleto pay and gang members 
manage to get 1 ammo truck on its own outside the Paleto bay GunStore. They give 
demands and start robbing the ammo truck. What do you do? "
If governor taken as hostage and there is a store robbery happening. Which event is main priority?
If a corrupt cop is taking a bribe, can he force the player to give him illegal items as well?
"Suppose the gangs taken roof in store to fight Can you take heli and jump with 
parachute to get inside the zone to fight with them? If no Why ?"
"lets say you are responding to a store robbery and u see a gang also responding, 
but he is over speeding Can u pull him over and arrest him"
"Suppose FIB isn't in city and gang doing too much criminal activity . 
How many time you can sign casefile as SAHP leader?"
"While processing someone at DOC, 4 Criminals approach you from behind and demand you to open 
all doors to let their guy out. Is that allowed?"
"Lets say you & your colleague are chasing someone with car and 
he enters the ghetto Can you enter the ghetto and arrest him "
`;
  const lines = text.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
  window.BANKS = window.BANKS || {};
  window.BANKS.SAHP = lines;
})();
