/**
 * Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA.

For example:

"GCAT"  =>  "GCAU"

 */

const DNAtoRNA = (dna) => dna.split('').map(i => i === 'T' ? 'U' : i).join('');

console.log(DNAtoRNA('GCAT'));

// solution 2
const DNAtoRNA2 = (dna) => dna.split('T').join('U');

console.log(DNAtoRNA2('GCAT'));
