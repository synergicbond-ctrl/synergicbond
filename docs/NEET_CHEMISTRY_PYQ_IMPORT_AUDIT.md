# NEET Chemistry PYQ Import Audit

Generated: 2026-07-10T03:02:07.900Z

## Source Audit

- Extracted TSX files audited: 50
- Raw records found by parser: 1440
- Manifest claimed records: 1440
- Accepted normalized records: 909
- Rejected records: 531

## Rejection Rules

- Rejected malformed records with missing fields, invalid answer keys, missing four-option structure, duplicated normalized stems/options, source-book page tails, publisher/page branding, placeholder markers, unmapped chapters, and visibly corrupted extraction glyphs.
- Raw solution prose was not copied into the generated database.
- No generic or template solution is treated as a solved explanation. Each imported explanation is a review flag until an independently authored Synergic Bond solution is written.
- All imported records remain `NEEDS_MANUAL_REVIEW` until a subject expert verifies the official key, notation, and solution reasoning question-by-question.
- Source-book order is not used. The generated master is sorted by year, chapter, and stable content hash.
- Redox Reactions and Electrochemistry was split by chemistry keywords; ambiguous combined records were rejected.

## Rejection Summary

- corrupted extraction glyphs: 394
- damaged chemistry notation: 90
- missing or malformed four options: 77
- missing required field: 19
- invalid year: 19
- unmapped or ambiguous chapter: 10
- source-book page tail: 7
- question stem too short after option extraction: 7
- option contains leaked solution prose or another question: 2
- publisher branding or page reference: 1

## Raw Chapter Counts

- Atomic Structure: 61
- Biomolecules, Chemistry in Everyday Life and Environmental Chemistry: 83
- Chemical Bonding and Molecular Structure: 102
- Chemical Equilibrium: 25
- Chemical Kinetics: 52
- Chemical Thermodynamics: 74
- Classification of Elements and Periodicity: 34
- Coordination Compounds: 73
- d- and f-Block Elements: 77
- Hydrocarbons: 61
- Hydrogen: 5
- Ionic Equilibrium: 59
- Isolation of Metals: 25
- Organic Chemistry - Basic Principles: 90
- Organic Compounds Containing Halogens: 26
- Organic Compounds Containing Nitrogen: 43
- Organic Compounds Containing Oxygen: 87
- p-Block Elements: 96
- Polymers: 34
- Purification and Characterisation of Organic Compounds: 15
- Redox Reactions and Electrochemistry: 63
- s-Block Elements: 37
- Solid State: 38
- Solutions: 60
- Some Basic Concepts in Chemistry: 51
- States of Matter: 42
- Surface Chemistry: 27

## Accepted Chapter Counts

- Alcohols Phenols Ethers: 11
- Aldehydes Ketones: 15
- Amines: 15
- Atomic Structure: 52
- Biomolecules: 47
- Carboxylic Acids: 8
- Chemical Bonding: 88
- Chemical Kinetics: 27
- Chemistry in Everyday Life: 10
- Coordination Compounds: 63
- d and f Block Elements: 55
- Electrochemistry: 27
- Equilibrium: 53
- General Organic Chemistry: 38
- Haloalkanes and Haloarenes: 19
- Hydrocarbons: 33
- Hydrogen: 1
- Metallurgy: 18
- p-Block Elements: 58
- Periodic Table: 29
- Polymers: 18
- Redox Reactions: 1
- s-Block Elements: 26
- Solid State: 37
- Solutions: 40
- Some Basic Concepts: 31
- States of Matter: 30
- Surface Chemistry: 25
- Thermodynamics: 34

## Accepted Year Counts

- 1988: 12
- 1989: 29
- 1990: 17
- 1991: 20
- 1992: 17
- 1993: 22
- 1994: 46
- 1995: 22
- 1996: 26
- 1997: 27
- 1998: 30
- 1999: 29
- 2000: 31
- 2001: 28
- 2002: 22
- 2003: 23
- 2004: 34
- 2005: 24
- 2006: 29
- 2007: 27
- 2008: 30
- 2009: 21
- 2010: 21
- 2011: 20
- 2012: 17
- 2013: 22
- 2014: 18
- 2015: 47
- 2016: 48
- 2017: 21
- 2018: 20
- 2019: 42
- 2020: 43
- 2021: 24

## First Rejected Samples

- NEET-PYQ-0005 (NeetPyqPart01.tsx): corrupted extraction glyphs
- NEET-PYQ-0010 (NeetPyqPart01.tsx): corrupted extraction glyphs
- NEET-PYQ-0011 (NeetPyqPart01.tsx): source-book page tail
- NEET-PYQ-0018 (NeetPyqPart01.tsx): corrupted extraction glyphs
- NEET-PYQ-0019 (NeetPyqPart01.tsx): corrupted extraction glyphs
- NEET-PYQ-0021 (NeetPyqPart01.tsx): damaged chemistry notation
- NEET-PYQ-0023 (NeetPyqPart01.tsx): corrupted extraction glyphs
- NEET-PYQ-0026 (NeetPyqPart01.tsx): question stem too short after option extraction
- NEET-PYQ-0030 (NeetPyqPart02.tsx): missing or malformed four options, corrupted extraction glyphs
- NEET-PYQ-0031 (NeetPyqPart02.tsx): damaged chemistry notation
- NEET-PYQ-0032 (NeetPyqPart02.tsx): corrupted extraction glyphs, damaged chemistry notation
- NEET-PYQ-0033 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0037 (NeetPyqPart02.tsx): source-book page tail
- NEET-PYQ-0038 (NeetPyqPart02.tsx): damaged chemistry notation
- NEET-PYQ-0040 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0042 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0043 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0045 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0047 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0052 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0053 (NeetPyqPart02.tsx): missing or malformed four options, corrupted extraction glyphs
- NEET-PYQ-0055 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0057 (NeetPyqPart02.tsx): corrupted extraction glyphs
- NEET-PYQ-0059 (NeetPyqPart03.tsx): corrupted extraction glyphs
- NEET-PYQ-0060 (NeetPyqPart03.tsx): corrupted extraction glyphs
- NEET-PYQ-0066 (NeetPyqPart03.tsx): corrupted extraction glyphs
- NEET-PYQ-0068 (NeetPyqPart03.tsx): damaged chemistry notation
- NEET-PYQ-0071 (NeetPyqPart03.tsx): corrupted extraction glyphs
- NEET-PYQ-0073 (NeetPyqPart03.tsx): corrupted extraction glyphs
- NEET-PYQ-0074 (NeetPyqPart03.tsx): corrupted extraction glyphs
