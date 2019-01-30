const headers = [
  "chrom",
  "start",
  "end",
  "ref",
  "alt",
  "gene",
  "clinvar_pathogenic",
  "clinvar_disease_name"
];

// Split each variant-record at "|" to get an array
const unformattedData = [
  "chrom|start|end|ref|alt|gene|clinvar_pathogenic|clinvar_disease_name",
  "chr1|25747229|25747230|G|C|RHCE|17709:Benign|RH_C/c_POLYMORPHISM",
  "chr1|53676447|53676448|G|A|CPT2|30118:risk_factor|Encephalopathy,_acute,_infection-induced,_4,_susceptibility_to",
  "chr1|161599692|161599693|T|C|FCGR3B|36924:Pathogenic|Neutrophil-specific_antigens_na1/na2",
  "chr1|171076965|171076966|G|A|FMO3|16318:Pathogenic/Likely_pathogenic|217371:Pathogenic|Trimethylaminuria|Trimethylaminuria,_mild",
  "chr1|171083241|171083242|A|G|FMO3|16318:Pathogenic/Likely_pathogenic|Trimethylaminuria|Trimethylaminuria,_mild",
  "chr1|179545049|179545050|C|A|NPHS2|225143:Pathogenic|Nephrotic_syndrome,_idiopathic,_steroid-resistant",
  "chr1|207627692|207627693|T|C|CR2|17065:risk_factor|Systemic_lupus_erythematosus_9",
  "chr1|207646321|207646322|G|A|CR2|17065:risk_factor|Systemic_lupus_erythematosus_9",
  "chr1|207646461|207646462|G|A|CR2|17065:risk_factor|Systemic_lupus_erythematosus_9",
  "chr1|209880215|209880216|C|CA|HSD11B1|8911:Uncertain_significance|Cortisone_reductase_deficiency_2",
  "chr1|209880258|209880259|T|G|HSD11B1|8911:Uncertain_significance|Cortisone_reductase_deficiency_2",
  "chr3|15686533|15686534|C|T|BTD|38571:Pathogenic|Biotinidase_deficiency",
  "chr3|38645419|38645420|T|C|SCN5A|440849:Pathogenic|Progressive_familial_heart_block_type_1A",
  "chr3|42733467|42733468|T|C|KLHL40|228777:Uncertain_significance|not_specified",
  "chr3|52821010|52821011|A|G|ITIH1|14798:Benign|14799:Benign|INTER-ALPHA-TRYPSIN_INHIBITOR,_HEAVY_CHAIN_1_POLYMORPHISM",
  "chr3|193355101|193355102|T|C|OPA1|5089:risk_factor|Glaucoma,_normal_tension,_susceptibility_to",
  "chr7|150695725|150695726|T|C|NOS3|496809:risk_factor|Metabolic_syndrome,_susceptibility_to",
  "chr7|150696110|150696111|T|G|NOS3|496809:risk_factor|Metabolic_syndrome,_susceptibility_to"
];

// convert array to an object
const data = unformattedData
  .slice(1)
  .map(record => record.split("|"))
  .map(record => {
    return record.reduce((obj, val, index) => {
      obj[headers[index]] = val;
      return obj;
    }, {});
  });

export { data, headers, unformattedData };
// export { unformattedData };
