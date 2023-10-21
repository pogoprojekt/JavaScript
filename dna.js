let dna = require("./brca1.json");

let START_CODON = "atg";
let END_CODON = "taa";
let geneLength = dna.length;
let startIndex = dna.indexOf(START_CODON);
let endIndex = startIndex;
let genes = [];
let foundeGene = [];

let i = startIndex;

for( i; startIndex !== -1; startIndex + 3){
  while (!foundeGene){

    endIndex = dna.indexOf(END_CODON, endIndex + 3);
  let geneCandidate = dna.slice(startIndex, endIndex + 3);

  if (geneCandidate.length % 3 === 0 && geneCandidate.length > 6) {
    foundeGene = geneCandidate;
    genes.push(geneCandidate);
  }
  if (endIndex === -1) {
    foundeGene = "No gene";
  }
}
foundeGene = 0; // logiczne przypisanie 0
startIndex = dna.indexOf(START_CODON, startIndex + 3);
endIndex = startIndex;
}

console.log(genes.length);
let firstDNA ="";

for (j = 0; j < genes.length; j++){ // wyszukiwanie najdluzszego
  if (genes[j].length > firstDNA.length){
    firstDNA = genes[j];
  }
}

let shortDNA = genes[0]; // wyszukiwanie najkrotszego
for (k = 0; k < genes.length; k++){
  if (genes[k].length < shortDNA.length){
    shortDNA = genes[k];
  }
}
console.log(firstDNA);
console.log(shortDNA);