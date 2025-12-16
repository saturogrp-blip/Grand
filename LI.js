(function(){
  const text = `
`;
  const lines = text.split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
  window.BANKS = window.BANKS || {};
  window.BANKS.LI = lines;
})();
