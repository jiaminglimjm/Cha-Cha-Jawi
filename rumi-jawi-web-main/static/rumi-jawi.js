
var rjmap = new Map();
var jrmap = new Map();
rjtsv.split("\n").forEach(function (line) {
  let parts = line.split("\t");
  let rumi = parts[0];
  let normRumi = rumi.toLowerCase();
  let jawi = parts[1];
  if (!rjmap.has(normRumi)) rjmap.set(normRumi, []);
  rjmap.get(normRumi).push(jawi);
  if (!jrmap.has(jawi)) jrmap.set(jawi, []);
  jrmap.get(jawi).push(rumi);
})
