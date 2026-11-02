"use strict";
const acids=[
 ['Azido nitrosoa','HNO2','N',3,1],['Azido nitrikoa','HNO3','N',5,1],
 ['Azido sulfurosoa','H2SO3','S',4,1],['Azido sulfurikoa','H2SO4','S',6,1],
 ['Azido hipoklorosoa','HClO','Cl',1,1],['Azido klorosoa','HClO2','Cl',3,1],['Azido klorikoa','HClO3','Cl',5,1],['Azido perklorikoa','HClO4','Cl',7,1],
 ['Azido hipobromosoa','HBrO','Br',1,1],['Azido bromosoa','HBrO2','Br',3,1],['Azido bromikoa','HBrO3','Br',5,1],['Azido perbromikoa','HBrO4','Br',7,1],
 ['Azido hipoiodosoa','HIO','I',1,1],['Azido iodosoa','HIO2','I',3,1],['Azido iodikoa','HIO3','I',5,1],['Azido periodikoa / Azido metaperiodikoa','HIO4','I',7,1],
 ['Azido karbonikoa','H2CO3','C',4,1],
 ['Azido metafosforikoa','HPO3','P',5,1],['Azido pirofosforikoa / Azido difosforikoa','H4P2O7','P',5,2],['Azido fosforikoa / Azido ortofosforikoa','H3PO4','P',5,3],
 ['Azido fosforosoa','H3PO3','P',3,3],
 ['Azido metaartsenikoa','HAsO3','As',5,1],['Azido piroartsenikoa / Azido diartsenikoa','H4As2O7','As',5,2],['Azido artsenikoa / Azido ortoartsenikoa','H3AsO4','As',5,3],
 ['Azido artseniosoa','H3AsO3','As',3,3],
 ['Azido metaantimonikoa','HSbO3','Sb',5,1],['Azido piroantimonikoa / Azido diantimonikoa','H4Sb2O7','Sb',5,2],['Azido antimonikoa / Azido ortoantimonikoa','H3SbO4','Sb',5,3],
 ['Azido antimonosoa','H3SbO3','Sb',3,3],
 ['Azido metaborikoa','HBO2','B',3,1],['Azido borikoa / Azido ortoborikoa','H3BO3','B',3,3],
 ['Azido silizikoa','H2SiO3','Si',4,1]
].map(([name,formula,el,val,water])=>({name,formula,el,val,water}));

const salts=[
  {
    "name": "Urre (III) nitritoa",
    "formula": "Au(NO2)3",
    "metal": "Au",
    "metalName": "Urre",
    "metalVal": 3,
    "acidFormula": "HNO2",
    "anionName": "nitritoa"
  },
  {
    "name": "Burdin (III) sulfatoa",
    "formula": "Fe2(SO4)3",
    "metal": "Fe",
    "metalName": "Burdin",
    "metalVal": 3,
    "acidFormula": "H2SO4",
    "anionName": "sulfatoa"
  },
  {
    "name": "Kobre (II) nitratoa",
    "formula": "Cu(NO3)2",
    "metal": "Cu",
    "metalName": "Kobre",
    "metalVal": 2,
    "acidFormula": "HNO3",
    "anionName": "nitratoa"
  },
  {
    "name": "Sodio kloratoa",
    "formula": "NaClO3",
    "metal": "Na",
    "metalName": "Sodio",
    "metalVal": 1,
    "acidFormula": "HClO3",
    "anionName": "kloratoa"
  },
  {
    "name": "Kaltzio karbonatoa",
    "formula": "CaCO3",
    "metal": "Ca",
    "metalName": "Kaltzio",
    "metalVal": 2,
    "acidFormula": "H2CO3",
    "anionName": "karbonatoa"
  },
  {
    "name": "Aluminio fosfatoa",
    "formula": "AlPO4",
    "metal": "Al",
    "metalName": "Aluminio",
    "metalVal": 3,
    "acidFormula": "H3PO4",
    "anionName": "fosfatoa"
  },
  {
    "name": "Burdin (II) sulfitoa",
    "formula": "FeSO3",
    "metal": "Fe",
    "metalName": "Burdin",
    "metalVal": 2,
    "acidFormula": "H2SO3",
    "anionName": "sulfitoa"
  },
  {
    "name": "Zilar bromatoa",
    "formula": "AgBrO3",
    "metal": "Ag",
    "metalName": "Zilar",
    "metalVal": 1,
    "acidFormula": "HBrO3",
    "anionName": "bromatoa"
  },
  {
    "name": "Berun (IV) perkloratoa",
    "formula": "Pb(ClO4)4",
    "metal": "Pb",
    "metalName": "Berun",
    "metalVal": 4,
    "acidFormula": "HClO4",
    "anionName": "perkloratoa"
  },
  {
    "name": "Nikel (II) pirofosfatoa",
    "formula": "Ni2P2O7",
    "metal": "Ni",
    "metalName": "Nikel",
    "metalVal": 2,
    "acidFormula": "H4P2O7",
    "anionName": "pirofosfatoa"
  },
  {
    "name": "Magnesio hipokloritoa",
    "formula": "Mg(ClO)2",
    "metal": "Mg",
    "metalName": "Magnesio",
    "metalVal": 2,
    "acidFormula": "HClO",
    "anionName": "hipokloritoa"
  },
  {
    "name": "Kobalto (III) artseniatoa",
    "formula": "CoAsO4",
    "metal": "Co",
    "metalName": "Kobalto",
    "metalVal": 3,
    "acidFormula": "H3AsO4",
    "anionName": "artseniatoa"
  },
  {
    "name": "Potasio iodatoa",
    "formula": "KIO3",
    "metal": "K",
    "metalName": "Potasio",
    "metalVal": 1,
    "acidFormula": "HIO3",
    "anionName": "iodatoa"
  },
  {
    "name": "Zink boratoa",
    "formula": "Zn3(BO3)2",
    "metal": "Zn",
    "metalName": "Zink",
    "metalVal": 2,
    "acidFormula": "H3BO3",
    "anionName": "boratoa"
  },
  {
    "name": "Kobre (I) bromitoa",
    "formula": "CuBrO2",
    "metal": "Cu",
    "metalName": "Kobre",
    "metalVal": 1,
    "acidFormula": "HBrO2",
    "anionName": "bromitoa"
  },
  {
    "name": "Bario sulfatoa",
    "formula": "BaSO4",
    "metal": "Ba",
    "metalName": "Bario",
    "metalVal": 2,
    "acidFormula": "H2SO4",
    "anionName": "sulfatoa"
  },
  {
    "name": "Kromo (III) fosfatoa",
    "formula": "CrPO4",
    "metal": "Cr",
    "metalName": "Kromo",
    "metalVal": 3,
    "acidFormula": "H3PO4",
    "anionName": "fosfatoa"
  },
  {
    "name": "Zilar metafosfatoa",
    "formula": "AgPO3",
    "metal": "Ag",
    "metalName": "Zilar",
    "metalVal": 1,
    "acidFormula": "HPO3",
    "anionName": "metafosfatoa"
  }
,
{"name": "Litio hipobromitoa", "formula": "LiBrO", "metal": "Li", "metalName": "Litio", "metalVal": 1, "acidFormula": "HBrO", "anionName": "hipobromitoa"},
{"name": "Estrontzio sulfitoa", "formula": "SrSO3", "metal": "Sr", "metalName": "Estrontzio", "metalVal": 2, "acidFormula": "H2SO3", "anionName": "sulfitoa"},
{"name": "Eztainu (IV) nitratoa", "formula": "Sn(NO3)4", "metal": "Sn", "metalName": "Eztainu", "metalVal": 4, "acidFormula": "HNO3", "anionName": "nitratoa"},
{"name": "Manganeso (II) fosfatoa", "formula": "Mn3(PO4)2", "metal": "Mn", "metalName": "Manganeso", "metalVal": 2, "acidFormula": "H3PO4", "anionName": "fosfatoa"},
{"name": "Kadmio metaboratoa", "formula": "Cd(BO2)2", "metal": "Cd", "metalName": "Kadmio", "metalVal": 2, "acidFormula": "HBO2", "anionName": "metaboratoa"},
{"name": "Berun (II) ioditoa", "formula": "Pb(IO2)2", "metal": "Pb", "metalName": "Berun", "metalVal": 2, "acidFormula": "HIO2", "anionName": "ioditoa"},
{"name": "Urre (I) perkloratoa", "formula": "AuClO4", "metal": "Au", "metalName": "Urre", "metalVal": 1, "acidFormula": "HClO4", "anionName": "perkloratoa"},
{"name": "Burdin (III) piroartseniatoa", "formula": "Fe4(As2O7)3", "metal": "Fe", "metalName": "Burdin", "metalVal": 3, "acidFormula": "H4As2O7", "anionName": "piroartseniatoa"},
{"name": "Kobre (II) boratoa", "formula": "Cu3(BO3)2", "metal": "Cu", "metalName": "Kobre", "metalVal": 2, "acidFormula": "H3BO3", "anionName": "boratoa"},
{"name": "Kobalto (II) hipoioditoa", "formula": "Co(IO)2", "metal": "Co", "metalName": "Kobalto", "metalVal": 2, "acidFormula": "HIO", "anionName": "hipoioditoa"},
{"name": "Kromo (III) antimoniatoa", "formula": "CrSbO4", "metal": "Cr", "metalName": "Kromo", "metalVal": 3, "acidFormula": "H3SbO4", "anionName": "antimoniatoa"},
{"name": "Zink metaartseniatoa", "formula": "Zn(AsO3)2", "metal": "Zn", "metalName": "Zink", "metalVal": 2, "acidFormula": "HAsO3", "anionName": "metaartseniatoa"},
{"name": "Bario pirofosfatoa", "formula": "Ba2P2O7", "metal": "Ba", "metalName": "Bario", "metalVal": 2, "acidFormula": "H4P2O7", "anionName": "pirofosfatoa"},
{"name": "Aluminio periodatoa", "formula": "Al(IO4)3", "metal": "Al", "metalName": "Aluminio", "metalVal": 3, "acidFormula": "HIO4", "anionName": "periodatoa"},
{"name": "Nikel (III) kloritoa", "formula": "Ni(ClO2)3", "metal": "Ni", "metalName": "Nikel", "metalVal": 3, "acidFormula": "HClO2", "anionName": "kloritoa"},
{"name": "Magnesio bromitoa", "formula": "Mg(BrO2)2", "metal": "Mg", "metalName": "Magnesio", "metalVal": 2, "acidFormula": "HBrO2", "anionName": "bromitoa"},
{"name": "Zilar hipobromitoa", "formula": "AgBrO", "metal": "Ag", "metalName": "Zilar", "metalVal": 1, "acidFormula": "HBrO", "anionName": "hipobromitoa"},
{"name": "Potasio piroantimoniatoa", "formula": "K4Sb2O7", "metal": "K", "metalName": "Potasio", "metalVal": 1, "acidFormula": "H4Sb2O7", "anionName": "piroantimoniatoa"},
{"name": "Sodio metaboratoa", "formula": "NaBO2", "metal": "Na", "metalName": "Sodio", "metalVal": 1, "acidFormula": "HBO2", "anionName": "metaboratoa"},
{"name": "Kaltzio artsenitoa", "formula": "Ca3(AsO3)2", "metal": "Ca", "metalName": "Kaltzio", "metalVal": 2, "acidFormula": "H3AsO3", "anionName": "artsenitoa"},
{"name": "Burdin (II) silikatoa", "formula": "FeSiO3", "metal": "Fe", "metalName": "Burdin", "metalVal": 2, "acidFormula": "H2SiO3", "anionName": "silikatoa"},
{"name": "Eztainu (II) kloratoa", "formula": "Sn(ClO3)2", "metal": "Sn", "metalName": "Eztainu", "metalVal": 2, "acidFormula": "HClO3", "anionName": "kloratoa"}
];
const $=s=>document.querySelector(s);
let mode='name',section='acids',steps=[],visible=0,rulesHidden=false;
const gcd=(a,b)=>b?gcd(b,a%b):a;
const fmt=s=>String(s).replace(/(\d+)/g,'<sub>$1</sub>');
const idx=n=>n===1?'':n;
const waterHTML=n=>n===1?fmt('H2O'):`${n} ${fmt('H2O')}`;
const valences={N:[3,5],S:[4,6],Cl:[1,3,5,7],Br:[1,3,5,7],I:[1,3,5,7],C:[2,4],P:[3,5],As:[3,5],Sb:[3,5],B:[3],Si:[4]};
const elementNames={N:'nitrogenoa',S:'sufrea',Cl:'kloroa',Br:'bromoa',I:'iodoa',C:'karbonoa',P:'fosforoa',As:'artsenikoa',Sb:'antimonioa',B:'boroa',Si:'silizioa'};

function calc(a){
  const g=gcd(a.val,2),x=2/g,y=a.val/g;
  const an=a.el+idx(x)+'O'+idx(y), raw=a.el+'2O'+a.val;
  const H=2*a.water,E=x,O=y+a.water;
  const d=gcd(gcd(H,E),O), reduced='H'+idx(H/d)+a.el+idx(E/d)+'O'+idx(O/d);
  return {g,x,y,an,raw,H,E,O,reduced,factor:d};
}
function step(t,e,p,final=false){return {t,e,p,final};}
function suffix(vs,i){if(vs.length===1)return '-iko';if(vs.length===2)return i===0?'-oso':'-iko';if(vs.length===3)return ['hipo-…-oso','-oso','-iko'][i];if(vs.length===4)return ['hipo-…-oso','-oso','-iko','per-…-iko'][i];return i===vs.length-1?'-iko':'-oso';}
function nameEnding(a){const vs=valences[a.el]||[a.val];const i=vs.indexOf(a.val);return suffix(vs,i);}
function valenceTable(a,highlight=false){const vs=valences[a.el]||[a.val];return `<div class="valence-map">${vs.map((v,i)=>`<span${highlight&&v===a.val?' class="chosen"':''}>+${v} · ${suffix(vs,i)}</span>`).join('')}</div>`;}
function extractAtoms(formula){const atoms={};for(const m of formula.matchAll(/([A-Z][a-z]?)(\d*)/g))atoms[m[1]]=Number(m[2]||1);return atoms;}
function atomWithValence(sym,count,val){ return `<span>${sym}${count===1?'':`<sub>${count}</sub>`}<sup>${val}</sup></span>`; }
function visualCalc(a){
  const counts=extractAtoms(a.formula), h=counts.H||0, o=counts.O||0, e=counts[a.el]||1;
  const hCont=h*(+1), oCont=o*(-2), needed=-(hCont+oCont), perEl=needed/e;
  return `
  <div class="ox-view">
    <div class="formula-band">
      ${atomWithValence('H',h,'+1')}
      ${atomWithValence(a.el,e,'?')}
      ${atomWithValence('O',o,'−2')}
    </div>
    <div class="contrib-grid">
      <div class="contrib"><small>H-k ematen du</small><strong>${h} × (+1)</strong><b>${hCont>=0?'+':''}${hCont}</b></div>
      <div class="contrib"><small>O-k ematen du</small><strong>${o} × (−2)</strong><b>${oCont}</b></div>
      <div class="contrib accent"><small>Molekula neutroa denez</small><strong>${a.el}-k guztira eman behar du</strong><b>${needed>=0?'+':''}${needed}</b></div>
      <div class="contrib success"><small>Atomo bakoitzeko</small><strong>${needed>=0?'+':''}${needed} ÷ ${e}</strong><b>+${perEl}</b></div>
    </div>
  </div>`;
}
function hydrationStep(a){
  if(!['P','As','Sb'].includes(a.el)) return null;
  const ox=calc(a);
  const options=[1,2,3].map(n=>{
    const H=2*n,E=ox.x,O=ox.y+n;
    const d=gcd(gcd(H,E),O);
    const acid='H'+idx(H/d)+a.el+idx(E/d)+'O'+idx(O/d);
    return {n,label:['meta-','piro-','orto-'][n-1],acid,d};
  });
  const cards=options.map(it=>`<div class="hydro-card hydro-process${it.n===a.water?' chosen':''}">
    <strong>${it.label}</strong>
    <div class="hydro-reaction">${fmt(ox.an)} + ${waterHTML(it.n)}</div>
    <div class="hydro-arrow">↓</div>
    <div class="hydro-result">${it.d>1?`<span class="reaction-coefficient">${it.d}</span> `:''}${fmt(it.acid)}</div>
  </div>`).join('');
  return step('Konparatu meta-, piro- eta orto- prozesuak',
    `<div class="hydro-grid process-grid">${cards}</div>`,
    'Anhidrido berari 1, 2 edo 3 ur-molekula gehitu, eta azpiindizeak sinplifikatu. Berdez nabarmenduta dago aukeratutako kasua.');
}
function waterChoice(a){
  if(!['P','As','Sb'].includes(a.el))return '';
  return `<div class="hydro-grid hydration-only">${[1,2,3].map((n,i)=>`<div class="hydro-card${n===a.water?' chosen':''}"><strong>${['meta-','piro-','orto-'][i]}</strong><span>${n} H₂O</span></div>`).join('')}</div>`;
}
function markedName(a){
 const first=a.name.split(' / ')[0];
 const m=first.match(/^(Azido\s+)(hipo|per)?(meta|piro|orto)?(.+?)(ikoa|osoa)$/i);
 if(!m)return first;
 const [,intro,traditional='',hydration='',root,ending]=m;
 const t=v=>`<mark class="mark-valence">${v}</mark>`;
 const h=v=>`<mark class="mark-hydration">${v}</mark>`;
 const waterNote=hydration?`${hydration}− → ${a.water} H₂O (hidratazioa)`:'Ez dago hidratazio-aurrizki espliziturik.';
 const valNote=`${traditional?traditional+'− … ':''}−${ending} (izendapen tradizionala)`;
 return `<div class="name-breakdown"><div class="marked-name">${intro}${traditional?t(traditional):''}${hydration?h(hydration):''}${root}${t(ending)}</div><div class="name-explain"><div class="name-explain-water"><b>URA · META / PIRO / ORTO</b><span>${waterNote}</span></div><div class="name-explain-valence"><b>BALENTZIA · HIPO / PER / -OSO / -IKO</b><span>${valNote}</span></div></div>${hydration?'<p class="name-warning">Kontuz: piro- ez da per-. Piro- aurrizkiak ur-molekulen kopurua adierazten du; per- aurrizkia oxidazio-zenbakiaren izendapen tradizionalari dagokio.</p>':''}</div>`;
}

function build(a){
  const c=calc(a), vs=valences[a.el]||[a.val], end=nameEnding(a);
  const valence=`<span class="valence"><span>${a.el}<sup>+${a.val}</sup></span><span>O<sup>−2</sup></span></span>`;
  const crossed=`<span class="valence"><span>${a.el}<sub>2</sub></span><span>O<sub>${a.val}</sub></span></span>`;
  const basic=[
    step('Anhidridoa: jarri oxidazio-zenbakiak goian',valence,`${a.el}: +${a.val}; oxigenoa: −2. Balioak goialdean idatzi.`),
    step('Gurutzatu oxidazio-zenbakien balio absolutuak',crossed,`O-ren 2a ${a.el} elementuaren azpiindizera doa, eta ${a.el} elementuaren ${a.val}a O-ren azpiindizera.`),
    step('Sinplifikatu anhidridoaren azpiindizeak',`${fmt(c.raw)} → ${fmt(c.an)}`,c.g>1?`Azpiindizeak ${c.g}(r)ekin zatitu.`:'Azpiindizeak ezin dira gehiago sinplifikatu.'),
    step('Gehitu dagokion ur-kopurua',`${waterChoice(a)}<div class="water-equation">${fmt(c.an)} + ${waterHTML(a.water)}</div>`,`${a.name} lortzeko ${a.water} ur-molekula gehitzen dira formulazio-eredu honetan. Meta-, piro- eta orto- aukerak ur-kopurua adierazten dute; azken formula hurrengo urratsetan lortuko dugu.`),
    step('Batu elementu bakoitzeko atomoak',fmt('H'+idx(c.H)+a.el+idx(c.E)+'O'+idx(c.O)),`H: ${c.H}; ${a.el}: ${c.E}; O: ${c.O}.`),
    step('Sinplifikatu eta idatzi oxoazidoa',`${fmt('H'+idx(c.H)+a.el+idx(c.E)+'O'+idx(c.O))} → ${fmt(a.formula)}`,c.factor>1?`Azpiindize guztiak ${c.factor}(r)ekin zatitu. ${a.name}.`:`Ez dago gehiago sinplifikatu beharrik. ${a.name}.`,true)
  ];
  if(mode==='name') return [
    step('Abiapuntua: izena',a.name,'Izenean oinarrituta eraikiko dugu formula.'),
    step('Identifikatu elementua',`${a.el} · ${elementNames[a.el]||a.el}`,'Azidoaren izeneko elementu nagusia identifikatu.'),
    step('Gogoratu elementuaren oxidazio-zenbakiak',vs.map(v=>`+${v}`).join(' · '),'Elementuaren oxidazio-zenbaki ohikoenak gogoratu.'),
    step('Bilatu izeneko aurrizkia eta atzizkia',markedName(a),`Izenaren barruan nabarmendutako zatiek izendapen tradizionala eta, hala badagokio, hidratazio mota adierazten dute.`),
    step('Lotu oxidazio-zenbakiak eta izendapen tradizionala',valenceTable(a,false),'Jarri balentziak txikienetik handienera eta esleitu hipo-, per-, -oso eta -iko.'),
    step('Aukeratu izenari dagokion oxidazio-zenbakia',valenceTable(a,true),`${end} dagokio: +${a.val}.`),
    ...basic
  ];
  const arr=[
    step('Kalkulatu elementu nagusiaren oxidazio-zenbakia',visualCalc(a),'H-k +1 eta O-k −2 dutela kontuan hartuta, ikusi zenbat ematen duen bakoitzak; molekula neutroa denez, falta den zatia elementu nagusiak eman behar du.'),
    step('Identifikatu elementua eta haren balentziak',`${a.el} · ${elementNames[a.el]||a.el}<div class="valence-map">${vs.map(v=>`<span>+${v}</span>`).join('')}</div>`,'Erdiko elementua zein den identifikatu eta ohiko balentziak gogoratu.'),
    step('Lotu balentziak eta izendapen tradizionala',valenceTable(a,false),'Balentzia bakoitzari dagokion izen tradizionala esleitu.'),
    step('Nabarmendu kalkulatutako oxidazio-zenbakia',valenceTable(a,true),`Kalkulatutako +${a.val} balioa nabarmendu; dagokion atzizkia ${end} da.`)
  ];
  const hstep=hydrationStep(a); if(hstep) arr.push(hstep);
  arr.push(step('Idatzi oxoazidoaren izena',markedName(a),`Formula: ${fmt(a.formula)}.${a.el==='Si'?' Silizioarekin, ikastaro honetan, H₂O bakarra hartzen dugu kontuan eta ez dugu meta- aurrizkia erabiltzen.':''}`,true));
  return arr;
}

const roman={1:'I',2:'II',3:'III',4:'IV'};
const fixedMetals=['Na','K','Ca','Al','Ag','Mg','Zn','Ba','Li','Sr','Cd'];
function bracketIon(ion,count){return count===1?ion:(/^[A-Z][a-z]?\d*$/.test(ion)?ion+count:`(${ion})${count}`);}
function parseAcidH(formula){const m=formula.match(/^H(\d*)/);return m?Number(m[1]||1):0;}
function ionFromAcid(formula){return formula.replace(/^H\d*/, '');}
function saltInfo(s){
 const q=parseAcidH(s.acidFormula),ion=ionFromAcid(s.acidFormula),g=gcd(q,s.metalVal),mc=q/g,ac=s.metalVal/g;
 const formula=bracketIon(s.metal,mc)+bracketIon(ion,ac);
 return {q,ion,mc,ac,g,formula,metalName:s.metalName,roman:roman[s.metalVal]};
}

const metalPossibilities={
 Au:[1,3], Fe:[2,3], Cu:[1,2], Na:[1], Ca:[2], Al:[3], Li:[1], Sr:[2], Sn:[2,4], Mn:[2,3,4,7], Cd:[2],
 Ag:[1], Pb:[2,4], Ni:[2,3], Mg:[2], Co:[2,3], K:[1],
 Zn:[2], Ba:[2], Cr:[2,3]
};
function acidForSalt(s){return acids.find(a=>a.formula===s.acidFormula);}
function anionCorrespondence(s){
 const isIto=s.anionName.endsWith('itoa');
 const tail=isIto?'ito':'ato';
 return `<div class="salt-conversion"><div class="salt-name">${s.anionName.replace(new RegExp(`(${tail})(a)$`),`<mark class="mark-valence">$1</mark>$2`)}</div><div class="valence-map"><span${isIto?' class="chosen"':''}>-ito ↔ -oso</span><span${!isIto?' class="chosen"':''}>-ato ↔ -iko</span></div></div>`;
}
function acidConstructionSteps(s){
 const a=acidForSalt(s);
 if(!a)return [step('Oxoazidoa identifikatu',fmt(s.acidFormula),'Oxoanioiari dagokion oxoazidoa bilatu.')];
 const previousMode=mode;
 mode='name';
 const stages=build(a);
 mode=previousMode;
 // Reuse every instructional step of the oxoacid pathway except the opening and ending.
 return stages.slice(1).map(stage=>step(`Oxoazidoa · ${stage.t}`,stage.e,stage.p));
}
function saltChargeVisual(s,x){
 const rawMetal=x.q, rawAnion=s.metalVal;
 const raw=`${fmt(s.metal)}${rawMetal===1?'':`<sub>${rawMetal}</sub>`}(${fmt(x.ion)})${rawAnion===1?'':`<sub>${rawAnion}</sub>`}`;
 return `<div class="salt-center">${s.metal}<sup>+${s.metalVal}</sup> + ${fmt(x.ion)}<sup>−${x.q}</sup> → ${rawMetal===1?fmt(s.metal):`${fmt(s.metal)}<sub>${rawMetal}</sub>`}(${fmt(x.ion)})<sub>${rawAnion}</sub></div>`;
}
function reverseHydrationStep(a){
 if(!a || !['P','As','Sb','B'].includes(a.el)) return null;
 const ox=calc(a);
 const waters=a.el==='B'?[1,3]:[1,2,3];
 const items=waters.map(n=>{
   const H=2*n,E=ox.x,O=ox.y+n,d=gcd(gcd(H,E),O);
   return {n,label:n===1?'meta-':n===2?'piro-':'orto-',formula:'H'+idx(H/d)+a.el+idx(E/d)+'O'+idx(O/d),coeff:d};
 });
 const cards=items.map(it=>`<div class="hydro-card hydro-process${it.n===a.water?' chosen':''}">
 <strong>${it.label}</strong>
 <div class="hydro-reaction">${fmt(ox.an)} + ${waterHTML(it.n)}</div>
 <div class="hydro-arrow">↓</div>
 <div class="hydro-result">${it.coeff>1?`<span class="reaction-coefficient">${it.coeff}</span> `:''}${fmt(it.formula)}</div>
 </div>`).join('');
 return step('Aztertu meta-, piro- eta orto- hidratazioak',`<div class="hydro-grid process-grid">${cards}</div>`,
 a.el==='B'?'Boroaren kasuan, meta- (1 H₂O) eta orto- (3 H₂O) konparatu. Formula ezaguna eta lortutako emaitzak alderatu.':'Anhidrido berari 1, 2 edo 3 H₂O gehitu, eta emaitzak alderatu. Formula ezagunarekin bat datorren kasua nabarmenduta dago.');
}
function alternativeMetalChecks(s,x){
 const acid=acidForSalt(s);
 if(!acid)return null;
 const options=(metalPossibilities[s.metal]||[s.metalVal]).filter(v=>v!==s.metalVal);
 if(!options.length)return null;
 const counts=extractAtoms(x.ion);
 const eCount=counts[acid.el]||1, oxygen=counts.O||0;
 const examples=options.map(v=>{
  const charge=x.mc*v/x.ac;
  const oxidation=(2*oxygen-charge)/eCount;
  const possible=(valences[acid.el]||[acid.val]).includes(oxidation);
  const show=n=>Number.isInteger(n)?String(n):n.toFixed(2).replace('.',',');
  return `<div class="alternative-check">
    <div><strong>${s.metal}<sup>+${v}</sup></strong><span>→ ${fmt(x.ion)}<sup>−${show(charge)}</sup></span></div>
    <p>Oxoanioiaren karga: ${x.mc} · (+${v}) ÷ ${x.ac} = ${show(charge)}.</p>
    <p>${acid.el} elementuaren oxidazio-zenbakia: (${2*oxygen} − ${show(charge)}) ÷ ${eCount} = <strong>+${show(oxidation)}</strong>.</p>
    <p class="${possible?'alt-possible':'alt-impossible'}">${possible?'Balio hori posiblea da elementuarentzat; beste datu bat beharko genuke bereizteko.':`Balio hori ez dago ${acid.el} elementuaren ohiko oxidazio-zenbakien artean (${(valences[acid.el]||[]).map(n=>'+'+n).join(', ')}). Aukera hori baztertzen dugu.`}</p>
  </div>`;
 });
 return step('Egiaztatu metalaren beste balentziak',
  `<div class="alternative-checks">${examples.join('')}</div>`,
  'Konposatuaren azpiindizeak ez dira aldatzen: beste balentzia erabiltzeak oxoanioiaren karga aldatuko luke. Horrela, ez-metalaren oxidazio-zenbakiarekin bateragarria den egiaztatzen dugu.');
}
function buildSalt(s){
 const x=saltInfo(s);
 const acid=acidForSalt(s);
 const metalText=`${s.metal}<sup>+${s.metalVal}</sup>`;
 const anionText=`${fmt(x.ion)}<sup>−${x.q}</sup>`;
 if(mode==='name'){
   return [
     step('Abiapuntua: Stock izena',s.name,'Metalaren izena, erromatar zenbakia (badagokio) eta oxoanioiaren izena aztertu.'),
     step('Bereizi metala eta oxoanioia',`<div class="valence-map"><span>${s.metalName}${fixedMetals.includes(s.metal)?'':` (${x.roman})`}</span><span>${s.anionName}</span></div>`,'Lehen zatia metala da; bigarrena oxoanioiaren izena.'),
     step('Identifikatu metalaren karga',`<div class="salt-center">${metalText}</div>`,fixedMetals.includes(s.metal)?'Metal honek ohiko karga finkoa du.':'Stock izendapeneko erromatar zenbakiak metalaren oxidazio-zenbakia adierazten du.'),
     step('Oxoanioiaren atzizkitik oxoazidoarena ondorioztatu',anionCorrespondence(s),'Lehenik, nabarmendu oxoanioiaren -ito edo -ato amaiera. Ondoren, erabili -ito ↔ -oso eta -ato ↔ -iko loturak. Hipo- eta per- aurrizkiak mantendu; meta-, piro- eta orto- hidratazioari dagozkio. Oraindik ez dugu formula kalkulatu.'),
     step('Oxoazidoaren izena identifikatu',acid?markedName(acid):s.anionName,`Oxoanioia ${s.anionName} da; dagokion oxoazidoa izendatu. Gero, ohiko oxoazidoen metodoarekin eraiki haren formula.`),
     ...acidConstructionSteps(s),
     step('Kendu H⁺ ioiak eta lortu oxoanioia',`${fmt(s.acidFormula)} → ${anionText} + ${x.q} H<sup>+</sup>`,`Oxoazidoaren ${x.q} H⁺ ioiak kenduta, ${x.q}− karga duen oxoanioia lortzen da.`),
     step('Gurutzatu kargen balio absolutuak',saltChargeVisual(s,x),'Metalaren eta oxoanioiaren kargen balio absolutuak gurutzatu. Oxoanioia talde bakar gisa hartu.'),
     step('Sinplifikatu azpiindizeak eta idatzi oxigatza',fmt(s.formula),x.g>1?`Hasierako azpiindizeak ${x.g}(r)ekin zatitu. Oxoanioi poliatomikoa behin baino gehiagotan agertzen bada, parentesiak erabili.`:'Egiaztatu kargak orekatzen direla eta behar diren parentesiak jarri.',true)
   ];
 }

 const metalOptions=metalPossibilities[s.metal]||[s.metalVal];
 const metalIndex=x.mc, ionIndex=x.ac;
 // Trukea: metalaren karga, hasieran, oxoanioiaren azpiindizetik;
 // oxoanioiarena, metalaren azpiindizetik.
 const initialMetal=ionIndex, initialIon=metalIndex;
 const possibleFactors=metalOptions.filter(v=>v%initialMetal===0).map(v=>v/initialMetal);
 const factor=s.metalVal/initialMetal;
 const canDirect=metalOptions.includes(initialMetal);
 const metalList=`<div class="valence-map">${metalOptions.map(v=>`<span>+${v}</span>`).join('')}</div>`;
 // Kargak konposatu osoaren gainean erakutsi, eta taldearen barneko azpiindizeak ukitu gabe.
 const formulaCharges=(mv,iv)=>`<div class="charge-formula"><span class="charge-unit"><sup>+${mv}</sup><span>${fmt(s.metal)}${metalIndex===1?'':`<sub>${metalIndex}</sub>`}</span></span><span class="charge-unit"><sup>−${iv}</sup><span>${ionIndex===1?fmt(x.ion):`(${fmt(x.ion)})<sub>${ionIndex}</sub>`}</span></span></div>`;
 const preliminary=formulaCharges(initialMetal,initialIon);
 const comparison=`${preliminary}<div class="reverse-available">${s.metalName}: ${metalOptions.map(v=>`<span>+${v}</span>`).join('')}</div>`;
 const adjustment=`<div class="reverse-charge-evolution"><div>${preliminary}<small>Hasierako karga-proposamena</small></div><div class="reverse-multiplier">${factor===1?'✓':`× ${factor}`}</div><div>${formulaCharges(s.metalVal,x.q)}<small>${factor===1?'Kargak bat datoz':'Kargak zuzenduta'}</small></div></div>`;
 const noteFactor=factor===1
  ? `${s.metalName} metalaren +${initialMetal} oxidazio-zenbakia posible da; ez da biderkatu behar.`
  : `${s.metalName} metalaren balentzia posiblea +${s.metalVal} denez, goian agertzen den +${initialMetal} ezin da izan bere benetako karga. Azpiindizeen erlazioa sinplifikatuta dago: +${s.metalVal} lortzeko ×${factor} egingo dugu, bi kargak biderkatuz.`;
 return [
   step('Abiapuntua: formula',fmt(s.formula),'Formula osoari begiratu, oraindik ioiak bereizi edo haien karga behin betiko ezarri gabe.'),
   step('Gurutzatu azpiindizeak eta jarri kargak goian',
      preliminary,
      `Metalaren azpiindizea ${metalIndex} da, eta oxoanioiarena ${ionIndex}. Bi balioak gurutzatu: metalari +${initialMetal} eta oxoanioi-taldeari −${initialIon}. Hauek hasierako karga-proposamenak dira, sinplifikatuak egon baitaitezke.`),
   step('Egiaztatu metalaren balentzia posibleak',
      comparison,
      `${s.metalName} metalaren ohiko oxidazio-zenbakiak begiratu. Goiko +${initialMetal} balioa posible al da? ${possibleFactors.length>1?'Biderkagai bat baino gehiago badaude, oxoanioiaren konposizioarekin ere egiaztatu behar da.':''}`),
   step('Eguneratu kargak formula berean',
      adjustment,
      noteFactor),
   ...(alternativeMetalChecks(s,x)?[alternativeMetalChecks(s,x)]:[]),
   step('Orain bereizi metala eta oxoanioia',
      `<div class="reverse-ion-pair"><span>${metalText}</span><span>${anionText}</span></div>`,
      `Kargak zehaztuta daude. Orain bereiziko ditugu: ${s.metalName} katioia eta ${fmt(x.ion)} oxoanioia.`),
   step('Oxoanioitik oxoazidora pasa',
      `${anionText} → ${fmt(s.acidFormula)}`,
      `Oxoanioiak ${x.q}− karga du: ${x.q} H⁺ gehituta, azido neutroaren formula lortzen da.`),
   step('Oxoazidoaren elementuaren oxidazio-zenbakia',acid?visualCalc(acid):fmt(s.acidFormula),'H = +1 eta O = −2 erabiliz, ekarpenak aztertu eta elementu nagusiaren oxidazio-zenbakia ondorioztatu.'),
   step('Lotu oxidazio-zenbakiak izendapen tradizionalarekin',acid?valenceTable(acid,true):fmt(s.acidFormula),'Elementuaren balentzien artean dagokiona aukeratu; hipo-/per- eta -oso/-iko bereizi.'),
   ...(reverseHydrationStep(acid)?[reverseHydrationStep(acid)]:[]),
   step('Identifikatu oxoazidoaren izena',acid?markedName(acid):s.anionName,`Oxoazidoaren formula ${fmt(s.acidFormula)} da; meta-, piro- edo orto- badago, hidratazio mota bereizi.`),
   step('Oxoazidotik oxoanioiaren izena osatu',anionCorrespondence(s),'Oxoazidoaren -oso → oxoanioiaren -ito; oxoazidoaren -iko → oxoanioiaren -ato. Hipo-, per-, meta-, piro- eta orto- aurrizkiak mantentzen dira.'),
   step('Idatzi Stock izena',s.name,`Metala: ${s.metalName}${fixedMetals.includes(s.metal)?'':` (${x.roman})`}; oxoanioia: ${s.anionName}.`,true)
 ];

}

function activeItems(){return section==='acids'?acids:salts;}
function activeBuild(item){return section==='acids'?build(item):buildSalt(item);}
function setSection(next){
 if(next===section)return;
 section=next;steps=[];visible=0;
 document.querySelectorAll('.nav-option').forEach(b=>{const active=b.dataset.section===next;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
 $('#app-title').textContent=next==='acids'?'Oxoazidoak izendapen tradizionalean':'Oxogatzak Stock izendapenean';

 $('#choice-label').textContent=next==='acids'?'Oxoazidoa':'Oxigatza · Stock';
 $('#toggle-suffix').hidden=next!=='acids';$('#suffix-reference').hidden=true;
 $('#toggle-suffix').setAttribute('aria-expanded','false');
 const sel=$('#acid');sel.replaceChildren();activeItems().forEach((a,i)=>sel.add(new Option(a.name,String(i))));sel.value='0';
 setMode(mode);
}

function renderRules(){
  $('#rules').innerHTML = mode==='name'
  ? `<ol><li>Identifikatu elementu nagusia eta haren oxidazio-zenbakiak.</li><li>Bilatu izeneko aurrizkia eta atzizkia.</li><li>Lotu balentziak eta izendapen tradizionala; aukeratu dagokion balioa.</li><li>Jarri elementua eta O (−2) oxidazio-zenbakiekin <strong>goian</strong>.</li><li><strong>Gurutzatu</strong> balio absolutuak eta <strong>sinplifikatu</strong> anhidridoa.</li><li>Gehitu dagokion <strong>H₂O kopurua</strong> (meta, piro, orto).</li><li>Kontatu atomoak, sinplifikatu eta idatzi oxoazidoaren formula.</li></ol>`
  : `<ol><li>Kalkulatu elementu nagusiaren oxidazio-zenbakia modu bisualean: H = +1, O = −2.</li><li>Ikusi zenbat ematen duen H-k eta O-k, eta hortik ondorioztatu elementu nagusiaren ekarpena.</li><li>Identifikatu elementua eta haren ohiko balentziak.</li><li>Lotu balentziak eta izendapen tradizionala.</li><li>Nabarmendu kalkulatutako balentzia eta, P/As/Sb kasuan, bereizi meta-, piro- eta orto-. Piro- (ura) eta per- (balentzia) ez dira gauza bera.</li><li>Idatzi azidoaren izen osoa.</li></ol>`;
}
function renderRoadmap(){
  // Hasieran ere, ibilbide bera erakutsi, baina urratsik aktibatu gabe.
  const roadmapSteps = steps.length ? steps : activeBuild(activeItems()[Number($('#acid').value)]);
  $('#rules').innerHTML=`<ol class="roadmap">${roadmapSteps.map((s,i)=>{
    const n=i+1;
    const state=n===visible?' current':n<visible?' completed':' upcoming';
    return `<li class="roadmap-item${state}" ${n===visible?'aria-current="step"':''}><span class="roadmap-number">${n}</span><span>${s.t}</span></li>`;
  }).join('')}</ol>`;
  const active=$('#rules .roadmap-item.current');
  if(active){
    requestAnimationFrame(()=>{
      const pane=$('#rules');
      const top=active.offsetTop-pane.offsetTop;
      const bottom=top+active.offsetHeight;
      if(top<pane.scrollTop||bottom>pane.scrollTop+pane.clientHeight){
        pane.scrollTo({top:Math.max(0,top-24),behavior:'smooth'});
      }
    });
  }
}
function render(){
  const total=steps.length;
  $('#counter').textContent=`${visible} / ${total} urrats`;
  $('#guide').innerHTML = total ? (visible ? steps.slice(0,visible).map((s,i)=>`<article class="step${s.final?' final':''}" id="step-${i+1}"><span class="n">${i+1}</span><div><strong>${s.t}</strong><div class="eq">${s.e}</div><p>${s.p}</p></div></article>`).reverse().join('') : '<p class="empty">Sakatu «Hurrengo urratsa» lehen pausoa ikusteko.</p>') : '<p class="empty">Sakatu «Hasi ibilbidea».</p>';
  $('#prev').disabled = visible===0;
  $('#next').disabled = !total || visible===total;
  $('#all').disabled = !total || visible===total;
  $('#next').textContent = visible===total ? 'Amaituta ✓' : 'Hurrengo urratsa →';
  renderRoadmap();
}
function renderSuffixReference(){
  // Taula orokorra: ez dago hautatutako elementuaren mende.
  $('#suffix-reference').innerHTML=`<p><strong>Atzizki tradizionalak: arau orokorra</strong></p>
    <p class="suffix-note">Oxidazio-zenbakiak txikienetik handienera ordenatuta.</p>
    <div class="suffix-table-wrap"><table class="suffix-table">
      <thead><tr><th>Balentzia</th><th>1 balentzia</th><th>2 balentzia</th><th>3 balentzia</th><th>4 balentzia</th></tr></thead>
      <tbody>
        <tr><th>1.a (txikiena)</th><td>-iko</td><td>-oso</td><td>hipo-…-oso</td><td>hipo-…-oso</td></tr>
        <tr><th>2.a</th><td>—</td><td>-iko</td><td>-oso</td><td>-oso</td></tr>
        <tr><th>3.a</th><td>—</td><td>—</td><td>-iko</td><td>-iko</td></tr>
        <tr><th>4.a (handiena)</th><td>—</td><td>—</td><td>—</td><td>per-…-iko</td></tr>
      </tbody></table></div>
    <p class="suffix-note">3 balentzia: hipo-…-oso / -oso / -iko. 4 balentzia: hipo-…-oso / -oso / -iko / per-…-iko.</p>`;
}
function selected(){
  const a=activeItems()[Number($('#acid').value)];
  $('#selected').innerHTML=(mode==='name'?a.name:fmt(a.formula))+`<small>${mode==='name'?'Izena aukeratuta: formula eraikiko dugu.':'Formula aukeratuta: izena eta formulazioaren bidea ikusiko ditugu.'}</small>`;
  steps=[]; visible=0; render();if(section==='acids')renderSuffixReference();
}
function setMode(next){
  mode=next;
  ['name','formula'].forEach(m=>{$('#mode-'+m).classList.toggle('active',m===mode);$('#mode-'+m).setAttribute('aria-pressed',String(m===mode));});
  $('#mode-help').textContent = section==='salts' ? (mode==='name'?'Aukeratu Stock izena eta eraiki oxigatza urratsez urrats.':'Aukeratu formula eta ondorioztatu Stock izena.') : (mode==='name' ? 'Aukeratu oxoazidoaren izena; urrats bakoitza botoiarekin agertuko da.' : 'Aukeratu oxoazidoaren formula; izena modu bisualean ondorioztatuko dugu.');
  $('#acid').querySelectorAll('option').forEach((o,i)=>o.textContent=mode==='name'?activeItems()[i].name:activeItems()[i].formula);
  selected();
}
function scrollToElement(el){ if(!el) return; const y=el.getBoundingClientRect().top + window.pageYOffset - 84; window.scrollTo({top:Math.max(0,y), behavior:'smooth'}); }
function scrollToLatestStep(){ requestAnimationFrame(()=>{ const list=$('#guide').querySelectorAll('.step'); const target=list[list.length-1] || $('#journey'); scrollToElement(target); }); }
acids.forEach((a,i)=>$('#acid').add(new Option(a.name,String(i))));
$('#acid').value='0';
$('#acid').addEventListener('change',selected);
$('#random').addEventListener('click',()=>{ let next=Math.floor(Math.random()*activeItems().length); if(activeItems().length>1 && next===Number($('#acid').value)) next=(next+1)%activeItems().length; $('#acid').value=String(next); selected(); });
$('#mode-name').addEventListener('click',()=>setMode('name'));
$('#mode-formula').addEventListener('click',()=>setMode('formula'));
$('#start').addEventListener('click',()=>{ steps=activeBuild(activeItems()[Number($('#acid').value)]); visible=0; render(); $('#guide').scrollTop=0; scrollToElement($('#journey')); });
$('#reset').addEventListener('click',()=>{ visible=0; render(); $('#guide').scrollTop=0; scrollToElement($('#journey')); });
$('#next').addEventListener('click',()=>{ visible=Math.min(steps.length,visible+1); render(); $('#guide').scrollTop=0; });
$('#prev').addEventListener('click',()=>{ visible=Math.max(0,visible-1); render(); $('#guide').scrollTop=0; });
$('#all').addEventListener('click',()=>{ visible=steps.length; render(); $('#guide').scrollTop=0; });
document.querySelectorAll('.nav-option').forEach(button=>button.addEventListener('click',()=>setSection(button.dataset.section)));
$('#sidebar-collapse').addEventListener('click',()=>document.querySelector('.app-frame').classList.toggle('collapsed'));
$('#toggle-suffix').addEventListener('click',()=>{const area=$('#suffix-reference');const hidden=!area.hidden;area.hidden=hidden;$('#toggle-suffix').setAttribute('aria-expanded',String(!hidden));});
$('#toggle-rules').addEventListener('click',()=>{ rulesHidden=!rulesHidden; $('#rules').hidden=rulesHidden; $('#toggle-rules').textContent=rulesHidden?'Gida erakutsi':'Gida ezkutatu'; $('#toggle-rules').setAttribute('aria-expanded',String(!rulesHidden)); });
setMode('name');
if('serviceWorker' in navigator && location.protocol!=='file:') navigator.serviceWorker.register('./service-worker.js').catch(()=>{});
