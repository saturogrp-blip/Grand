(function(){
  const text = `What is LSPD?
Why should we choose you over other applicants?
Who are your Deputies? Tell us about them.
What do you think is the role of LSPD in the city or among state organizations?
How many freezes can you take during your term?
What is the minimum and maximum number of freezes you can take?
What changes would you make throughout your LSPD term?
Do you have a specific plan for increasing tow activity?
How would you increase overall organisation activity?
How will you solve the staff shortage issue?
How will you improve RP between organizations?
If you saw favouritism among your High Command, how would you deal with it?
Can you kick members from your organization for OOC reasons? How?
What is the minimum leadership term and how many terms do you intend to take?
What is Fail RP?
What is Fear RP?
What is Meta Gaming?
Is joining the LSPD Discord and giving an interview there considered Meta Gaming?
What is MK and CL? Give example.
What is PG?
What is NLR? Give an example.
What is a Green Zone? What’s the difference between an unscripted GZ and a normal GZ?
Can LEOs shoot in a Green Zone under any circumstance?
Can a gang rob someone in Fort Zancudo?
Can you unmask a critically wounded person?
ATM Robbery at Stripclub #1 — can you go there to stop the robbery?
How many people/cars are required to pull you over during a robbery on the highway?
Can you use a car to climb onto a roof without a ladder?
Is the roof of a 24/7 a Green Zone? What about a gas station?
Can you use a helicopter to access rooftops?
Can you kill gang members inside their HQ? Any exceptions?
Can you respond to 911 calls in ghetto? Any exceptions?
Is PDA IC or OOC? How do you make it IC?
Can LEOs join state object attacks?
Can LEOs join money printing?
Give 3 reasons why LEOs do not get paychecks.
How many units do you need to search a trunk? How many to confiscate?
Is having bodycam of each arrest an IC or OOC rule?
Can you revive someone underwater?
Can you patrol the city in an armored car?
During a gunfight, can you pick up a weapon dropped on the ground?
Can families start inside prison in prison protection? Can LEOs do it?
Can gangs rob in Paleto Bay?
Can gangs rob ammo trucks in Paleto Bay?
What is the max number of people allowed in a store robbery?
What is the max number for a hacker attack?
If you're in LSPD and your twink is in Bloods, is it a rule break? What about LifeInvader? Why?
Can you use tasers mid-fight?
Can you respond to ATM robberies alone?
Are LEOs allowed to MK at Submarines?
How many hostages can gangs take?
What can gangs demand for a hostage?
If gangs tell LEOs “go back,” is it a demand or a request?
What do you need to start a gang raid?
What is the minimum number of FIB required to start a gang raid?
What are the prime times for raids?
Which events prohibit using roofs?
Is there any cooldown for Fort Zancudo raids?
When is Car Theft event?
When is Informant event?
When does Prison Break event start?
When is Bank Robbery? Which days?
Can you pull over a person doing a starter job?
When must you close your warehouse on purge night?
Can you use OBS to record events? What is the punishment?
Can you use a machine gun in a bank? What about a heavy shotgun?
How much money can you take from org balance each day?
If you already took 1 million, can you take more for a hostage situation?
Can you use org balance to buy yourself AR ammo?
What is a ghetto patrol? How many per week? How many people?
How many globals are you required to do each term? When?
Tell me 5 prohibited items.
What is the speed limit in the city and on the highway?
What charges do you give for someone arrested during a hacker attack?
Can you lock unit logs?
Can you read Miranda rights?
What is law? Who can change it and how?
If someone reports a hostage situation in club chat, can you respond? Why?
If someone is walking in the middle of the road with no reason, did they break a law? Which law?
If a citizen helps someone evade arrest, what charges can you add?
If someone is shooting in the air, can you arrest them? What charges?
If someone is doing a store robbery with a hostage, what charges can you add?
Can you fly a drone through a gang HQ?
Can you refuse someone a lawyer?
As a Leader you are classified. Do you need to identify yourself when asked? How?
How long can you keep someone in handcuffs? Can it change?
Can you have org gear while off duty?
You see a global dropped in Ballas HQ and also see a hostage situation call — can you respond and go to the HQ?
You're doing an ammo run with NG and a gang robs one truck outside Paleto — what do you do?
If the Governor is taken hostage during a store robbery, which event is priority?
If a corrupt cop takes a bribe, can he force the player to give illegal items?
If gangs take the roof in a store robbery, can you use a helicopter and parachute into the zone? Why or why not?
You see a gang responding to a store robbery but they are overspeeding — can you pull them over?
If FIB isn't in the city and gangs are active, how many times can you sign casefiles as LSPD Leader?
While processing someone at DOC, criminals demand you open doors — is it allowed?
If you chase someone and they run into ghetto, can you follow and arrest them? `;
  const lines = text.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
  window.BANKS = window.BANKS || {};
  window.BANKS.LSPD = lines;
})();
