(function(){
  const text = `
What is the role of the National Guard (NG)?
When should NG be deployed instead of LEO orgs?
How does NG coordinate with other organizations?
Describe a situation where NG must stand down.
What are NG rules of engagement?
How do you plan to improve NG community relations?
How many active units can you deploy for large-scale events?
Explain how NG handles civilian casualties in RP.
How do you recruit and train new NG members?
What equipment is NG permitted to use during events?
`;

  const lines = text.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
  window.BANKS = window.BANKS || {};
  window.BANKS.NG = lines;
})();
