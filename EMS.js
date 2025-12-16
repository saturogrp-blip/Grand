(function(){
  const text = `
What are EMS primary responsibilities?
How do you prioritize multiple casualties in a scene?
What is your ETA protocol for large events?
How do you coordinate with LEO and NG during incidents?
Describe how EMS handles hostile environments.
What equipment does EMS require for mass-casualty events?
How do you train EMTs and Paramedics in RP scenarios?
How should EMS handle patient transport versus on-scene treatment?
What are the limits of EMS involvement in criminal scenes?
How do you document incidents for later review?
`;

  const lines = text.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
  window.BANKS = window.BANKS || {};
  window.BANKS.EMS = lines;
})();
